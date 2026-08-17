import { intro, profile } from "@/data/portfolio";
import { Reveal, useImageFallback } from "./primitives";

export function Introduction() {
  const { failed, imgRef, onError } = useImageFallback();

  return (
    <section id="introduction" className="pt-[116px]">
      {/* Editorial statement band */}
      <div className="relative isolate overflow-hidden bg-ink">
        {!failed && (
          <img
            ref={imgRef}
            src={profile.portrait}
            alt=""
            aria-hidden="true"
            onError={onError}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          />
        )}
        <div className="mx-auto flex min-h-[560px] max-w-[1280px] flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <p className="nav-link text-ink-foreground/70">The mission statement</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 text-ink-foreground">
              <span className="display block text-[clamp(2.4rem,6.6vw,4.6rem)]">
                I work at the <span className="script-em">intersection</span> of
              </span>
              <span className="display mt-2 block text-[clamp(2.4rem,6.6vw,4.6rem)]">
                marketing, <span className="script-em">technology</span> &amp; data
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[52ch] text-[15px] leading-[1.85] text-ink-foreground/75">
              Marketing &amp; Sales professional — SEO, CRM, website development and analytics.
              Currently based in Paris, France.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
              <a href="#experience" className="btn-clay">
                View Experience
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link rule-link text-ink-foreground/80"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Overlapping editorial intro */}
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[42fr_58fr] lg:gap-24">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-6 -top-6 hidden h-full w-full bg-clay md:block" />
              <div className="relative bg-surface px-8 py-12 md:px-12 md:py-16">
                <p className="nav-link">{intro.label}</p>
                <p className="display mt-8 text-[clamp(2rem,4.4vw,3.1rem)]">
                  So what makes me <span className="script-em">different?</span>
                </p>
                <ul className="mt-10 space-y-3 border-t border-border pt-6">
                  {intro.facts.map((f) => (
                    <li key={f} className="label-xs">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="min-w-0 space-y-7 lg:pt-6">
            {intro.paragraphs.map((p, i) => (
              <Reveal key={i} delay={100 + i * 70}>
                <p className="max-w-[62ch] text-[17px] leading-[1.85] text-muted-foreground">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={340}>
              <a href="#contact" className="btn-ink mt-4">
                Get in touch
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
