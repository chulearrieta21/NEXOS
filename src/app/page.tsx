import ScrollUp from "@/components/Common/ScrollUp";
import NexosLanding from "@/components/NexosLanding";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXOS | Conectamos los puntos de la actualidad",
  description:
    "NEXOS es una plataforma editorial para entender noticias, historias y análisis conectados con el contexto actual.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <NexosLanding />
    </>
  );
}
