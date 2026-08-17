import { useState } from "react";
import {
  experienceIntro,
  firstMeridian,
  latina,
  ssBeverages,
} from "@/data/portfolio";
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

export function Experience() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const open = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-10 md:py-36">
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
            index="Experience 01"
            company={latina.company}
            role={latina.role}
            location={latina.location}
            dates={latina.dates}
            opening={latina.opening}
          />

          {/* Work area 01 — website */}
          <WorkArea
            label="Website Development / Shopware"
            heading="Building Latina S.A.M.'s corporate website"
          >
            <div className="max-w-[62ch] space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
              <p>
                One of my main projects was designing and building the Latina S.A.M. corporate
                website using Shopware.
              </p>
              <p>
                I worked on translating the company's business information into a clear digital
                structure, making it easier for visitors to understand the company, its product
                portfolio, services, international markets and distribution capabilities.
              </p>
            </div>

            <div className="mt-12">
              <Label>My responsibilities included</Label>
              <div className="mt-5">
                <ListColumns items={latina.responsibilities} columns={2} />
              </div>
            </div>

            <p className="mt-10 text-[15px] text-muted-foreground">
              Content was coordinated for multiple languages including{" "}
              <span className="text-foreground">{latina.languages.join(" · ")}</span>.
            </p>

            <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              The objective was not only to create a visually professional website, but also to
              organise the information in a way that made sense for international B2B customers and
              partners.
            </p>

            {/* Sitemap */}
            <div className="mt-14 border-t border-border pt-10">
              <Label>Website structure</Label>
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
              href={latina.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-block text-[14px] text-accent"
            >
              <span className="rule-link">Visit Website</span> <span className="arrow-shift">↗</span>
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

          </WorkArea>

          {/* Work area 02 — SEO */}
          <WorkArea
            label="SEO / Organic Search"
            heading="Improving search visibility for Wine & Spirits Europe"
          >
            <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              Alongside website development, I worked on SEO for the Wine & Spirits Europe website,
              focusing on improving its search visibility, keyword optimisation and organic
              discoverability.
            </p>

            <Reveal>
              <div className="mt-14 flex flex-wrap items-end gap-x-12 gap-y-8">
                <div>
                  <span className="display block text-[clamp(3.5rem,9vw,6rem)]">14%</span>
                  <span className="label-xs mt-2">Initial search visibility</span>
                </div>
                <span aria-hidden className="mb-10 text-[28px] font-light text-accent">
                  ⟶
                </span>
                <div>
                  <span className="display block text-[clamp(3.5rem,9vw,6rem)] text-accent">
                    56%
                  </span>
                  <span className="label-xs mt-2">Final search visibility</span>
                </div>
              </div>
            </Reveal>

            <p className="mt-8 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              Search visibility increased from 14% to 56% during the optimisation period.
            </p>

            <div className="mt-14">
              <Label>What I worked on</Label>
              <div className="mt-5">
                <ListColumns items={latina.seoWork} columns={2} />
              </div>
              <p className="mt-6 text-[15px] text-muted-foreground">
                Rank Math was among the tools used to support on-page optimisation and monitoring.
              </p>
            </div>

            <div className="mt-14 grid items-start gap-10 md:grid-cols-2">
              <Reveal>
                <Media
                  src={seoBefore.url}
                  alt="Semrush domain overview before optimisation showing 14% AI visibility"
                  caption="Before — 14% visibility, 16 organic sessions"
                  ratio="16 / 10"
                  browser
                  onOpen={() => open(seoBefore.url, "Semrush overview — before")}
                />
              </Reveal>
              <Reveal delay={80}>
                <Media
                  src={seoAfter.url}
                  alt="Semrush domain overview after optimisation showing 56% AI visibility"
                  caption="After — 56% visibility, 16.2K organic traffic"
                  ratio="16 / 10"
                  browser
                  onOpen={() => open(seoAfter.url, "Semrush overview — after")}
                />
              </Reveal>
            </div>

          </WorkArea>

          {/* Work area 03 — HubSpot */}
          <WorkArea
            label="HubSpot CRM / Email Marketing"
            heading="Managing CRM and marketing campaigns"
          >
            <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              I worked with HubSpot CRM to organise marketing activity, manage contacts, create
              campaigns and analyse how audiences interacted with offers and email communication.
            </p>

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
                <h5 className="font-serif text-[24px] font-light">CRM Management</h5>
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
                <h5 className="font-serif text-[24px] font-light">Campaign Management</h5>
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

            <div className="mt-16 space-y-10">
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
              Tracking campaign performance made it possible to compare engagement across different
              periods and better understand which offers generated stronger audience interest.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {([
                ["April", hubspotApril.url],
                ["May", hubspotMay.url],
                ["June", hubspotJune.url],
                ["July", hubspotJuly.url],
              ] as const).map(([month, src], i) => {
                const alt = `HubSpot campaign performance — ${month} 2026`;
                return (
                  <Reveal key={src} delay={i * 60}>
                    <Media
                      src={src}
                      alt={alt}
                      caption={`${month} — emails sent and open rate`}
                      ratio="16 / 10"
                      browser
                      onOpen={() => open(src, alt)}
                    />
                  </Reveal>
                );
              })}
            </div>

          </WorkArea>

          {/* Work area 04 — Power BI */}
          <WorkArea
            label="Power BI / Marketing Analytics"
            heading="Turning marketing data into clearer insights"
          >
            <div className="max-w-[62ch] space-y-5 text-[17px] leading-[1.8] text-muted-foreground">
              <p>
                To make CRM and campaign performance easier to understand, I worked on marketing
                reporting and built a Power BI dashboard for tracking marketing and CRM activity.
              </p>
              <p>
                The objective was to bring relevant KPIs into a clearer visual format so campaign
                activity, engagement and lead performance could be monitored more efficiently.
              </p>
            </div>

            <div className="mt-12">
              <Label>Areas analysed</Label>
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

            <Reveal>
              <blockquote className="mt-16 border-l border-accent pl-8">
                <p className="display max-w-[24ch] text-[clamp(1.6rem,3.4vw,2.4rem)]">
                  Data becomes useful when it helps someone understand what happened, why it
                  happened and what to do next.
                </p>
              </blockquote>
            </Reveal>
          </WorkArea>

          <Reveal className="mt-14">
            <Media
              src="/images/powerbi-dashboard.jpg"
              alt="Marketing performance dashboard built in Power BI"
              caption="Marketing performance dashboard — Power BI"
              ratio="16 / 9"
              onOpen={() => open("/images/powerbi-dashboard.jpg", "Power BI marketing dashboard")}
            />
          </Reveal>

          {/* Work area 05 — LinkedIn */}
          <WorkArea label="LinkedIn / B2B Content" heading="Developing the company's LinkedIn presence">
            <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              I also managed content for Latina S.A.M.'s LinkedIn page, helping maintain a more
              consistent B2B presence and communicate the company's work, industry knowledge and
              brand story.
            </p>

            <div className="mt-12">
              <Label>Work included</Label>
              <div className="mt-5">
                <ListColumns items={latina.linkedinWork} columns={2} />
              </div>
            </div>

            <div className="mt-12">
              <Label>Content themes</Label>
              <p className="mt-5 font-serif text-[clamp(1.3rem,2.6vw,1.9rem)] font-light leading-[1.7]">
                {latina.contentThemes.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < latina.contentThemes.length - 1 && (
                      <span className="mx-3 text-border-strong">•</span>
                    )}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[1, 2].map((n) => {
                const src = `/images/linkedin-post-0${n}.jpg`;
                const alt = `LinkedIn content sample ${n} for Latina S.A.M.`;
                return (
                  <Reveal key={n} delay={(n - 1) * 60}>
                    <Media src={src} alt={alt} ratio="1 / 1" onOpen={() => open(src, alt)} />
                  </Reveal>
                );
              })}
            </div>
          </WorkArea>
        </div>

        {/* ---------------- FIRSTMERIDIAN ---------------- */}
        <div className="mt-32 border-t border-border pt-20 md:mt-44">
          <CompanyHead
            index="Experience 02"
            company={firstMeridian.company}
            role={firstMeridian.role}
            location={firstMeridian.location}
            dates={firstMeridian.dates}
            opening={firstMeridian.opening}
          />

          <WorkArea label="Lead Generation / Business Development" heading="B2B Lead Generation">
            <p className="max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {firstMeridian.leadGenText}
            </p>

            <div className="mt-12">
              <Label>Responsibilities</Label>
              <div className="mt-5">
                <ListColumns items={firstMeridian.responsibilities} columns={2} />
              </div>
            </div>

            <div className="mt-16">
              {firstMeridian.metrics.map((m, i) => (
                <Reveal key={m.value} delay={i * 50}>
                  <div className="grid items-baseline gap-1 border-t border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12">
                    <span className="display text-[clamp(2.4rem,5.5vw,4rem)]">{m.value}</span>
                    <span className="text-[15px] text-muted-foreground">{m.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-10 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
              {firstMeridian.closing}
            </p>

            <div className="mt-14 border-t border-border pt-8">
              <Label>Business development exposure</Label>
              <p className="mt-5 max-w-[62ch] text-[17px] leading-[1.8] text-muted-foreground">
                {firstMeridian.bizDev}
              </p>
            </div>
          </WorkArea>
        </div>

        {/* ---------------- S.S. BEVERAGES ---------------- */}
        <div className="mt-32 border-t border-border pt-20 md:mt-44">
          <CompanyHead
            index="Experience 03"
            company={ssBeverages.company}
            role={ssBeverages.role}
            location={ssBeverages.location}
            dates={ssBeverages.dates}
            opening={ssBeverages.opening}
          />

          <div className="mt-20 grid gap-14 border-t border-border pt-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <Label>Organic</Label>
              <h4 className="display mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">SEO</h4>
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
                <span className="label-xs mt-2">Increase in organic traffic</span>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:border-l md:border-border md:pl-20">
              <Label>Paid</Label>
              <h4 className="display mt-4 text-[clamp(1.7rem,3.2vw,2.4rem)]">
                Performance Marketing
              </h4>
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
                <span className="label-xs mt-2">
                  Increase in website traffic through paid campaigns
                </span>
              </div>
            </Reveal>
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

      <Lightbox src={lightbox?.src ?? null} alt={lightbox?.alt ?? ""} onClose={() => setLightbox(null)} />
    </section>
  );
}
