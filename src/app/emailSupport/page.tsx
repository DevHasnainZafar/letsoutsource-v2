import {
  EmailSupport,
  EmailSupportFeatures,
  EmailSupportServices,
  EmailSupportSpecialized,
} from "@/shared/components/emailSupportComponents";

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
