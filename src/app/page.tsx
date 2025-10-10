import {
  HeroSection,
  HomeServices,
  HomeTestimonials,
  WhyToChoose,
  WhoWeAre,
} from "@/shared/components/homeComponents";

import {
  ContactUs,
  PartnersLogos,
  PerfectPartnerBanner,
} from "@/shared/components";
import Script from "next/script";

export const metadata = {
  title: "Let's OutSource",
  icons: {
    icon: "/Letoutsource-favicon.png",
  },
  keywords: [
    "customer support outsourcing",
    "call center services",
    "outsource customer support",
    "live chat support service",
    "email support outsourcing",
    "live call answering service",
    "taxi booking support service",
    "virtual assistant services",
    "24/7 customer support company",
    "business process outsourcing (BPO)",
    "call center services UK",
    "outsource to Pakistan from UK",
    "UK business support outsourcing",
    "remote call center for UK companies",
    "live chat agents for UK websites",
    "UK-based virtual receptionists",
    "UK dispatch services",
    "live chat support agents",
    "email support for small business",
    "24/7 call handling service",
    "taxi dispatch outsourcing",
    "remote customer service team",
    "helpdesk outsourcing",
    "virtual receptionist",
    "technical support outsourcing",
    "appointment booking call center",
  ],
  description:
    "Let’s Outsource specialized in outsourced call center services to different businesses around the world. We are specialized in booking and dispatch services and are fully trained on all dispatch softwares",
};
export default function Home() {
  return (
    <>
      <Script id="home-page-tracking" strategy="afterInteractive">
        {`
          gtag('event', 'page_view', {
            page_title: 'Home',
            page_path: '/',
          });
        `}
      </Script>
      <HeroSection />
      <WhoWeAre />
      <HomeServices />
      <WhyToChoose />
      <PartnersLogos />
      <ContactUs />
      <div className="relative">
        <HomeTestimonials />
        <div className="absolute -bottom-15 left-0 w-full">
          <PerfectPartnerBanner />
        </div>
      </div>
    </>
  );
}
