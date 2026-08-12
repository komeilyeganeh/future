import BPMSHero from "@/components/products/bpms/BPMSHero";
import BPMSOverview from "@/components/products/bpms/BPMSOverview";
import BPMSCapabilities from "@/components/products/bpms/BPMSCapabilities";
import BPMSWorkflow from "@/components/products/bpms/BPMSWorkflow";
import BPMSBenefits from "@/components/products/bpms/BPMSBenefits";
import BPMSScalability from "@/components/products/bpms/BPMSScalability";
import BPMSCTA from "@/components/products/bpms/BPMSCTA";

export default function BPMSPage() {
  return (
    <main>
      <BPMSHero />
      <BPMSOverview />
      <BPMSCapabilities />
      <BPMSWorkflow />
      <BPMSBenefits />
      <BPMSScalability />
      <BPMSCTA />
    </main>
  );
}