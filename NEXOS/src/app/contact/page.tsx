import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | NEXOS",
  description:
    "Contacta con NEXOS para compartir historias, propuestas editoriales o consultas sobre el proyecto.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contacto"
        description="Comparte tu historia, propuesta o consulta con el equipo de NEXOS."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
