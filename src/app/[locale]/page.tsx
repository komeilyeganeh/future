import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Stats from "@/components/home/Stats";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f6fafb] text-[#082f3a]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}