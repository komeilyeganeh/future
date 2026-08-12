import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServicesProcess from "./ServicesProcess";
import ServicesCTA from "./ServicesCTA";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <ServicesHero />

      <ServicesGrid />

      <ServicesProcess />

      <ServicesCTA />
    </main>
  );
}