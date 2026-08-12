import HISHero from "@/components/products/his/HISHero";
import HISOverview from "@/components/products/his/HISOverview";
import HISFeatures from "@/components/products/his/HISFeatures";
import HISClinical from "@/components/products/his/HISClinical";
import HISIntegration from "@/components/products/his/HISIntegration";
import HISBenefits from "@/components/products/his/HISBenefits";
import HISPromise from "@/components/products/his/HISPromise";
import HISCTA from "@/components/products/his/HISCTA";

export default function HISPage() {
  return (
    <main>
      <HISHero />
      <HISOverview />
      <HISFeatures />
      <HISClinical />
      <HISIntegration />
      <HISBenefits />
      <HISPromise />
      <HISCTA />
    </main>
  );
}
