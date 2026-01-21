import { ThemeData } from "@/types/template";

interface WhyChooseUsSectionProps {
  title?: string;
  paragraphs?: string[];
  bullets?: string[];
  theme?: ThemeData;
}

export default function WhyChooseUsSection({
  title = "Why Choose Us",
  paragraphs = [],
  bullets = [],
  theme,
}: WhyChooseUsSectionProps) {
  const primaryColor = theme?.primaryColor || "#0f172a";
  const secondaryColor = theme?.secondaryColor || "#475569";

  if (paragraphs.length === 0 && bullets.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ borderColor: `${primaryColor}33`, color: primaryColor }}
          >
            Why Junk Butlers
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
        </div>

        {paragraphs.length > 0 && (
          <div className="mt-8 space-y-5 text-base leading-relaxed sm:text-lg" style={{ color: secondaryColor }}>
            {paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        )}

        {bullets.length > 0 && (
          <div className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white/90 px-5 py-4 text-left shadow-sm"
                  style={{ borderColor: `${primaryColor}1f` }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <p className="text-base font-semibold" style={{ color: primaryColor }}>
                      {bullet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
