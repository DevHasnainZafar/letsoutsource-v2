import { PartnersLogos, PerfectPartnerBanner } from "@/shared/components";
import {
  AboutCards,
  AboutFeatures,
  AboutHome,
} from "@/shared/components/aboutComponents";
const AboutPage = () => {
  return (
    <div>
      <AboutHome />
      <AboutFeatures />
      <AboutCards />
      <div className="relative">
        <PartnersLogos />
        <div className="w-full h-[400px] bg-black"></div>
        <div className="absolute -bottom-15 left-0 w-full">
          <PerfectPartnerBanner />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
