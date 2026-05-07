import Image from "next/image";
import Link from "next/link";

const stories = [
  {
    title: "Tecnología y sociedad",
    category: "Innovación",
    text: "Cómo las nuevas herramientas digitales cambian la manera en que vivimos, trabajamos y nos informamos.",
  },
  {
    title: "Voces de la comunidad",
    category: "Historias",
    text: "Relatos cercanos sobre personas, barrios e iniciativas que construyen conversación pública.",
  },
  {
    title: "Economía cotidiana",
    category: "Análisis",
    text: "Explicamos decisiones, precios y tendencias con lenguaje claro para entender su impacto real.",
  },
  {
    title: "Cultura en movimiento",
    category: "Agenda",
    text: "Una mirada a eventos, expresiones creativas y espacios que conectan identidad y actualidad.",
  },
];

const platforms = [
  {
    name: "Instagram",
    logo: "/images/social/instagram.png",
    text: "Historias visuales, clips y publicaciones para seguir el pulso de cada tema.",
  },
  {
    name: "TikTok",
    logo: "/images/social/tik_tok.png",
    text: "Videos breves para explicar noticias, tendencias y conversaciones de forma directa.",
  },
  {
    name: "Podcast",
    logo: "/images/social/spotify.png",
    text: "Conversaciones y análisis en audio para profundizar en las historias destacadas.",
  },
  {
    name: "YouTube",
    logo: "/images/social/youtube.png",
    text: "Reportajes, entrevistas y contenido audiovisual para conectar mejor cada punto.",
  },
];

