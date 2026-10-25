import { createFileRoute } from "@tanstack/react-router";
import { company, images } from "@/lib/site-data";
import { CountUp, PageHero, Reveal } from "@/components/site/ui";
import { Awards, Process } from "@/components/site/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Faizam Rasheed Interiors" },
      { name: "description", content: "Meet Faizam Rasheed Interiors and founder Faizam Rasheed — a design & architecture studio in Clifton, Karachi." },
      { property: "og:title", content: "About Us — Faizam Rasheed Interiors" },
      { property: "og:description", content: "A Clifton, Karachi studio for architecture, interior design, turnkey execution and custom furniture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Designing calm, personal spaces since day one." text={`Led by ${company.founder}, Faizam Rasheed Interiors is a design & architecture studio in Clifton, Karachi.`} />
      <section className="container-site">
        <Reveal className="img-zoom aspect-[16/8] overflow-hidden rounded-[2rem]">
          <img src={images.hero} alt="Interior designed by Faizam Rasheed Interiors" width={1920} height={1088} className="h-full w-full object-cover" />
        </Reveal>
      </section>
      <section className="section-pad container-site grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Founder</p>
          <h2 className="h-section mt-5">{company.founder}</h2>
          <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
            With a passion for architecture, furniture design and revamping spaces, Faizam's path was not traditional — it began with a deep love for transforming environments.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-xl leading-relaxed">
            Faizam Rasheed Interiors is a Clifton, Karachi studio specializing in Wabi-Sabi, Organic Modern and Modern Luxury aesthetics. We create spaces with neutral earthy palettes and raw textures, handling architecture, complete interior design, turnkey execution and custom furniture curation in-house.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div><p className="text-4xl font-medium"><CountUp to={150} suffix="+" /></p><p className="text-sm text-muted-foreground">Projects completed</p></div>
            <div><p className="text-4xl font-medium"><CountUp to={30} suffix="+" /></p><p className="text-sm text-muted-foreground">Team members</p></div>
          </div>
        </Reveal>
      </section>
      <Process />
      <Awards />
    </>
  );
}
