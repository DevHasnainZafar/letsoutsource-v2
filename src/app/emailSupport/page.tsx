import {
  EmailSupport,
  EmailSupportFeatures,
  EmailSupportServices,
  EmailSupportSpecialized,
} from "@/shared/components/emailSupportComponents";

export const metadata = {
  title: "Email Support Services",
  description:
    "Professional email support outsourcing services for businesses. Efficient email management and customer communication.",
  keywords: [
    "email support outsourcing",
    "email management services",
    "customer email support",
    "business email support",
    "outsourced email support",
    "email customer service",
  ],
};
const EmailSupportPage = () => {
  return (
    <>
      <EmailSupport />
      <EmailSupportServices />
      <EmailSupportSpecialized />
      <EmailSupportFeatures />
    </>
  );
};

export default EmailSupportPage;
