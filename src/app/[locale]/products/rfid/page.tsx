import RFIDHero from "@/components/products/rfid/RFIDHero";
import RFIDOverview from "@/components/products/rfid/RFIDOverview";
import RFIDHowItWorks from "@/components/products/rfid/RFIDHowItWorks";
import RFIDApplications from "@/components/products/rfid/RFIDApplications";
import RFIDBenefits from "@/components/products/rfid/RFIDBenefits";
import RFIDCTA from "@/components/products/rfid/RFIDCTA";

export default function RFIDPage() {
  return (
    <main className="overflow-hidden bg-[#f8faf9]">
      <RFIDHero />
      <RFIDOverview />
      <RFIDHowItWorks />
      <RFIDApplications />
      <RFIDBenefits />
      <RFIDCTA />
    </main>
  );
}