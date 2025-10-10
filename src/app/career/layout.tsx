import { CareerNavbar } from "@/shared/components/careerComponents";
import Footer from "@/shared/layout/footer/Footer";

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CareerNavbar />
      {children}
    </>
  );
}
