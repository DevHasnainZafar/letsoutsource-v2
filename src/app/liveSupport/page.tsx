import {
  Livesupport,
  PartnerPage,
} from "@/shared/components/liveSupportComponents";

export const metadata = {
  title: "Live Chat Support Services",
  description:
    "Professional live chat support outsourcing services for businesses. 24/7 chat support with experienced agents.",
  keywords: [
    "live chat support",
    "live chat outsourcing",
    "chat support services",
    "24/7 chat support",
    "customer chat support",
    "business chat support",
  ],
};

const LiveSupportPage = () => {
  return (
    <>
      <Livesupport />
      <PartnerPage />
    </>
  );
};

export default LiveSupportPage;
