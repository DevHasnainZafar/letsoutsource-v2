import { PartnersLogos, PerfectPartnerBanner } from "@/shared/components";
import {
  AboutCards,
  AboutFeatures,
  AboutHome,
  AboutParntership,
} from "@/shared/components/aboutComponents";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us | Let's OutSource",
  description:
    "Learn more about Let’s Outsource, our mission, values, and the team behind our world-class outsourcing solutions.",
  keywords: [
    "about Let's Outsource",
    "BPO company information",
    "customer support team",
    "outsourcing experts",
    "company information",
    "call center outsourcing company",
    "outsourcing services Pakistan",
    "UK business support",
    "customer support company",
  ],
};
const AboutPage = () => {
  return (
    <div>
      <AboutHome />
      <AboutFeatures />
      <AboutParntership />
      <AboutCards />
      <div className="relative">
        <PartnersLogos />
        <div className="w-full h-[300px] bg-black hidden sm:block "></div>
        <div className="absolute sm:-bottom-15 left-0 w-full ">
          <PerfectPartnerBanner />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
