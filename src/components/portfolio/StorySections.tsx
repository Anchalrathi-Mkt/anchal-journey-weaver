import { useI18n } from "@/i18n";
import { Reveal, Label } from "./primitives";

export function AboutMe() {
  const { t } = useI18n();
  const s = t.about;

  return (
    <section id="about" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
          <Reveal>
            <Label>{s.label}</Label>
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <h2 className="display max-w-[18ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
                {s.headingA} <span className="script-em">{s.headingB}</span>
              </h2>
            </Reveal>
            <div className="mt-10 max-w-[62ch] space-y-6 text-[17px] leading-[1.85] text-muted-foreground">
              {s.paragraphs.map((p, i) => (
                <Reveal key={i} delay={60 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemsSolved() {
  const { t } = useI18n();
  const s = t.problemsSolved;

  return (
    <section id="problems" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{s.label}</Label>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
            {s.heading}
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-12 gap-y-14 border-t border-border pt-12 md:grid-cols-2">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className={i > 0 && i % 2 === 1 ? "lg:border-l lg:border-border lg:pl-10" : "lg:pr-4"}>
                <span className="label-xs">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,1.9rem)] font-light">
                  {item.title}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.8] text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatIBring() {
  const { t } = useI18n();
  const s = t.whatIBring;

  return (
    <section id="bring" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
          <Reveal>
            <Label>{s.label}</Label>
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <h2 className="display max-w-[18ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">{s.heading}</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.85] text-muted-foreground">
                {s.intro}
              </p>
            </Reveal>
            <div className="mt-12 max-w-[62ch]">
              {s.items.map((item, i) => (
                <Reveal key={item} delay={80 + i * 40}>
                  <div className="flex items-start gap-4 border-t border-border py-4">
                    <span className="label-xs mt-0.5 text-accent">0{i + 1}</span>
                    <span className="text-[16px] text-foreground">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
