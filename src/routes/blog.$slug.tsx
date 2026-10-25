import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { posts } from "@/lib/site-data";
import { BtnInner, Reveal } from "@/components/site/ui";
import { PostCard } from "@/components/site/sections";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Article not found — Faizam Rasheed Interiors" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Faizam Rasheed Interiors` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post: p } = Route.useLoaderData();
  return (
    <>
      <article className="container-site pt-40 md:pt-48">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">{p.date}</p>
          <h1 className="h-section mt-4">{p.title}</h1>
        </Reveal>
        <Reveal className="mt-12 overflow-hidden rounded-[2rem]">
          <img src={p.image} alt={p.title} width={1200} height={900} className="aspect-[16/8] w-full object-cover" />
        </Reveal>
        <div className="mx-auto max-w-3xl space-y-6 py-16 text-lg leading-relaxed">
          <p className="text-2xl">{p.excerpt}</p>
          <p>[PLACEHOLDER] This article explores the topic in depth, sharing insights and practical tips for creating beautiful, functional spaces that feel personal and timeless.</p>
          <p>[PLACEHOLDER] Additional content will be added here to provide more context and value to readers interested in interior design and architecture.</p>
          <Link to="/blog" className="btn btn-outline group"><BtnInner label="Back to Journal" /></Link>
        </div>
      </article>
      <section className="container-site grid gap-10 pb-24 md:grid-cols-2">
        {posts.filter((x) => x.slug !== p.slug).map((x) => <PostCard key={x.slug} p={x} />)}
      </section>
    </>
  );
}
