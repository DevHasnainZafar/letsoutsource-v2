import {
  HeroSection,
  HomeServices,
  HomeTestimonials,
  WhoToChoose,
  WhoWeAre,
} from "@/shared/components/homeComponents";

import {
  ContactUs,
  PartnersLogos,
  PerfectPartnerBanner,
} from "@/shared/components";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <HomeServices />
      <WhoToChoose />
      <PartnersLogos />
      <ContactUs />
      <HomeTestimonials />
      <PerfectPartnerBanner />
    </>
  );
}
