import { useI18n } from "@/i18n";
import { Reveal, Label } from "./primitives";

export function Positioning() {
  const { t } = useI18n();
  const s = t.story.positioning;

  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
          <Reveal>
            <Label>{s.label}</Label>
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <p className="display max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.1rem)] leading-[1.25]">
                {s.statementA}
                <br />
                <span className="text-muted-foreground">{s.statementB}</span>
              </p>
            </Reveal>
            <div className="mt-12 max-w-[62ch] space-y-6 text-[17px] leading-[1.85] text-muted-foreground md:mt-16">
              <Reveal delay={60}>
                <p>{s.p1}</p>
              </Reveal>
              <Reveal delay={120}>
                <p>{s.p2}</p>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-foreground">{s.p3}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowIWork() {
  const { t } = useI18n();
  const s = t.story.howIWork;

  return (
    <section id="how-i-work" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{s.label}</Label>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
            {s.heading}
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-12 gap-y-14 border-t border-border pt-12 md:grid-cols-2 lg:grid-cols-4">
          {s.steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 70}>
              <div
                className={
                  i > 0 ? "lg:border-l lg:border-border lg:pl-10" : "lg:pr-4"
                }
              >
                <span className="label-xs">{step.n}</span>
                <h3 className="mt-4 font-serif text-[clamp(1.5rem,2.6vw,1.9rem)] font-light">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] italic text-accent">{step.question}</p>
                <p className="mt-4 text-[16px] leading-[1.8] text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="display mt-20 max-w-[30ch] text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.4] md:mt-28">
            {s.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function BeyondCV() {
  const { t } = useI18n();
  const s = t.story.beyondCV;

  return (
    <section id="beyond-cv" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{s.label}</Label>
          <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
            {s.heading}
          </h2>
        </Reveal>

        <div className="mt-20 space-y-14 md:mt-24 md:space-y-20">
          {s.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="grid min-w-0 grid-cols-1 gap-6 border-t border-border pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
                <p className="label-xs !text-foreground">{item.title}</p>
                <div className="min-w-0">
                  <p className="font-serif text-[clamp(1.4rem,2.8vw,2rem)] font-light leading-[1.45]">
                    {item.statement}
                  </p>
                  <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.85] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithMe() {
  const { t } = useI18n();
  const s = t.story.why;

  return (
    <section id="why-work-with-me" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <div className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-20">
          <Reveal>
            <Label>{s.label}</Label>
          </Reveal>
          <div className="min-w-0">
            <Reveal>
              <h2 className="display max-w-[20ch] text-[clamp(2.2rem,5vw,3.4rem)]">{s.heading}</h2>
            </Reveal>
            <div className="mt-10 max-w-[62ch] space-y-6 text-[17px] leading-[1.85] text-muted-foreground">
              {s.paragraphs.map((p, i) => (
                <Reveal key={i} delay={60 + i * 50}>
                  <p className={i === s.paragraphs.length - 1 ? "text-foreground" : undefined}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          {s.reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 50}>
              <div className="grid min-w-0 grid-cols-1 gap-3 border-t border-border py-8 md:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)_minmax(0,1.6fr)] md:items-baseline md:gap-12">
                <span className="display text-[clamp(1.8rem,3.4vw,2.6rem)] text-muted-foreground">
                  {r.n}
                </span>
                <h3 className="font-serif text-[clamp(1.3rem,2.4vw,1.7rem)] font-light">
                  {r.title}
                </h3>
                <p className="max-w-[58ch] text-[16px] leading-[1.8] text-muted-foreground">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <blockquote className="mt-24 border-t border-border pt-16 md:mt-32 md:pt-24">
            <p className="display max-w-[26ch] text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.3]">
              {s.statementA}
              <br />
              <span className="script-em">{s.statementB}</span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
