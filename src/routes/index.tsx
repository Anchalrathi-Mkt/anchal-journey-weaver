import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Introduction } from "@/components/portfolio/Introduction";
import { Experience } from "@/components/portfolio/Experience";
import { Skills, Education, Contact, Footer } from "@/components/portfolio/Sections";

const title = "Anchal Rathi | Digital Marketing & Data Analytics";
const description =
  "Portfolio of Anchal Rathi, a Paris-based Digital Marketing and Data Analytics professional with experience in website development, SEO, HubSpot CRM, Power BI, LinkedIn marketing, PPC and business development.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: "Anchal Rathi — Digital Marketing & Data Analytics" },
      {
        property: "og:description",
        content:
          "Explore my experience across website development, SEO, CRM, HubSpot, marketing analytics, Power BI, LinkedIn marketing and business growth.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://anchal-rathi.com" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Anchal Rathi — Digital Marketing & Data Analytics" },
      {
        name: "twitter:description",
        content:
          "Explore my experience across website development, SEO, CRM, HubSpot, marketing analytics, Power BI, LinkedIn marketing and business growth.",
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
    <>
      <Header />
      <main>
        <Introduction />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
