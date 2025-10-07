import { UserComments } from "@/shared/components";
import {
  OutsourcingFeatures,
  OutsourcingService,
  OutsourcingSteps,
} from "@/shared/components/outsourcingComponents";

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
