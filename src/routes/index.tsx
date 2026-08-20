import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { HeroSlider } from "@/components/portfolio/HeroSlider";
import { Introduction } from "@/components/portfolio/Introduction";
import { Experience } from "@/components/portfolio/Experience";
import { Skills, Education, Contact, Footer } from "@/components/portfolio/Sections";
import {
  AboutMe,
  ProblemsSolved,
  WhatIBring,
} from "@/components/portfolio/StorySections";
import { I18nProvider } from "@/i18n";

const title = "Anchal Rathi | Digital Marketing & Data Analytics";
const description =
  "Portfolio of Anchal Rathi, a Marketing and Sales professional with over two years of experience in digital marketing, SEO, PPC, CRM, website development and data analytics.";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Anchal Rathi | Digital Marketing & Data Analytics" },
      {
        property: "og:description",
        content:
          "Portfolio of Anchal Rathi, a Marketing and Sales professional with over two years of experience in digital marketing, SEO, PPC, CRM, website development and data analytics.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://anchal-rathi.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anchal Rathi | Digital Marketing & Data Analytics" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Anchal Rathi, a Marketing and Sales professional with over two years of experience in digital marketing, SEO, PPC, CRM, website development and data analytics.",
      },
    ],
    links: [{ rel: "canonical", href: "https://anchal-rathi.com" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Anchal Rathi",
          jobTitle: "Digital Marketing & Data Analytics Professional",
          url: "https://anchal-rathi.com",
          email: "mailto:anchal.rathi@grenoble-em.com",
          address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
          alumniOf: { "@type": "CollegeOrUniversity", name: "Grenoble École de Management" },
          sameAs: ["https://www.linkedin.com/in/anchal-rathi-680802141"],
          knowsAbout: [
            "Digital Marketing",
            "SEO",
            "HubSpot CRM",
            "Power BI",
            "Marketing Analytics",
            "Website Development",
            "PPC",
            "Business Development",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <I18nProvider>
      <Header />
      <main>
        <HeroSlider />
        <Introduction />
        <AboutMe />
        <Experience />
        <ProblemsSolved />
        <Skills />
        <Education />
        <WhatIBring />
        <Contact />
      </main>

      <Footer />
    </I18nProvider>
  );
}
