"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { validateContactForm } from "../../../utils/validations";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const images: string[] = ["/hero1.avif", "/hero2.avif", "/hero3.avif"];
  const slideTexts = [
    { title: "Trusted Partner in\nOutsourcing" },
    { title: "Reliable Support,\nAnytime" },
    { title: "Your Business, Our\nResponsibility" },
  ];

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [submitError, setSubmitError] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getImageAnimation = (index: number): string => {
    if (index === 0) return "animate-kenBurnsUp";
    if (index === 1) return "animate-kenBurnsLeftToRight";
    return "animate-kenBurnsRightToLeft";
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage("");
    setSubmitError("");
    const { isValid, errors: validationErrors } = validateContactForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(
          "Email sent successfully! We'll get back to you soon."
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitError(
          data.message || "Failed to send email. Please try again."
        );
      }
    } catch (error) {
      setSubmitError("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        /* Ken Burns animations */
        @keyframes kenBurnsUp {
          0% {
            transform: scale(1) translateY(0);
          }
          100% {
            transform: scale(1.15) translateY(-3%);
          }
        }
        @keyframes kenBurnsLeftToRight {
          0% {
            transform: scale(1.15) translateX(-5%);
          }
          100% {
            transform: scale(1.15) translateX(5%);
          }
        }
        @keyframes kenBurnsRightToLeft {
          0% {
            transform: scale(1.15) translateX(5%);
          }
          100% {
            transform: scale(1.15) translateX(-5%);
          }
        }
        .animate-kenBurnsUp {
          animation: kenBurnsUp 5000ms ease-out forwards;
        }
        .animate-kenBurnsLeftToRight {
          animation: kenBurnsLeftToRight 5000ms ease-out forwards;
        }
        .animate-kenBurnsRightToLeft {
          animation: kenBurnsRightToLeft 5000ms ease-out forwards;
        }
      `}</style>

      <div className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:min-h-screen overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              width={1000}
              height={1000}
              alt={`Hero ${index + 1}`}
              className={`w-full h-full object-cover object-center sm:object-top ${
                index === currentSlide ? getImageAnimation(index) : ""
              }`}
            />
          </div>
        ))}
        <div className="absolute  inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        <div className="relative max-w-[1200px] mx-auto mt-16 sm:mt-20 md:mt-24 z-10 flex flex-col lg:flex-row items-center justify-center min-h-[70vh] sm:min-h-[80vh] md:min-h-screen  gap-8 sm:gap-10 md:gap-12 py-12 sm:py-16 md:py-20 px-2 sm:px-0">
          <div className="text-center lg:text-left w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 mt-10 sm:mt-0">
            <h1 className="text-white text-[32px] sm:text-[36px] md:text-[42px] lg:text-[54px] font-bold leading-tight whitespace-pre-line drop-shadow-lg">
              {slideTexts[currentSlide].title}
            </h1>
            <p className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] max-w-[90%] sm:max-w-[80%] md:max-w-lg mx-auto lg:mx-0">
              Get in touch with us for reliable outsourcing solutions designed
              to grow your business.
            </p>

            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 mt-4 sm:mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 sm:w-16 bg-[#FE9C00]"
                      : "w-6 sm:w-8 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-[90%] sm:max-w-[480px] md:max-w-[520px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
            <h2 className="text-white text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-center mb-4 sm:mb-6">
              Let’s Connect
            </h2>

            {submitMessage && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-[13px] sm:text-[14px]">
                {submitMessage}
              </div>
            )}

            {submitError && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[13px] sm:text-[14px]">
                {submitError}
              </div>
            )}

            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-white text-[12px] sm:text-sm mb-1 sm:mb-2 block"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jan Sher"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-[#FE9C00] outline-none text-[14px] sm:text-[16px] ${
                      errors.name
                        ? "border border-red-500"
                        : "border border-white/30"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-[11px] sm:text-xs mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-white text-[12px] sm:text-sm mb-1 sm:mb-2 block"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jsher@letsoutsource.co.uk"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-1.5 sm:py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-[#FE9C00] outline-none text-[14px] sm:text-[16px] ${
                      errors.email
                        ? "border border-red-500"
                        : "border border-white/30"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[11px] sm:text-xs mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-white text-[12px] sm:text-sm mb-1 sm:mb-2 block"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Your main topic"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-3 py-1.5 sm:py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-[#FE9C00] outline-none text-[14px] sm:text-[16px] ${
                    errors.subject
                      ? "border border-red-500"
                      : "border border-white/30"
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-white text-[12px] sm:text-sm mb-1 sm:mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full h-[100px] sm:h-[110px] md:h-[120px] px-3 py-1.5 sm:py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-[#FE9C00] outline-none resize-none text-[14px] sm:text-[16px] ${
                    errors.message
                      ? "border border-red-500"
                      : "border border-white/30"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-400 text-[11px] sm:text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full py-2.5 sm:py-3 bg-[#FE9C00] text-white text-[14px] sm:text-[16px] font-semibold rounded-lg shadow-md hover:bg-[#ffa733] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 pb-12 sm:pb-16 md:pb-20 px-2 sm:px-0 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                label: "Address",
                value:
                  "D739 Arbab Street, Block D, 5th Road Commercial market Rawalpindi",
              },
              {
                label: "Email",
                value: "jsher@letsoutsource.co.uk\njsher@letsoutsource.biz",
              },
              {
                label: "Phone",
                value: "01623 396 943\n+44 1623 396 943",
              },
              { label: "Opening Hours", value: "Monday - Sunday\n24/7" },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-center hover:bg-white/20 transition"
              >
                <h3 className="text-[#FE9C00] text-[14px] sm:text-[15px] md:text-[16px] font-semibold mb-1 sm:mb-2">
                  {item.label}
                </h3>
                <p className="text-white text-[13px] sm:text-[14px] md:text-[15px] whitespace-pre-line">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
