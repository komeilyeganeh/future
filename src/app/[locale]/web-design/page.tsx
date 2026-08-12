import WebDesignHero from "@/components/webDesign/WebDesignHero";
import WebDesignTypes from "@/components/webDesign/WebDesignTypes";
import WebDesignProcess from "@/components/webDesign/WebDesignProcess";
import WebDesignBenefits from "@/components/webDesign/WebDesignBenefits";
import WebDesignCTA from "@/components/webDesign/WebDesignCTA";

export default function WebDesignPage() {
  return (
    <>
      <WebDesignHero />
      <WebDesignTypes />
      <WebDesignProcess />
      <WebDesignBenefits />
      <WebDesignCTA />
    </>
  );
}