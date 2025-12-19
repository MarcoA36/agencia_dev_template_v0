import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";
import PromoSection from "@/components/secciones/PromoSection";
import ContactSection from "@/components/home/Contact";
import PaginasList from "@/components/secciones/PaginasList";
import WebArticleSection from "@/components/secciones/WebArticleSection";

export default function PaginasWebPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection
          title="Páginas Web"
          subtitle="Ya seas un
          profesional independiente, una PyME o una empresa consolidada,
          contar con presencia online te permite atraer clientes, mostrar
          tus servicios y fortalecer tu marca las 24 horas del día."
          backgroundSrc="/webs2.png"
        />
        <PaginasList />
        <WebArticleSection />
        <PromoSection
          title="Hacé más eficiente la gestión de tu negocio"
          subtitle="Sistemas a medida que automatizan tareas, reducen errores y te permiten escalar sin límites"
          items={[
            "Sistemas de gestión a medida",
            "Herramientas personalizadas para negocios",
            "Automatización e integraciones con APIs",
            "Sistemas internos y paneles de administración",
          ]}
          buttonLabel="Ver sistemas"
          buttonHref="/sistemasweb"
          imageSrc="/imagen-grafico.jpg"
        />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
