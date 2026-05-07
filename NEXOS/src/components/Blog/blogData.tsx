import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    slug: "marta-punto-de-encuentro",
    title: "Marta y el punto de encuentro del barrio",
    paragraph:
      "Marta convirtió una pequeña venta de café en un espacio donde vecinos, estudiantes y trabajadores comparten información y apoyo.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Marta Rodríguez",
      image: "/images/blog/author-03.png",
      designation: "Emprendedora local",
    },
    tags: ["comunidad"],
    publishDate: "12 Ene 2026",
    location: "Zona centro",
    readTime: "4 min",
    quote:
      "A veces una conversación en la esquina ayuda más que cien mensajes perdidos en el celular.",
    content: [
      "Marta empezó vendiendo café en una mesa pequeña, pero con el tiempo su punto se convirtió en una referencia para quienes pasan temprano hacia el trabajo o la universidad.",
      "La historia muestra cómo los espacios cotidianos también conectan información: allí se comparten avisos, recomendaciones, oportunidades y preocupaciones del barrio.",
      "Para NEXOS, este tipo de relato permite entender que la actualidad no solo ocurre en grandes titulares, sino también en las dinámicas pequeñas que sostienen una comunidad.",
    ],
    highlights: [
      "Un negocio familiar que se transformó en punto de encuentro.",
      "Vecinos que usan el espacio para compartir información útil.",
      "Una muestra de cómo la confianza también construye ciudad.",
    ],
  },
  {
    id: 2,
    slug: "luis-ruta-diaria",
    title: "Luis y la ruta diaria que cuenta la ciudad",
    paragraph:
      "La rutina de Luis, conductor de mototaxi, revela cómo se mueven los barrios y qué temas preocupan a la gente cada día.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Luis Herrera",
      image: "/images/blog/author-02.png",
      designation: "Conductor comunitario",
    },
    tags: ["movilidad"],
    publishDate: "18 Ene 2026",
    location: "Rutas urbanas",
    readTime: "5 min",
    quote:
      "Uno aprende a conocer la ciudad escuchando a la gente que se sube todos los días.",
    content: [
      "Luis recorre varias zonas durante el día. En cada viaje escucha historias sobre empleo, seguridad, transporte, precios y cambios en los barrios.",
      "Su rutina permite observar cómo la movilidad conecta realidades distintas: estudiantes, comerciantes, familias y trabajadores que dependen de trayectos rápidos para cumplir sus actividades.",
      "Esta historia ayuda a comprender que una ruta no es solo un camino; también es una línea de conversación que muestra el pulso de una ciudad.",
    ],
    highlights: [
      "La movilidad como espejo de las necesidades diarias.",
      "Conversaciones que revelan preocupaciones comunes.",
      "Un recorrido que conecta economía, seguridad y comunidad.",
    ],
  },
  {
    id: 3,
    slug: "ana-red-de-apoyo",
    title: "Ana y la red de apoyo que nació por mensajes",
    paragraph:
      "Un grupo de mensajería vecinal se convirtió en una red para resolver emergencias, compartir alertas y acompañar a adultos mayores.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ana Castillo",
      image: "/images/blog/author-03.png",
      designation: "Gestora comunitaria",
    },
    tags: ["solidaridad"],
    publishDate: "24 Ene 2026",
    location: "Comunidad norte",
    readTime: "6 min",
    quote:
      "La tecnología sirve cuando logra que nadie se sienta solo ante un problema.",
    content: [
      "Ana creó un grupo para compartir avisos sencillos entre vecinos. Al poco tiempo, ese canal empezó a servir para coordinar ayudas, reportar situaciones urgentes y acompañar a personas mayores.",
      "La experiencia muestra cómo una herramienta digital puede fortalecer vínculos reales cuando existe confianza y organización.",
      "En NEXOS vemos esta historia como un ejemplo de conexión entre tecnología, comunidad y cuidado colectivo.",
    ],
    highlights: [
      "Una red digital con impacto en la vida cotidiana.",
      "Vecinos que coordinan ayuda de forma rápida.",
      "Tecnología usada para fortalecer confianza comunitaria.",
    ],
  },
];
export default blogData;
