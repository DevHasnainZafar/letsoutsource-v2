import { UserComments } from "@/shared/components";
import {
  TaxiService,
  TaxiServiceFeatures,
  TaxiServiceSteps,
} from "@/shared/components/taxiServicesComponents";

const metadata = {
  title: "Taxi Booking Services",
  description:
    "Professional taxi booking and dispatch services for UK businesses. 24/7 support with experienced dispatchers.",
  keywords: [
    "taxi booking services",
    "taxi dispatch services",
    "taxi booking outsourcing",
    "UK taxi services",
    "taxi dispatch outsourcing",
    "taxi booking support",
  ],
};

const TaxiServicePage = () => {
  return (
    <>
      <TaxiService />
      <TaxiServiceFeatures />
      <TaxiServiceSteps />
      <UserComments />
    </>
  );
};

export default TaxiServicePage;
