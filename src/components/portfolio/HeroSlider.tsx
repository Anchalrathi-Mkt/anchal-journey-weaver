import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import latinaHome from "@/assets/latina-home.jpg.asset.json";
import latinaAbout from "@/assets/latina-about.png.asset.json";
import latinaProducts from "@/assets/latina-products.jpg.asset.json";
import latinaPartners from "@/assets/latina-partners.jpg.asset.json";
import powerbiDashboard from "@/assets/powerbi-dashboard.jpg.asset.json";

const slides = [
  { src: latinaHome.url, alt: "Latina S.A.M. website home page" },
  { src: latinaAbout.url, alt: "Latina S.A.M. mission and vision page" },
  { src: latinaProducts.url, alt: "Latina S.A.M. premium product categories" },
  { src: latinaPartners.url, alt: "Latina S.A.M. partner brands page" },
  { src: powerbiDashboard.url, alt: "Power BI marketing analytics dashboard" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section aria-label="Selected work" className="pt-[116px]">
      <div className="relative overflow-hidden bg-surface">
        <div
          className="relative w-full"
          style={{ aspectRatio: "16 / 7" }}
        >
          {slides.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => go(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-3 text-foreground backdrop-blur-sm transition-colors hover:bg-background md:left-8"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.25} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => go(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-3 text-foreground backdrop-blur-sm transition-colors hover:bg-background md:right-8"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.25} />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-[2px] w-10 transition-all duration-500 ${
                i === index ? "bg-foreground" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
