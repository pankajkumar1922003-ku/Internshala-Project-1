import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoIHelp from "@/components/WhoIHelp";
import QuoteBanner from "@/components/QuoteBanner";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import OurOffice from "@/components/OurOffice";
import Faqs from "@/components/Faqs";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhoIHelp />
      <QuoteBanner />
      <Expertise />
      <Approach />
      <Services />
      <OurOffice />
      <Faqs />
      <CTA />
    </>
  );
}
