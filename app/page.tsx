import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/home/Hero";
import ValuesSection from "@/components/home/Values";
import CTASection from "@/components/home/Cta";
import ContactSection from "@/components/home/Contact";
import WhatsAppButton from "@/components/WhatsappButon";
import ServicesSection from "@/components/home/Services";
import FeatureSection from "@/components/secciones/FeaturesSection";
import ArticleSection from "@/components/secciones/ArticleSection";
import BusinessTypesSection from "@/components/secciones/BusinesTypeSection";
import WebArticleSection from "@/components/secciones/WebArticleSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
     
        <ServicesSection />
{/* <BusinessTypesSection/> */}
        <ValuesSection />
        <CTASection />

        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
