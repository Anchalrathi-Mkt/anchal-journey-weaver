import { profile } from "@/data/portfolio";
import { useI18n } from "@/i18n";
import { Reveal, Label, ListColumns } from "./primitives";

export function Skills() {
  const { t } = useI18n();
  const ui = t.ui.skills;

  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{ui.label}</Label>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
            {ui.headingA} <span className="script-em">{ui.headingB}</span>
          </h2>
          <p className="mt-8 max-w-[58ch] text-[17px] leading-[1.85] text-muted-foreground">
            {ui.intro}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {t.skillGroups.map((group, i) => (
            <Reveal key={group.heading} delay={i * 70}>
              <div className="border-t border-border pt-6">
                <h3 className="font-serif text-[22px] font-light">{group.heading}</h3>
                <div className="mt-5">
                  <ListColumns items={group.items} columns={1} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const { t } = useI18n();
  const education = t.education;

  return (
    <section id="education" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{education.label}</Label>
          <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.4rem,5.4vw,3.8rem)]">
            {education.heading}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-20 border-t border-border pt-10">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-20">
              <div>
                <h3 className="font-serif text-[clamp(1.6rem,3vw,2.2rem)] font-light">
                  {education.institution}
                </h3>
                <p className="mt-4 text-[15px]">{education.degree}</p>
                <p className="text-[15px] text-muted-foreground">{education.qualification}</p>
                <p className="mt-3 label-xs">
                  {education.from} — {education.to} · {education.location}
                </p>
              </div>
              <div className="max-w-[58ch] text-[17px] leading-[1.8] text-muted-foreground">
                <p>{education.description}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-24 border-t border-border pt-10">
            <Label>{education.additional}</Label>
            <div className="mt-8 grid gap-10 text-[15px] md:grid-cols-3">
              <div>
                <p className="label-xs !text-foreground">{education.languagesLabel}</p>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {education.languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-xs !text-foreground">{education.certificationsLabel}</p>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {education.certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="label-xs !text-foreground">{education.achievementsLabel}</p>
                <ul className="mt-3 space-y-1.5 text-muted-foreground">
                  {education.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useI18n();
  const ui = t.ui.contact;

  return (
    <section id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1280px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <span className="label-xs block !text-ink-foreground opacity-60">{ui.label}</span>
          <h2 className="display mt-6 text-[clamp(3rem,8vw,5.4rem)]">
            {ui.headingA} <span className="script-em">{ui.headingB}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-20">
          <Reveal delay={80}>
            <div className="max-w-[54ch] space-y-5 text-[17px] leading-[1.8] opacity-75">
              <p>{ui.p1}</p>
              <p>{ui.location}</p>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href={`mailto:${profile.email}`} className="btn-clay">
                {ui.emailMe}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link rule-link !text-ink-foreground opacity-80"
              >
                LinkedIn ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-8 md:pt-2">
              <div>
                <span className="label-xs block !text-ink-foreground opacity-60">
                  {ui.emailLabel}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="rule-link mt-2 inline-block font-serif text-[clamp(1.2rem,2.4vw,1.7rem)] font-light"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <span className="label-xs block !text-ink-foreground opacity-60">
                  {ui.phoneLabel}
                </span>
                <a
                  href="tel:+33744767418"
                  className="rule-link mt-2 inline-block font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] font-light"
                >
                  +33 744 76 74 18
                </a>
              </div>
              <div>
                <span className="label-xs block !text-ink-foreground opacity-60">
                  {ui.linkedinLabel}
                </span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 inline-block font-serif text-[clamp(1.1rem,2.2vw,1.5rem)] font-light"
                >
                  <span className="rule-link">{profile.linkedinLabel}</span>{" "}
                  <span className="arrow-shift">↗</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 border-t border-ink-foreground/15 px-6 py-8 md:px-10">
        <div className="flex flex-wrap items-center gap-6">
          <span className="font-serif text-[17px] uppercase tracking-[0.24em]">Anchal Rathi</span>
          <span className="label-xs !text-ink-foreground opacity-60">{t.ui.footer.location}</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="label-xs !text-ink-foreground opacity-60">{t.ui.footer.copyright}</span>
          <a href="#introduction" className="label-xs rule-link !text-ink-foreground">
            {t.ui.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
