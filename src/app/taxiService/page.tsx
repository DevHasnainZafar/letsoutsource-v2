import { UserComments } from "@/shared/components";
import {
  TaxiService,
  TaxiServiceFeatures,
  TaxiServiceSteps,
} from "@/shared/components/taxiServicesComponents";

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
