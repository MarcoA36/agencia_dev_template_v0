import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/home/Hero";
import ServicesSection from "@/components/home/Services";
import ValuesSection from "@/components/home/Values";
import CTASection from "@/components/home/Cta";
import ContactSection from "@/components/home/Contact";
import WhatsAppButton from "@/components/WhatsappButon";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ValuesSection />
        <CTASection />
        <ContactSection/>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
