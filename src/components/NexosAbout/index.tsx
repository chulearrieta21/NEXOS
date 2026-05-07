import Image from "next/image";

const pillars = [
  {
    title: "Contexto",
    text: "No contamos hechos aislados: explicamos antecedentes, consecuencias y relaciones para entender mejor cada tema.",
  },
  {
    title: "Claridad",
    text: "Convertimos información compleja en contenido directo, visual y fácil de consultar sin perder profundidad.",
  },
  {
    title: "Comunidad",
    text: "Escuchamos historias cercanas y damos espacio a voces que ayudan a comprender lo que ocurre alrededor.",
  },
  {
    title: "Actualidad",
    text: "Seguimos los temas que marcan conversación pública y los conectamos con datos, señales y narrativas útiles.",
  },
];

const process = [
  "Identificamos temas relevantes de la agenda pública.",
  "Buscamos conexiones entre hechos, lugares, personas y decisiones.",
  "Organizamos la información en formatos claros para web y redes.",
  "Publicamos historias que ayudan a conversar con más contexto.",
];

const NexosAbout = () => {
  return (
    <main className="bg-[#0F1720] text-white">
      <section className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(255,138,18,0.22),_transparent_30%)]" />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#0EA5E9]">
                Sobre el proyecto
              </p>
              <h1 className="mb-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                Conectamos historias, contexto y conversación
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-white/75">
                NEXOS es una plataforma editorial enfocada en explicar la actualidad a través de relaciones: qué pasó, por qué importa y cómo se conecta con otros temas. Nuestro objetivo es que cada lector pueda mirar una noticia con más perspectiva y menos ruido.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[28px] bg-linear-to-br from-[#0EA5E9]/35 to-[#FF8A12]/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-black/35 p-3">
                <Image src="/images/logo/nexo.jpg" alt="NEXOS" width={700} height={950} className="h-auto w-full rounded-[20px] object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-white/10 bg-white p-6 text-[#101722] shadow-xl">
                <p className="mb-4 text-2xl font-black text-[#FF8A12]">∞</p>
                <h2 className="mb-3 text-lg font-black uppercase tracking-wider">{pillar.title}</h2>
                <p className="text-sm leading-relaxed text-[#475569]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white py-16 text-[#101722] md:py-24">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-[#0EA5E9]">Nuestra mirada</p>
              <h2 className="mb-5 text-4xl font-black uppercase md:text-5xl">Informar también es conectar</h2>
              <p className="mb-5 leading-relaxed text-[#475569]">
                En un entorno saturado de información, NEXOS busca ordenar, relacionar y explicar. No queremos competir por ruido: queremos construir una experiencia editorial que ayude a comprender.
              </p>
              <p className="leading-relaxed text-[#475569]">
                Por eso combinamos historias humanas, datos simples, análisis breve y formatos visuales pensados para web, redes sociales y experiencias móviles.
              </p>
            </div>
            <div className="rounded-3xl border border-[#101722]/10 bg-[#F8FAFC] p-6 md:p-8">
              <h3 className="mb-6 text-2xl font-black uppercase">Cómo trabajamos</h3>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF8A12] text-sm font-black text-[#101722]">
                      {index + 1}
                    </span>
                    <p className="font-semibold text-[#334155]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="mb-2 text-5xl font-black text-[#0EA5E9]">01</p>
              <h3 className="mb-3 text-xl font-black uppercase">Historias</h3>
              <p className="text-white/65">Relatos cercanos que muestran cómo la actualidad impacta la vida diaria.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="mb-2 text-5xl font-black text-[#FF8A12]">02</p>
              <h3 className="mb-3 text-xl font-black uppercase">Contexto</h3>
              <p className="text-white/65">Explicaciones breves para entender causas, efectos y conexiones relevantes.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <p className="mb-2 text-5xl font-black text-white">03</p>
              <h3 className="mb-3 text-xl font-black uppercase">Conversación</h3>
              <p className="text-white/65">Contenido pensado para abrir diálogo y construir comunidad informada.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NexosAbout;
