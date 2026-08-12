import WebServiceHero from "./WebServiceHero";
import WebServiceCards from "./WebServiceCards";
import WebServiceProcess from "./WebServiceProcess";
import WebServiceWhy from "./WebServiceWhy";
import WebServiceCTA from "./WebServiceCTA";

export default function WebService() {
  return (
    <>
      <WebServiceHero />
      <WebServiceCards />
      <WebServiceProcess />
      <WebServiceWhy />
      <WebServiceCTA />
    </>
  );
}
