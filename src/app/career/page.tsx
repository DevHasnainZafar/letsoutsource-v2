import {
  Career,
  CareerFeatures,
  RecentOpenings,
} from "@/shared/components/careerComponents";

const CareerPage = async () => {
  return (
    <>
      <Career />
      <RecentOpenings />
      <CareerFeatures />
    </>
  );
};

export default CareerPage;
