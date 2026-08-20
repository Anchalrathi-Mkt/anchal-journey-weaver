import { profile } from "@/data/portfolio";
import { useI18n } from "@/i18n";
import { Reveal, useImageFallback } from "./primitives";

function Portrait() {
  const { failed, imgRef, onError } = useImageFallback();

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -bottom-6 -right-6 hidden h-full w-full bg-clay/45 md:block"
      />
      <div
        className="zoom-media relative overflow-hidden bg-surface"
        style={{ aspectRatio: "4 / 5" }}
      >
        {failed ? (
          <div className="placeholder-fill flex h-full w-full flex-col items-center justify-center gap-4 bg-surface">
            <span className="display text-[clamp(3.5rem,9vw,5.5rem)] tracking-[0.12em] text-foreground/70">
              AR
            </span>
            <span className="label-xs">Anchal Rathi</span>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={profile.portrait}
            onError={onError}
            alt="Anchal Rathi"
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export function Introduction() {
  const { t } = useI18n();
  const intro = t.intro;

  return (
    <section id="introduction">
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-16 md:px-10 md:pb-36 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[54fr_46fr] lg:gap-24">
          {/* Text column */}
          <div className="min-w-0">
            <Reveal>
              <p className="nav-link text-muted-foreground">{intro.greeting}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[clamp(2.5rem,5.6vw,4.4rem)]">
                {intro.tagline}
              </h1>
            </Reveal>

            <div className="mt-10 space-y-6">
              {intro.paragraphs.map((p, i) => (
                <Reveal key={i} delay={140 + i * 70}>
                  <p className="max-w-[62ch] text-[17px] leading-[1.85] text-muted-foreground">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={360}>
              <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-6">
                {intro.facts.map((f) => (
                  <li key={f} className="label-xs">
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a href="#experience" className="btn-ink">
                  {intro.viewWork}
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link rule-link text-foreground/80"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image column */}
          <Reveal delay={160} className="min-w-0 lg:pl-6">
            <Portrait />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
