"use client";

import CRMHero from "./CRMHero";
import CRMOverview from "./CRMOverview";
import CRMFeatures from "./CRMFeatures";
import CRMWorkflow from "./CRMWorkflow";
import CRMBenefits from "./CRMBenefits";
import CRMAutomation from "./CRMAutomation";
import CRMCTA from "./CRMCTA";

export default function CRM() {
  return (
    <>
      <CRMHero />
      <CRMOverview />
      <CRMFeatures />
      <CRMWorkflow />
      <CRMBenefits />
      <CRMAutomation />
      <CRMCTA />
    </>
  );
}
