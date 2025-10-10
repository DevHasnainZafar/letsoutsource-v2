import { UserComments } from "@/shared/components";
import {
  OutsourcingFeatures,
  OutsourcingService,
  OutsourcingSteps,
} from "@/shared/components/outsourcingComponents";
export const metadata = {
  title: "Outsourcing Services",
  description:
    "Explore our comprehensive range of call center and customer support services. From taxi booking to email support.",
  keywords: [
    "our services",
    "call center services",
    "customer support services",
    "outsourcing services",
    "business process outsourcing",
    "UK business support",
  ],
};

const OutsourcingServicePage = () => {
  return (
    <>
      <OutsourcingService />
      <OutsourcingFeatures />
      <OutsourcingSteps />
      <UserComments />
    </>
  );
};

export default OutsourcingServicePage;
