import Image from "next/image";

interface ThemeProps {
  primaryColor?: string;
  secondaryColor?: string;
}

interface ImageSpec {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface RowContent {
  heading: string;
  description: string;
}

interface ServiceAreaDetailSectionProps {
  theme?: ThemeProps;
  row1: RowContent;
  row1Image: ImageSpec;
  row2: RowContent;
  row2Image: ImageSpec;
  row3?: RowContent;
  row3Image?: ImageSpec;
}

export default function ServiceAreaDetailSection({ theme, row1, row1Image, row2, row2Image, row3, row3Image }: ServiceAreaDetailSectionProps) {
  const primary = theme?.primaryColor ?? "#0ea5e9"; // default sky-500
  const secondary = theme?.secondaryColor ?? "#334155"; // default slate-700

  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        {/* Row 1: Text left, Image right (stacked on mobile with image first) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-20 md:mb-28">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: primary }}>
              {row1.heading}
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondary}CC` }}>
              {row1.description}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <Image
                src={row1Image.src}
                alt={row1Image.alt}
                width={row1Image.width ?? 720}
                height={row1Image.height ?? 480}
                className="h-[700px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (stacked on mobile with image first) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center mb-20 md:mb-28">
          <div className="order-1">
            <div className="overflow-hidden rounded-xl border border-gray-100">
              <Image
                src={row2Image.src}
                alt={row2Image.alt}
                width={row2Image.width ?? 720}
                height={row2Image.height ?? 480}
                className="h-[600px] w-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4" style={{ color: primary }}>
              {row2.heading}
            </h3>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondary}CC` }}>
              {row2.description}
            </p>
          </div>
        </div>

        {/* Row 3: Text left, Image right (stacked on mobile with image first) */}
        {row3 && row3Image && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4" style={{ color: primary }}>
                {row3.heading}
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: `${secondary}CC` }}>
                {row3.description}
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-xl border border-gray-100">
                <Image
                  src={row3Image.src}
                  alt={row3Image.alt}
                  width={row3Image.width ?? 720}
                  height={row3Image.height ?? 480}
                  className="h-[700px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

