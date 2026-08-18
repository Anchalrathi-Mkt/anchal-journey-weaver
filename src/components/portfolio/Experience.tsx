import { useState } from "react";
import { useI18n } from "@/i18n";
import { latinaWebsite } from "@/data/portfolio";
import { Reveal, Label, Rule, Media, Lightbox, ListColumns } from "./primitives";
import latinaHome from "@/assets/latina-home.jpg.asset.json";
import latinaAbout from "@/assets/latina-about.png.asset.json";
import latinaProducts from "@/assets/latina-products.jpg.asset.json";
import latinaPartners from "@/assets/latina-partners.jpg.asset.json";
import latinaMobile from "@/assets/latina-mobile.jpg.asset.json";
import seoBefore from "@/assets/seo-before.jpg.asset.json";
import seoAfter from "@/assets/seo-after.jpg.asset.json";
import hubspotApril from "@/assets/hubspot-april.jpg.asset.json";
import hubspotMay from "@/assets/hubspot-may.jpg.asset.json";
import hubspotJune from "@/assets/hubspot-june.jpg.asset.json";
import hubspotJuly from "@/assets/hubspot-july.jpg.asset.json";
import powerbiDashboard from "@/assets/powerbi-dashboard.jpg.asset.json";
import linkedinMinuty from "@/assets/linkedin-minuty.jpg.asset.json";
import linkedinCampari from "@/assets/linkedin-campari.jpg.asset.json";

function CompanyHead({
  index,
  company,
  role,
  location,
  dates,
  opening,
}: {
  index: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  opening: string;
}) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
      <Reveal>
        <Label>{index}</Label>
        <h3 className="display mt-4 text-[clamp(2rem,4vw,2.9rem)]">{company}</h3>
        <p className="mt-4 text-[15px] text-foreground">{role}</p>
        <p className="text-[15px] text-muted-foreground">{location}</p>
        <p className="mt-3 label-xs">{dates}</p>
      </Reveal>
      <Reveal delay={80}>
        <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground md:text-[18px]">
          {opening}
        </p>
      </Reveal>
    </div>
  );
}

