import HeroSection from "@/components/HeroSection";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import ContactSection from "@/components/home/Contact";
import SistemasList from "@/components/secciones/SistemasList";
import PromoSection from "@/components/secciones/PromoSection";

export default function SistemasWeb() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection
          title="Sistemas y Herramientas a Medida"
          subtitle={`Automatizaciones, paneles, apps, integraciones y sistemas completos diseñados exactamente según tus procesos. Más eficiencia, menos errores y todo funcionando de forma clara y organizada.`}
          backgroundSrc="/imagen-grafico.jpg"
        />
        <SistemasList/>
        <PromoSection
          title="Creamos el sitio web de tu marca o negocio"
          items={[
            "Sitio web institucional",
            "Pagina autoadministrable",
            "Catálogo",
            "Tienda online",
          ]}
          buttonLabel="Ver sitios web"
          buttonHref="/sitiosweb"
          imageSrc="/webs2.png"
        />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
