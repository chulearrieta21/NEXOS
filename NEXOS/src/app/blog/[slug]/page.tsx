import blogData from "@/components/Blog/blogData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogData.map((story) => ({ slug: story.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const story = blogData.find((item) => item.slug === params.slug);

  if (!story) {
    return {
      title: "Historia no encontrada | NEXOS",
    };
  }

  return {
    title: `${story.title} | NEXOS`,
    description: story.paragraph,
  };
}

const StoryDetailPage = ({ params }: { params: { slug: string } }) => {
  const story = blogData.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-[#0F1720] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-40 pb-16 md:pt-52 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,138,18,0.2),_transparent_32%)]" />
        <div className="container relative z-10">
          <Link href="/blog" className="mb-8 inline-flex text-sm font-bold uppercase tracking-[0.2em] text-[#FF8A12] transition hover:text-white">
            ← Volver a historias
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#0EA5E9]">
                Historia de usuario
              </p>
              <h1 className="mb-6 text-4xl font-black uppercase leading-tight md:text-6xl">
                {story.title}
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75">
                {story.paragraph}
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-bold uppercase tracking-wider">
                <span className="rounded-full bg-[#FF8A12] px-4 py-2 text-[#101722]">{story.tags[0]}</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-white/80">{story.location}</span>
                <span className="rounded-full border border-white/15 px-4 py-2 text-white/80">{story.readTime}</span>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={story.image} alt={story.title} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <aside className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white p-6 text-[#101722]">
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image src={story.author.image} alt={story.author.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-black uppercase">{story.author.name}</p>
                    <p className="text-sm text-[#64748B]">{story.author.designation}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-[#475569]">
                  Publicado: {story.publishDate}
                </p>
              </div>

              <div className="rounded-3xl border border-[#FF8A12]/30 bg-[#FF8A12]/10 p-6">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF8A12]">Frase clave</p>
                <p className="text-lg font-semibold italic leading-relaxed text-white">“{story.quote}”</p>
              </div>
            </aside>

            <article className="rounded-3xl border border-white/10 bg-white p-8 text-[#101722] md:p-10">
              <h2 className="mb-6 text-3xl font-black uppercase">La historia completa</h2>
              <div className="space-y-6">
                {story.content.map((paragraph) => (
                  <p key={paragraph} className="text-lg leading-relaxed text-[#475569]">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="my-10 h-px bg-[#E2E8F0]" />

              <h3 className="mb-5 text-2xl font-black uppercase">Puntos conectados</h3>
              <ul className="grid gap-4 md:grid-cols-3">
                {story.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-[#F8FAFC] p-5 text-sm font-semibold leading-relaxed text-[#334155]">
                    <span className="mb-3 block text-2xl font-black text-[#FF8A12]">∞</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StoryDetailPage;
