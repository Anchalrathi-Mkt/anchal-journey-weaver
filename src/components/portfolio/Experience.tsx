import { useI18n } from "@/i18n";
import { Reveal, Label } from "./primitives";

function RoleCard({
  index,
  company,
  role,
  location,
  dates,
  opening,
  body,
}: {
  index: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  opening: string;
  body: string;
}) {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-8 border-t border-border pt-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-16">
      <Reveal>
        <Label>{index}</Label>
        <h3 className="display mt-4 text-[clamp(1.8rem,3.6vw,2.6rem)]">{company}</h3>
        <p className="mt-4 text-[15px] text-foreground">{role}</p>
        <p className="text-[15px] text-muted-foreground">{location}</p>
        <p className="mt-3 label-xs">{dates}</p>
      </Reveal>
      <Reveal delay={80}>
        <div className="max-w-[62ch] space-y-5 text-[17px] leading-[1.85] text-muted-foreground md:text-[18px]">
          <p>{opening}</p>
          <p>{body}</p>
        </div>
      </Reveal>
    </div>
  );
}

export function Experience() {
  const { t } = useI18n();
  const { experienceIntro, latina, firstMeridian, ssBeverages, ui } = t;

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

        <div className="mt-20 space-y-16 md:mt-28 md:space-y-24">
          <RoleCard
            index="01"
            company={latina.company}
            role={latina.role}
            location={latina.location}
            dates={latina.dates}
            opening={latina.opening}
            body={latina.body}
          />
          <RoleCard
            index="02"
            company={firstMeridian.company}
            role={firstMeridian.role}
            location={firstMeridian.location}
            dates={firstMeridian.dates}
            opening={firstMeridian.opening}
            body={firstMeridian.body}
          />
          <RoleCard
            index="03"
            company={ssBeverages.company}
            role={ssBeverages.role}
            location={ssBeverages.location}
            dates={ssBeverages.dates}
            opening={ssBeverages.opening}
            body={ssBeverages.body}
          />
        </div>
      </div>
    </section>
  );
}
