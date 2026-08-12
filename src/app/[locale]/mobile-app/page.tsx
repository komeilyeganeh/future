import MobileAppHero from "@/components/mobileApp/MobileAppHero";
import MobileAppPlatforms from "@/components/mobileApp/MobileAppPlatforms";
import MobileAppDevelopment from "@/components/mobileApp/MobileAppDevelopment";
import MobileAppProcess from "@/components/mobileApp/MobileAppProcess";
import MobileAppBenefits from "@/components/mobileApp/MobileAppBenefits";
import MobileAppCTA from "@/components/mobileApp/MobileAppCTA";

export default function MobileAppPage() {
  return (
    <>
      <MobileAppHero />
      <MobileAppPlatforms />
      <MobileAppDevelopment />
      <MobileAppProcess />
      <MobileAppBenefits />
      <MobileAppCTA />
    </>
  );
}
