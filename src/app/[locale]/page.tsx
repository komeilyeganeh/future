import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProductsPreview from "@/components/home/ProductsPreview";
import Stats from "@/components/home/Stats";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f9fc] text-[#11131a]">
      <Navbar />

      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <ProductsPreview />
        <Stats />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