const NexosLanding = () => {
  return (
    <main className="bg-[#0F1720] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-20 md:pt-44 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,138,18,0.22),_transparent_30%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-[#FF8A12]/50 bg-[#FF8A12]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#FF8A12]">
                Actualidad conectada
              </span>
              <h1 className="mb-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                El pulso de <span className="text-[#FF8A12]">NEXOS</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Conectamos los puntos de la actualidad con historias, análisis y contexto para entender mejor lo que está pasando.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/blog" className="rounded-sm bg-[#FF8A12] px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-[#101722] transition hover:bg-white">
                  Explorar historias
                </Link>
                <Link href="/about" className="rounded-sm border border-[#0EA5E9] px-7 py-4 text-center text-sm font-bold uppercase tracking-wider text-white transition hover:bg-[#0EA5E9]">
                  Sobre NEXOS
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -inset-4 rounded-[32px] bg-linear-to-br from-[#0EA5E9]/40 to-[#FF8A12]/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/35 p-4 shadow-2xl">
                <Image src="/images/logo/nexo.jpg" alt="Logo NEXOS" width={700} height={950} className="h-auto w-full rounded-[20px] object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#0EA5E9]">Cada esquina</p>
              <h2 className="mb-5 text-4xl font-black uppercase text-white">Tiene una historia</h2>
              <p className="text-white/70">
                NEXOS nace para contar lo que ocurre alrededor con una mirada cercana: personas, datos, lugares y decisiones que explican el presente.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["6", "Categorías"],
                ["24/7", "Seguimiento"],
                ["1", "Comunidad"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white p-6 text-[#101722]">
                  <p className="text-4xl font-black text-[#FF8A12]">{value}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 py-16 md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8A12]">Explora</p>
              <h2 className="text-4xl font-black uppercase text-white md:text-5xl">Los puntos clave</h2>
            </div>
            <p className="max-w-xl text-white/65">
              Como en un mapa editorial, conectamos temas y señales para mostrar cómo se relacionan las noticias entre sí.
            </p>
          </div>
          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#121B27] p-6 md:p-10">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(14,165,233,.18),transparent_24%),radial-gradient(circle_at_72%_58%,rgba(255,138,18,.16),transparent_22%)]" />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
            >
              <path
                d="M135 135 C260 210 300 220 385 265 S575 210 640 150 S790 185 845 300"
                fill="none"
                stroke="rgba(14,165,233,.45)"
                strokeWidth="2"
                strokeDasharray="9 10"
              />
              <path
                d="M205 380 C315 310 350 285 385 265 C465 225 550 265 845 300"
                fill="none"
                stroke="rgba(255,138,18,.45)"
                strokeWidth="2"
                strokeDasharray="7 12"
              />
              <path
                d="M640 150 C555 245 500 310 205 380"
                fill="none"
                stroke="rgba(255,255,255,.18)"
                strokeWidth="1.5"
              />
            </svg>
            {[
              {
                position: "left-[9%] top-[18%]",
                label: "Política",
                text: "Decisiones públicas, poder y efectos en la vida diaria.",
              },
              {
                position: "left-[34%] top-[46%]",
                label: "Tecnología",
                text: "Innovación, plataformas digitales y cambios culturales.",
              },
              {
                position: "left-[58%] top-[22%]",
                label: "Sociedad",
                text: "Comunidades, conflictos, acuerdos y nuevas conversaciones.",
              },
              {
                position: "left-[78%] top-[60%]",
                label: "Cultura",
                text: "Expresiones, memoria, identidad y agenda creativa.",
              },
              {
                position: "left-[16%] top-[74%]",
                label: "Economía",
                text: "Precios, empleo, consumo y decisiones que afectan el bolsillo.",
              },
            ].map((point) => (
              <div key={point.label} className={`group absolute ${point.position}`}>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF8A12]/20 opacity-0 blur-xl transition duration-300 group-hover:scale-150 group-hover:opacity-100" />
                  <button className="relative flex items-center gap-3 rounded-full border border-[#FF8A12]/60 bg-black/65 px-4 py-2 text-left backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-[#0EA5E9] group-hover:bg-white group-hover:text-[#101722] group-hover:shadow-[0_0_35px_rgba(14,165,233,.35)]">
                    <span className="h-3 w-3 rounded-full bg-[#FF8A12] shadow-[0_0_20px_#FF8A12] transition group-hover:bg-[#0EA5E9] group-hover:shadow-[0_0_22px_#0EA5E9]" />
                    <span className="text-sm font-bold uppercase tracking-wider">{point.label}</span>
                  </button>
                  <div className="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-20 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-white p-4 text-[#101722] opacity-0 shadow-2xl transition duration-300 group-hover:translate-y-1 group-hover:opacity-100">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#0EA5E9]">
                      Punto conectado
                    </p>
                    <h3 className="mb-2 text-lg font-black uppercase">{point.label}</h3>
                    <p className="text-sm leading-relaxed text-[#475569]">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white py-16 text-[#101722] md:py-24">
        <div className="container">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#0EA5E9]">Historias destacadas</p>
              <h2 className="text-4xl font-black uppercase md:text-5xl">Lo que estamos siguiendo</h2>
            </div>
            <Link href="/blog" className="font-bold uppercase tracking-wider text-[#FF8A12]">Ver todas las historias</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <article key={story.title} className="rounded-2xl border border-[#101722]/10 bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#0EA5E9]">{story.category}</p>
                <h3 className="mb-3 text-xl font-black uppercase">{story.title}</h3>
                <p className="text-sm leading-relaxed text-[#475569]">{story.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FF8A12]">Síguenos</p>
              <h2 className="mb-5 text-4xl font-black uppercase text-white md:text-5xl">El pulso en todas partes</h2>
              <p className="text-white/70">
                NEXOS se piensa como una experiencia multiplataforma: clips, podcast, historias visuales y análisis para distintos formatos.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {platforms.map((platform) => (
                <div key={platform.name} className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-[#0EA5E9]/50 hover:bg-white/[0.08]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 shadow-[0_0_24px_rgba(14,165,233,.2)]">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-black uppercase text-white">{platform.name}</h3>
                  <p className="text-sm text-white/60">{platform.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default NexosLanding;
