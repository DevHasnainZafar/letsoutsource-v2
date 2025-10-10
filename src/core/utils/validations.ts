export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
}
export const validateContactForm = (
  data: ContactFormData
): ValidationResult => {
  const errors: ValidationResult["errors"] = {};
  if (!data.name || data.name.trim() === "") {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }
  if (!data.subject || data.subject.trim() === "") {
    errors.subject = "Subject is required";
  } else if (data.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters";
  }
  if (!data.message || data.message.trim() === "") {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
