import { intro, profile } from "@/data/portfolio";
import { Reveal, Label, useImageFallback } from "./primitives";

export function Introduction() {
  const { failed, imgRef, onError } = useImageFallback();


  return (
    <section id="introduction" className="mx-auto max-w-[1280px] px-6 pt-36 pb-24 md:px-10 md:pt-48 md:pb-36">
      <div className="grid gap-14 lg:grid-cols-[55fr_45fr] lg:gap-20">
        <div>
          <Reveal>
            <Label>{intro.label}</Label>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8">
              <span className="display block text-[clamp(3.2rem,9vw,5.6rem)]">
                {intro.headline}
              </span>
              <span className="mt-5 block max-w-[19ch] text-[clamp(1.05rem,2.4vw,1.6rem)] font-light leading-[1.35] tracking-tight text-muted-foreground">
                {intro.subline}
              </span>
            </h1>
          </Reveal>

          <div className="mt-12 max-w-[54ch] space-y-6">
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p className="text-[17px] leading-[1.75] text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-6">
              {intro.facts.map((f) => (
                <li key={f} className="label-xs">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a href="#experience" className="group text-[14px] text-foreground">
                <span className="rule-link">View Experience</span>{" "}
                <span className="inline-block transition-transform duration-500 group-hover:translate-y-[3px]">
                  ↓
                </span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-[14px] text-accent"
              >
                <span className="rule-link">LinkedIn</span> <span className="arrow-shift">↗</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="lg:pt-4">
          <div className="zoom-media overflow-hidden rounded-[6px] border border-border bg-surface">
            <div style={{ aspectRatio: "4 / 5" }}>
              {failed ? (
                <div className="placeholder-fill flex h-full w-full items-center justify-center">
                  <span className="font-serif text-[clamp(4rem,10vw,7rem)] font-light tracking-[0.08em] text-muted-foreground">
                    AR
                  </span>
                </div>
              ) : (
                <img
                  ref={imgRef}
                  src={profile.portrait}
                  alt="Portrait of Anchal Rathi"
                  onError={onError}

                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
