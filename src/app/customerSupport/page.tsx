import { ContactUs, UserComments } from "@/shared/components";
import {
  CustomerSupport,
  SupportFeatures,
} from "@/shared/components/customerSupportComponents";

const metadata = {
  title: "Customer Support Services",
  description:
    "Professional customer support outsourcing services for UK businesses. 24/7 support with experienced agents.",
  keywords: [
    "customer support outsourcing",
    "24/7 customer support",
    "customer service outsourcing",
    "UK customer support services",
    "business process outsourcing",
    "customer support agents",
  ],
};

const CustomerSupportPage = () => {
  return (
    <>
      <CustomerSupport />
      <ContactUs />
      <SupportFeatures />
      <UserComments />
    </>
  );
};

export default CustomerSupportPage;
