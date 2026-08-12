import MMSHero from "@/components/products/mms/MMSHero";
import MMSOverview from "@/components/products/mms/MMSOverview";
import MMSCapabilities from "@/components/products/mms/MMSCapabilities";
import MMSWorkflow from "@/components/products/mms/MMSWorkflow";
import MMSIntegrations from "@/components/products/mms/MMSIntegrations";
import MMSBenefits from "@/components/products/mms/MMSBenefits";
import MMSWhy from "@/components/products/mms/MMSWhy";
import MMSCTA from "@/components/products/mms/MMSCTA";

export default function MMSPage() {
  return (
    <>
      <MMSHero />
      <MMSOverview />
      <MMSCapabilities />
      <MMSWorkflow />
      <MMSIntegrations />
      <MMSBenefits />
      <MMSWhy />
      <MMSCTA />
    </>
  );
}