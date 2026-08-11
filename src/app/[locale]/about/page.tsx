import AboutSection from "@/components/about/AboutSection";
import HistorySection from "@/components/about/HistorySection";
import TeamSection from "@/components/about/TeamSection";
import ValuesSection from "@/components/about/ValuesSection";
import FactsSection from "@/components/about/FactsSection";
import LocationSection from "@/components/about/LocationSection";
import ContactSection from "@/components/about/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f4f9fa] text-[#082f3a]">
      <Navbar />

      <AboutSection />

      <HistorySection />

      <TeamSection />

      <ValuesSection />

      <FactsSection />

      <LocationSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
