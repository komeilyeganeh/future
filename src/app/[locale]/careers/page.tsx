import CareersHero from "@/components/careers/CareersHero";
import CareersValues from "@/components/careers/CareersValues";
import CareersJobs from "@/components/careers/CareersJobs";
import CareersCTA from "@/components/careers/CareersCTA";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <CareersValues />
      <CareersJobs />
      <CareersCTA />
    </main>
  );
}