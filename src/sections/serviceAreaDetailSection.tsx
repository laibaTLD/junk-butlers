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

  // Common row class to reduce repetition
  const rowClass = "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center mb-16 sm:mb-20 md:mb-24 lg:mb-28";
  const imageWrapperClass = "relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg sm:rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300";
  const contentClass = "space-y-4 sm:space-y-5 md:space-y-6";
  const headingClass = "text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight";
  const textClass = "text-sm sm:text-base md:text-lg leading-relaxed text-opacity-90";

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row 1: Text left, Image right (stacked on mobile with image first) */}
        <div className={rowClass}>
          <div className="order-2 lg:order-1">
            <div className={contentClass}>
              <h2 className={headingClass} style={{ color: primary }}>
                {row1.heading}
              </h2>
              <p className={textClass} style={{ color: secondary }}>
                {row1.description}
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className={imageWrapperClass}>
              <Image
                src={row1Image.src}
                alt={row1Image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (stacked on mobile with image first) */}
        <div className={rowClass}>
          <div className="order-1">
            <div className={imageWrapperClass}>
              <Image
                src={row2Image.src}
                alt={row2Image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-2">
            <div className={contentClass}>
              <h3 className={headingClass} style={{ color: primary }}>
                {row2.heading}
              </h3>
              <p className={textClass} style={{ color: secondary }}>
                {row2.description}
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Text left, Image right (stacked on mobile with image first) */}
        {row3 && row3Image && (
          <div className={rowClass}>
            <div className="order-2 lg:order-1">
              <div className={contentClass}>
                <h3 className={headingClass} style={{ color: primary }}>
                  {row3.heading}
                </h3>
                <p className={textClass} style={{ color: secondary }}>
                  {row3.description}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className={imageWrapperClass}>
                <Image
                  src={row3Image.src}
                  alt={row3Image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

