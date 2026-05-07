import NexosAbout from "@/components/NexosAbout";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre NEXOS | Conectamos historias y contexto",
  description:
    "Conoce el propósito editorial de NEXOS: conectar historias, contexto y conversación alrededor de la actualidad.",
};

const AboutPage = () => {
  return (
    <NexosAbout />
  );
};

export default AboutPage;