function WorkArea({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
      <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
        <Reveal>
          <Label>{label}</Label>
        </Reveal>
        <div className="min-w-0">
          <Reveal>
            <h4 className="display max-w-[20ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">{heading}</h4>
          </Reveal>
          <div className="mt-8 min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

function Beat({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12 first:mt-0">
      <Label>{label}</Label>
      <div className="mt-5 max-w-[62ch] space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

function Takeaway({ text }: { text: string }) {
  return (
    <Reveal>
      <p className="mt-12 border-l border-accent pl-6 font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.5]">
        {text}
      </p>
    </Reveal>
  );
}

function Subsection({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
      <Reveal>
        <Label>{label}</Label>
        <h4 className="display mt-5 max-w-[24ch] text-[clamp(1.6rem,3vw,2.2rem)]">{heading}</h4>
      </Reveal>
      <div className="mt-8">{children}</div>
    </div>
  );
}

export function Experience() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const open = (src: string, alt: string) => setLightbox({ src, alt });
  const { t } = useI18n();
  const { experienceIntro, latina, firstMeridian, ssBeverages, ui, story } = t;
  const L = story.labels;

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <Label>{experienceIntro.label}</Label>
          <h2 className="display mt-6 text-[clamp(2.6rem,6vw,4rem)]">{experienceIntro.heading}</h2>
          <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground md:text-[18px]">
            {experienceIntro.text}
          </p>
        </Reveal>

        {/* ---------------- LATINA ---------------- */}
        <div className="mt-24 md:mt-36">
          <CompanyHead
            index={ui.experienceIndex[0] ?? "01"}
            company={latina.company}
            role={latina.role}
            location={latina.location}
            dates={latina.dates}
            opening={latina.opening}
          />

          <Reveal>
            <p className="mt-12 max-w-[72ch] text-[17px] leading-[1.85] text-muted-foreground md:mt-16 md:text-[18px]">
              {story.latinaIntro}
            </p>
          </Reveal>

          {/* Work area 01 — website */}
          <WorkArea label={ui.website.label} heading={ui.website.heading}>
            <Beat label={L.challenge}>
              <p>{story.website.challenge}</p>
            </Beat>

            <Beat label={L.whatIDid}>
              <p>{ui.website.p1}</p>
              <p>{ui.website.p2}</p>
            </Beat>

            <div className="mt-12">
              <Label>{ui.website.responsibilitiesLabel}</Label>
              <div className="mt-5">
                <ListColumns items={latina.responsibilities} columns={2} />
              </div>
            </div>

            <p className="mt-10 text-[15px] text-muted-foreground">
              {ui.website.languagesPre}{" "}
              <span className="text-foreground">{latina.languages.join(" · ")}</span>.
            </p>

            <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {ui.website.p3}
            </p>

            {/* Sitemap */}
            <div className="mt-14 border-t border-border pt-10">
              <Label>{ui.website.structureLabel}</Label>
              <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-4">
                {latina.sitemap.map((page, i) => (
                  <li key={page} className="flex items-center gap-4">
                    <span className="font-serif text-[22px] font-light">{page}</span>
                    {i < latina.sitemap.length - 1 && (
                      <span aria-hidden className="h-px w-8 bg-border-strong" />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={latinaWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-block text-[14px] text-accent"
            >
              <span className="rule-link">{ui.website.visit}</span>{" "}
              <span className="arrow-shift">↗</span>
            </a>

            {/* Gallery: real screenshots of the Latina S.A.M. website */}
            <div className="mt-14 space-y-6">
              <Reveal>
                <Media
                  src={latinaHome.url}
                  alt="Latina S.A.M. website home page — Champagne & Premium Spirits hero"
                  browser
                  ratio="16 / 9"
                  onOpen={() => open(latinaHome.url, "Latina S.A.M. — Home")}
                />
              </Reveal>
              <div className="grid gap-6 md:grid-cols-2">
                <Reveal>
                  <Media
                    src={latinaAbout.url}
                    alt="Latina S.A.M. website Mission & Vision section"
                    browser
                    onOpen={() => open(latinaAbout.url, "Latina S.A.M. — Mission & Vision")}
                  />
                </Reveal>
                <Reveal delay={80}>
                  <Media
                    src={latinaProducts.url}
                    alt="Latina S.A.M. website premium product categories"
                    browser
                    onOpen={() => open(latinaProducts.url, "Latina S.A.M. — Products")}
                  />
                </Reveal>
              </div>
              <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                <Reveal>
                  <Media
                    src={latinaPartners.url}
                    alt="Latina S.A.M. website featured brand partners section"
                    browser
                    onOpen={() => open(latinaPartners.url, "Latina S.A.M. — Partners")}
                  />
                </Reveal>
                <Reveal delay={80}>
                  <Media
                    src={latinaMobile.url}
                    alt="Latina S.A.M. Markets & Channels page on mobile"
                    ratio="9 / 16"
                    onOpen={() => open(latinaMobile.url, "Latina S.A.M. — Markets (mobile)")}
                  />
                </Reveal>
              </div>
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.website.valueIntro}
              </p>
              <ul className="mt-6 max-w-[62ch]">
                {story.website.valueItems.map((v) => (
                  <li
                    key={v}
                    className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                  >
                    {v}
                  </li>
                ))}
              </ul>
              <Takeaway text={story.website.takeaway} />
            </div>
          </WorkArea>

          {/* Work area 02 — SEO */}
          <WorkArea label={ui.seo.label} heading={ui.seo.heading}>
            <Beat label={L.challenge}>
              <p>{story.seo.challenge}</p>
            </Beat>

            <Beat label={L.whatIDid}>
              <p>{ui.seo.p1}</p>
            </Beat>

            <div className="mt-16">
              <Label>{L.result}</Label>
            </div>

            <Reveal>
              <div className="mt-8 flex flex-wrap items-end gap-x-12 gap-y-8">
                <div>
                  <span className="display block text-[clamp(3.5rem,9vw,6rem)]">14%</span>
                  <span className="label-xs mt-2">{ui.seo.initial}</span>
                </div>
                <span aria-hidden className="mb-10 text-[28px] font-light text-accent">
                  ⟶
                </span>
                <div>
                  <span className="display block text-[clamp(3.5rem,9vw,6rem)] text-accent">
                    56%
                  </span>
                  <span className="label-xs mt-2">{ui.seo.final}</span>
                </div>
              </div>
            </Reveal>

            <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {ui.seo.p2}
            </p>

            <div className="mt-14">
              <Label>{ui.seo.workedLabel}</Label>
              <div className="mt-5">
                <ListColumns items={latina.seoWork} columns={2} />
              </div>
              <p className="mt-6 text-[15px] text-muted-foreground">{ui.seo.rankMath}</p>
            </div>

            <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
              <Reveal>
                <Media
                  src={seoBefore.url}
                  alt="Semrush domain overview before optimisation showing 14% AI visibility"
                  caption={ui.seo.beforeCaption}
                  ratio="16 / 9"
                  browser
                  onOpen={() => open(seoBefore.url, "Semrush overview — before")}
                />
              </Reveal>
              <Reveal delay={80}>
                <Media
                  src={seoAfter.url}
                  alt="Semrush domain overview after optimisation showing 56% AI visibility"
                  caption={ui.seo.afterCaption}
                  ratio="16 / 9"
                  browser
                  onOpen={() => open(seoAfter.url, "Semrush overview — after")}
                />
              </Reveal>
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.seo.valueCreated}
              </p>
              <Takeaway text={story.seo.takeaway} />
            </div>
          </WorkArea>

          {/* Work area 03 — HubSpot */}
          <WorkArea label={ui.hubspot.label} heading={ui.hubspot.heading}>
            <Beat label={L.challenge}>
              <p>{story.hubspot.challenge}</p>
            </Beat>

            <Beat label={L.whatIDid}>
              <p>{ui.hubspot.p1}</p>
              <p className="text-foreground">{story.hubspot.note}</p>
            </Beat>

            <ol className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-4 border-y border-border py-6">
              {latina.crmFlow.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="label-xs !text-foreground">{step}</span>
                  {i < latina.crmFlow.length - 1 && (
                    <span aria-hidden className="text-muted-foreground">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-12 md:grid-cols-2">
              <div>
                <h5 className="font-serif text-[24px] font-light">{ui.hubspot.crmManagement}</h5>
                <ul className="mt-5">
                  {latina.crmManagement.map((i) => (
                    <li
                      key={i}
                      className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-serif text-[24px] font-light">
                  {ui.hubspot.campaignManagement}
                </h5>
                <ul className="mt-5">
                  {latina.campaignManagement.map((i) => (
                    <li
                      key={i}
                      className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-16">
              <Label>{L.performance}</Label>
            </div>

            <div className="mt-8 space-y-10">
              {latina.hubspotMetrics.map((m, i) => (
                <Reveal key={m.value} delay={i * 60}>
                  <div className="grid items-baseline gap-2 border-t border-border pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
                    <span className="display text-[clamp(2.6rem,6vw,4.4rem)]">{m.value}</span>
                    <span className="text-[15px] text-muted-foreground">{m.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {ui.hubspot.p2}
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[hubspotApril.url, hubspotMay.url, hubspotJune.url, hubspotJuly.url].map(
                (src, i) => {
                  const month = ui.hubspot.months[i] ?? "";
                  const alt = `HubSpot campaign performance — ${month} 2026`;
                  return (
                    <Reveal key={src} delay={i * 60}>
                      <Media
                        src={src}
                        alt={alt}
                        caption={`${month} — ${ui.hubspot.monthCaption}`}
                        ratio="16 / 9"
                        browser
                        onOpen={() => open(src, alt)}
                      />
                    </Reveal>
                  );
                },
              )}
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.hubspot.valueIntro}
              </p>
              <ul className="mt-6 max-w-[62ch]">
                {story.hubspot.valueItems.map((v) => (
                  <li
                    key={v}
                    className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                  >
                    {v}
                  </li>
                ))}
              </ul>
              <Takeaway text={story.hubspot.takeaway} />
            </div>
          </WorkArea>

          {/* Work area 04 — Power BI */}
          <WorkArea label={ui.powerbi.label} heading={ui.powerbi.heading}>
            <Beat label={L.challenge}>
              <p>{story.powerbi.challenge}</p>
            </Beat>

            <Beat label={L.whatIDid}>
              <p>{ui.powerbi.p1}</p>
              <p>{ui.powerbi.p2}</p>
            </Beat>

            <div className="mt-12">
              <Label>{ui.powerbi.areasLabel}</Label>
              <p className="mt-5 text-[17px] leading-[2]">
                {latina.analyticsAreas.map((a, i) => (
                  <span key={a}>
                    <span className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                      {a}
                    </span>
                    {i < latina.analyticsAreas.length - 1 && (
                      <span className="mx-3 text-border-strong">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{story.powerbi.beyondLabel}</Label>
              <p className="mt-5 max-w-[62ch] font-serif text-[clamp(1.2rem,2.4vw,1.6rem)] font-light leading-[1.6]">
                {story.powerbi.beyondText}
              </p>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.powerbi.beyondNote}
              </p>
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.powerbi.valueCreated}
              </p>
              <Takeaway text={story.powerbi.takeaway} />
            </div>

            <Reveal>
              <blockquote className="mt-16 border-l border-accent pl-8">
                <p className="display max-w-[26ch] text-[clamp(1.6rem,3.4vw,2.4rem)]">
                  {story.powerbi.quote}
                </p>
              </blockquote>
            </Reveal>
          </WorkArea>

          <div className="mt-14">
            <Reveal>
              <Media
                src={powerbiDashboard.url}
                alt="HubSpot Marketing Performance Dashboard in Power BI — April to July 2026 overview"
                caption={ui.powerbi.caption}
                ratio="16 / 9"
                browser
                onOpen={() =>
                  open(powerbiDashboard.url, "Power BI — HubSpot Marketing Performance Dashboard")
                }
              />
            </Reveal>
          </div>

          {/* Problem solving */}
          <Subsection
            label={story.problemSolving.label}
            heading={story.problemSolving.heading}
          >
            <div className="max-w-[62ch] space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
              <p>{story.problemSolving.p1}</p>
              <p>{story.problemSolving.p2}</p>
            </div>
            <div className="mt-10">
              <Label>{story.problemSolving.movingLabel}</Label>
              <p className="mt-5 text-[17px] leading-[2]">
                {story.problemSolving.areas.map((a, i) => (
                  <span key={a}>
                    <span className="text-muted-foreground">{a}</span>
                    {i < story.problemSolving.areas.length - 1 && (
                      <span className="mx-3 text-border-strong">/</span>
                    )}
                  </span>
                ))}
              </p>
            </div>
            <p className="mt-10 max-w-[62ch] font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] font-light leading-[1.55]">
              {story.problemSolving.closing}
            </p>
          </Subsection>

          {/* Work area 05 — LinkedIn */}
          <WorkArea label={ui.linkedin.label} heading={ui.linkedin.heading}>
            <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {ui.linkedin.p1}
            </p>

            <div className="mt-12">
              <Label>{ui.linkedin.workLabel}</Label>
              <div className="mt-5">
                <ListColumns items={latina.linkedinWork} columns={2} />
              </div>
            </div>

            <div className="mt-12">
              <Label>{ui.linkedin.themesLabel}</Label>
              <p className="mt-5 font-serif text-[clamp(1.3rem,2.6vw,1.9rem)] font-light leading-[1.7]">
                {latina.contentThemes.map((t2, i) => (
                  <span key={t2}>
                    {t2}
                    {i < latina.contentThemes.length - 1 && (
                      <span className="mx-3 text-border-strong">•</span>
                    )}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  src: linkedinMinuty.url,
                  alt: "Latina S.A.M. LinkedIn post featuring Château Minuty",
                  caption: ui.linkedin.caption1,
                },
                {
                  src: linkedinCampari.url,
                  alt: "Latina S.A.M. LinkedIn post — Where Luxury Begins",
                  caption: ui.linkedin.caption2,
                },
              ].map((item, i) => (
                <Reveal key={item.src} delay={i * 60}>
                  <Media
                    src={item.src}
                    alt={item.alt}
                    ratio="4 / 5"
                    caption={item.caption}
                    onOpen={() => open(item.src, item.alt)}
                  />
                </Reveal>
              ))}
            </div>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.linkedin.valueCreated}
              </p>
            </div>
          </WorkArea>

          {/* Working across cultures */}
          <div className="mt-24 border-t border-border pt-12 md:mt-32 md:pt-16">
            <div className="grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
              <Reveal>
                <Label>{story.cultures.label}</Label>
              </Reveal>
              <div className="min-w-0">
                <Reveal>
                  <h4 className="display max-w-[22ch] text-[clamp(1.7rem,3.2vw,2.4rem)]">
                    {story.cultures.heading}
                  </h4>
                </Reveal>
                <div className="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-[1.85] text-muted-foreground">
                  <p>{story.cultures.p1}</p>
                  <p>{story.cultures.p2}</p>
                  <p>{story.cultures.p3}</p>
                </div>
                <Reveal delay={80}>
                  <blockquote className="mt-14">
                    <p className="display max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.6rem)] leading-[1.3]">
                      {story.cultures.quoteA}
                      <br />
                      <span className="script-em">{story.cultures.quoteB}</span>
                    </p>
                  </blockquote>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- FIRSTMERIDIAN ---------------- */}
        <div className="mt-32 border-t border-border pt-20 md:mt-44">
          <CompanyHead
            index={ui.experienceIndex[1] ?? "02"}
            company={firstMeridian.company}
            role={firstMeridian.role}
            location={firstMeridian.location}
            dates={firstMeridian.dates}
            opening={firstMeridian.opening}
          />

          <Reveal>
            <p className="mt-12 max-w-[72ch] text-[17px] leading-[1.85] text-muted-foreground md:mt-16 md:text-[18px]">
              {story.fm.intro}
            </p>
          </Reveal>

          <WorkArea label={ui.fm.label} heading={ui.fm.heading}>
            <Reveal>
              <Label>{L.challenge}</Label>
              <p className="display mt-5 max-w-[24ch] text-[clamp(1.5rem,2.9vw,2.1rem)]">
                {story.fm.challengeHeading}
              </p>
              <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {story.fm.challengeText}
              </p>
            </Reveal>

            <Beat label={L.whatIDid}>
              <p>{firstMeridian.leadGenText}</p>
            </Beat>

            <div className="mt-12">
              <Label>{ui.fm.responsibilitiesLabel}</Label>
              <div className="mt-5">
                <ListColumns items={firstMeridian.responsibilities} columns={2} />
              </div>
            </div>

            <div className="mt-16">
              <Label>{L.impact}</Label>
            </div>

            <div className="mt-8">
              {firstMeridian.metrics.map((m, i) => (
                <Reveal key={m.value} delay={i * 50}>
                  <div className="grid items-baseline gap-1 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
                    <span className="display text-[clamp(2.4rem,5.5vw,4rem)]">{m.value}</span>
                    <span className="text-[15px] text-muted-foreground">{m.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-12 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {story.fm.storytelling}
            </p>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {story.fm.brands}
            </p>

            <div className="mt-16 border-t border-border pt-10">
              <Label>{L.valueCreated}</Label>
              <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
                {story.fm.sequence.map((step, i) => (
                  <li key={step} className="flex items-center gap-5">
                    <span className="font-serif text-[clamp(1.1rem,2.1vw,1.45rem)] font-light">
                      {step}
                    </span>
                    {i < story.fm.sequence.length - 1 && (
                      <span aria-hidden className="text-accent">
                        →
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </WorkArea>
        </div>

        {/* ---------------- S.S. BEVERAGES ---------------- */}
        <div className="mt-32 border-t border-border pt-20 md:mt-44">
          <CompanyHead
            index={ui.experienceIndex[2] ?? "03"}
            company={ssBeverages.company}
            role={ssBeverages.role}
            location={ssBeverages.location}
            dates={ssBeverages.dates}
            opening={ssBeverages.opening}
          />

          <Reveal>
            <p className="mt-12 max-w-[72ch] text-[17px] leading-[1.85] text-muted-foreground md:mt-16 md:text-[18px]">
              {story.ss.intro}
            </p>
          </Reveal>

          <div className="mt-16 border-t border-border pt-12">
            <Reveal>
              <Label>{L.challenge}</Label>
              <p className="display mt-5 max-w-[26ch] text-[clamp(1.5rem,2.9vw,2.1rem)]">
                {story.ss.challengeHeading}
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-14 border-t border-border pt-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <Label>{ui.ss.organicLabel}</Label>
              <h4 className="display mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">
                {ui.ss.organicHeading}
              </h4>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {ui.ss.organicText}
              </p>
              <ul className="mt-8">
                {ssBeverages.organic.map((i) => (
                  <li
                    key={i}
                    className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <span className="display block text-[clamp(3rem,7vw,4.6rem)] text-accent">+40%</span>
                <span className="label-xs mt-2">{ui.ss.organicMetric}</span>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:border-l md:border-border md:pl-20">
              <Label>{ui.ss.paidLabel}</Label>
              <h4 className="display mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">
                {ui.ss.paidHeading}
              </h4>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {ssBeverages.paidText}
              </p>
              <ul className="mt-8">
                {ssBeverages.paid.map((i) => (
                  <li
                    key={i}
                    className="border-b border-border py-2.5 text-[15px] text-muted-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <span className="display block text-[clamp(3rem,7vw,4.6rem)]">+15%</span>
                <span className="label-xs mt-2">{ui.ss.paidMetric}</span>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <Label>{L.valueCreated}</Label>
            <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {story.ss.valueCreated}
            </p>
            <Takeaway text={story.ss.takeaway} />
          </div>
        </div>

        <Reveal className="mt-32 md:mt-44">
          <Rule />
          <blockquote className="py-20 md:py-28">
            <p className="display mx-auto max-w-[22ch] text-center text-[clamp(2rem,4.6vw,3.4rem)]">
              {experienceIntro.closingQuote}
            </p>
          </blockquote>
        </Reveal>
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
