import { Pool } from "pg";
import { cache } from "react";
import { LandingPageData, Image } from "@/types/template";

const globalForPg = globalThis as typeof globalThis & {
  pgPool?: Pool;
};

function getPool(): Pool {
  if (!globalForPg.pgPool) {
    const isBuild = process.env.NEXT_PHASE === "phase-production-build";
    globalForPg.pgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // One pool per process; cap connections during parallel SSG
      max: isBuild ? 1 : 5,
      idleTimeoutMillis: 10_000,
    });
  }
  return globalForPg.pgPool;
}

export async function query(text: string, params?: unknown[]) {
  const client = await getPool().connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}

export async function fetchLandingPageData(templateId: string, id: string): Promise<LandingPageData | null> {
  try {
    const rows = await query(`
      SELECT * FROM "LandingPage" 
      WHERE "templateId" = $1 AND id = $2
    `, [templateId, id]);
    
    if (rows.length === 0) return null;
    
    const result = rows[0] as LandingPageData;
    
    return result;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}

export async function fetchImages(landingPageId: string): Promise<Image[]> {
  const rows = await query(`
    SELECT * FROM "Image" 
    WHERE "landingPageId" = $1
    ORDER BY "createdAt" ASC
  `, [landingPageId]);
  
  return rows as Image[];
}

export async function fetchLandingPageWithImages(templateId: string, id: string): Promise<LandingPageData | null> {
  const landingPage = await fetchLandingPageData(templateId, id);
  if (!landingPage) return null;
  
  const images = await fetchImages(landingPage.id);
  return { ...landingPage, images };
}

const ssgLandingPageCache = new Map<string, Promise<LandingPageData | null>>();

async function fetchLandingPageForSSGImpl(
  templateId: string,
  id: string
): Promise<LandingPageData | null> {
  try {
    const rows = await query(`
      SELECT 
        lp.*,
        COALESCE(
          json_agg(
            json_build_object(
              'id', img.id,
              'landingPageId', img."landingPageId",
              'title', img.title,
              'altText', img."altText",
              'imageUrl', img."imageUrl",
              'slotName', img."slotName",
              'category', img.category,
              'createdAt', img."createdAt"
            ) ORDER BY img."createdAt" ASC
          ) FILTER (WHERE img.id IS NOT NULL),
          '[]'::json
        ) as images
      FROM "LandingPage" lp
      LEFT JOIN "Image" img ON lp.id = img."landingPageId"
      WHERE lp."templateId" = $1 AND lp.id = $2
      GROUP BY lp.id
    `, [templateId, id]);

    if (rows.length === 0) return null;

    return rows[0] as LandingPageData & { images: Image[] };
  } catch (error) {
    console.error("Error fetching landing page data for SSG:", error);
    throw error;
  }
}

// Optimized function for SSG build-time data fetching (deduped per worker + per render)
export const fetchLandingPageForSSG = cache(
  async (templateId: string, id: string): Promise<LandingPageData | null> => {
    const key = `${templateId}:${id}`;
    let pending = ssgLandingPageCache.get(key);
    if (!pending) {
      pending = fetchLandingPageForSSGImpl(templateId, id);
      ssgLandingPageCache.set(key, pending);
    }
    return pending;
  }
);

// Function to get all available landing pages for static generation
export async function getAllLandingPageIds(): Promise<Array<{ templateId: string; id: string }>> {
  try {
    const rows = await query(`
      SELECT "templateId", id 
      FROM "LandingPage" 
      WHERE status = 'published'
      ORDER BY "updatedAt" DESC
    `);
    
    return rows.map(row => ({
      templateId: row.templateId,
      id: row.id
    }));
  } catch (error) {
    console.error('Error fetching landing page IDs:', error);
    return [];
  }
}

export async function debugDatabaseContent() {
  try {
    console.log('🔍 Checking database connection...');
    
    // Test basic connection
    const testQuery = await query('SELECT NOW() as current_time');
    console.log('✅ Database connected successfully at:', testQuery[0]?.current_time);
    
    // Check if LandingPage table exists
    const tableCheck = await query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'LandingPage'
    `);
    
    if (tableCheck.length === 0) {
      console.log('❌ LandingPage table does not exist');
      return;
    }
    
    console.log('✅ LandingPage table exists');
    
    // Check all landing pages
    const allPages = await query('SELECT id, "templateId", "businessName" FROM "LandingPage"');
    console.log(`📊 Found ${allPages.length} landing pages in database:`);
    
    allPages.forEach((page: { id: string; templateId: string; businessName: string }) => {
      console.log(`  - ID: ${page.id}, Template: ${page.templateId}, Business: ${page.businessName}`);
    });
    
    // Check for specific template
    const specificPage = await query(`
      SELECT * FROM "LandingPage" 
      WHERE "templateId" = $1 AND id = $2
    `, ['premium-corporate-template', 'c0f6f1c7-82d2-4410-92ab-26d6071d5c3c']);
    
    if (specificPage.length > 0) {
      console.log('✅ Found the requested landing page:', specificPage[0].businessName);
    } else {
      console.log('❌ Could not find landing page with templateId: premium-corporate-template and id: c0f6f1c7-82d2-4410-92ab-26d6071d5c3c');
    }
    
  } catch (error) {
    console.error('❌ Database debug failed:', error);
  }
}
