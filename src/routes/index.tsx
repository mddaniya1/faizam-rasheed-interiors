import { createFileRoute, Link } from "@tanstack/react-router";
import { company, images, posts, projects, services, stats } from "@/lib/site-data";
import { BtnInner, CountUp, Reveal } from "@/components/site/ui";
import { Awards, PostCard, Process, ProjectCard, Testimonials } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Faizam Rasheed Interiors — Design & Architecture Studio in Karachi" },
      { name: "description", content: "Design & Architecture Studio in Clifton, Karachi — architecture, complete interior design, turnkey execution and custom furniture." },
      { property: "og:title", content: "Faizam Rasheed Interiors — Design & Architecture Studio in Karachi" },
      { property: "og:description", content: "Timeless interiors crafted with earthy calm. Architecture, interior design, turnkey execution and custom furniture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const clients = ["Karachi Developers", "Clifton Heights", "Marina Bay Residences", "Pak Hospitality Group", "Urban Spaces Ltd", "Coastal Homes", "Elite Properties", "Pearl Hotels"];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden text-ink-foreground">
        <img src={images.hero} alt="Earthy calm interior designed by Faizam Rasheed Interiors" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/30" />
        <div className="container-site relative pb-10 pt-40">
          <Reveal>
            <h1 className="h-display max-w-5xl">Timeless Interiors, Crafted with Earthy Calm.</h1>
          </Reveal>
          <Reveal delay={150} className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-ink-foreground/80">Architecture, complete interior design, turnkey execution and custom furniture — from our studio in Clifton, Karachi.</p>
            <Link to="/portfolios" className="btn btn-light group self-start"><BtnInner label="View Projects" /></Link>
          </Reveal>
          <div className="mt-16 overflow-hidden border-t border-ink-foreground/20 pt-8">
            <div className="marquee gap-16">
              {[...clients, ...clients].map((c, i) => (
                <span key={i} className="text-xl font-semibold tracking-tight text-ink-foreground/70">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-pad container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="eyebrow">About us</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-4">
                <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground">FR</span>
              </div>
              <span className="text-sm text-muted-foreground">Founder</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-2xl leading-snug md:text-4xl">
              Faizam Rasheed Interiors is a Clifton, Karachi studio led by {company.founder}. With a passion for architecture, furniture design and revamping spaces, we create interiors that feel calm, personal and built to last.
            </p>
            <Link to="/about" className="btn btn-dark group mt-10"><BtnInner label="More About Us" /></Link>
          </Reveal>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border bg-border lg:grid-cols-4">
          {[
            { to: stats.averageProjectValue.to, prefix: stats.averageProjectValue.prefix, suffix: stats.averageProjectValue.suffix, label: stats.averageProjectValue.label },
            { to: stats.projectsCompleted.to, suffix: stats.projectsCompleted.suffix, label: stats.projectsCompleted.label },
            { to: stats.highestProjectValue.to, prefix: stats.highestProjectValue.prefix, suffix: stats.highestProjectValue.suffix, label: stats.highestProjectValue.label },
            { to: stats.teamMembers.to, suffix: stats.teamMembers.suffix, label: stats.teamMembers.label },
          ].map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-10">
              <p className="text-3xl font-medium tracking-tight md:text-5xl"><CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} /></p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="service" className="section-pad scroll-mt-20 bg-secondary">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="h-section mt-5 max-w-2xl">Everything your space needs, under one roof.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.slice(0, 4).map((s, k) => (
              <Reveal key={s.slug} delay={k * 100}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group lift flex h-full flex-col overflow-hidden rounded-3xl bg-card">
                  <div className="img-zoom aspect-[16/10]">
                    <img src={s.image} alt={s.title} loading="lazy" width={1200} height={912} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-muted-foreground">{s.short}</p>
                    <span className="btn btn-plain mt-6 self-start"><BtnInner label="See More" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Works */}
      <section className="section-pad container-site">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Selected works</p>
            <h2 className="h-section mt-5 max-w-xl">Spaces we're proud of.</h2>
          </Reveal>
          <Link to="/portfolios" className="btn btn-outline group"><BtnInner label="View All Projects" /></Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.slice(0, 3).map((p, k) => (
            <Reveal key={p.slug} delay={k * 120} className={k === 1 ? "md:mt-16" : ""}>
              <ProjectCard p={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Process />
      <Testimonials />
      <Awards />

      {/* Blog */}
      <section className="section-pad container-site pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Journal</p>
            <h2 className="h-section mt-5">Ideas & insights.</h2>
          </Reveal>
          <Link to="/blog" className="btn btn-outline group"><BtnInner label="See All Blogs" /></Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((p, k) => (
            <Reveal key={p.slug} delay={k * 120}><PostCard p={p} /></Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
