import { Feature } from "@/types/feature";

const nexosIcon = (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
    <circle cx="21" cy="21" r="18" stroke="currentColor" strokeWidth="3" />
    <path
      d="M13 21C13 16.6 16.6 13 21 13C25.4 13 29 16.6 29 21C29 22.6 28.5 24.1 27.7 25.4L30 29.5L25.6 28.2C24.3 28.9 22.7 29.4 21 29.4C16.6 29.4 13 25.8 13 21Z"
      stroke="#FF8A12"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M23 8L16 23H22L19 34L30 17H24L28 8H23Z" fill="#0EA5E9" />
  </svg>
);

const featuresData: Feature[] = [
  {
    id: 1,
    icon: nexosIcon,
    title: "Noticias conectadas",
    paragraph:
      "Relacionamos los hechos importantes para que entiendas el contexto detrás de cada noticia.",
  },
  {
    id: 2,
    icon: nexosIcon,
    title: "Actualidad clara",
    paragraph:
      "Presentamos información organizada, directa y fácil de seguir desde cualquier dispositivo.",
  },
  {
    id: 3,
    icon: nexosIcon,
    title: "Análisis rápido",
    paragraph:
      "Resumimos los puntos clave para que puedas comprender lo esencial en menos tiempo.",
  },
  {
    id: 4,
    icon: nexosIcon,
    title: "Temas relevantes",
    paragraph:
      "Seguimos política, tecnología, sociedad, cultura y los temas que marcan conversación.",
  },
  {
    id: 5,
    icon: nexosIcon,
    title: "Perspectiva conectada",
    paragraph:
      "Mostramos cómo los acontecimientos se relacionan entre sí para construir una mirada completa.",
  },
  {
    id: 6,
    icon: nexosIcon,
    title: "Comunidad informada",
    paragraph:
      "Creamos un espacio para lectores que buscan información útil, responsable y actual.",
  },
];

export default featuresData;
