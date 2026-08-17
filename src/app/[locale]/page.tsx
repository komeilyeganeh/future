import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Products from "@/components/home/Products";
import Stats from "@/components/home/Stats";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-background-soft text-primary">
      <Hero />
      <About />
      <Services />
      <Products />
      <Stats />
      <Contact />
    </main>
  );
}