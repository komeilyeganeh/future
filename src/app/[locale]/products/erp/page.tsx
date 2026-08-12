import ERPHero from "@/components/products/erp/ERPHero";
import ERPOverview from "@/components/products/erp/ERPOverview";
import ERPFeatures from "@/components/products/erp/ERPFeatures";
import ERPBenefits from "@/components/products/erp/ERPBenefits";
import ERPModules from "@/components/products/erp/ERPModules";
import ERPCTA from "@/components/products/erp/ERPCTA";

export default function ERPPage() {
  return (
    <main>
      <ERPHero />
      <ERPOverview />
      <ERPFeatures />
      <ERPBenefits />
      <ERPModules />
      <ERPCTA />
    </main>
  );
}