import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import editorialAbout from "@/assets/editorial-about.png.asset.json";
import editorialMonaco from "@/assets/editorial-monaco.png.asset.json";
import editorialDelhi from "@/assets/editorial-delhi.png.asset.json";
import editorialGrenoble from "@/assets/editorial-grenoble.png.asset.json";
import editorialData from "@/assets/editorial-data.png.asset.json";

const slides = [
  { src: editorialAbout.url, alt: "About Anchal Rathi — marketing, technology and data" },
  { src: editorialMonaco.url, alt: "Monaco — website development, SEO, CRM and analytics" },
  { src: editorialDelhi.url, alt: "Delhi — experience in SEO, PPC and digital growth" },
  { src: editorialGrenoble.url, alt: "Grenoble École de Management — digital marketing and data analytics in Paris" },
  { src: editorialData.url, alt: "Data reports — campaign data turned into clear insights" },
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
