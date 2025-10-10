"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { validateContactForm } from "../../../utils/validations";

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
  const images: string[] = ["/hero1.png", "/hero2.png", "/hero3.png"];
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
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
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
        /* Ken Burns Animations */
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

      <div className="relative w-full min-h-screen overflow-hidden py-20">
        <div className="fixed inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className={`w-full h-full object-cover ${
                  index === currentSlide ? getImageAnimation(index) : ""
                }`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 z-10">
            <div className="  h-full flex flex-col lg:flex-row justify-between gap-12">
              <div className="w-full lg:w-1/2 flex flex-col justify-end mb-2 items-center text-center">
                <div>
                  <h1 className="text-white text-center text-[44px] font-semibold leading-[120%] whitespace-pre-line">
                    {slideTexts[currentSlide].title}
                  </h1>
                  <div className="flex justify-center gap-3 mt-12">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${
                          index === currentSlide
                            ? "w-16 bg-white"
                            : "w-8 bg-white/40"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-end items-end pb-20">
                <div className=" w-full invisible"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-20 pt-[100vh]">
          {" "}
          <div className="bg-transparent">
            <div className="relative -top-[80vh] max-w-[1200px] mx-auto">
              <div className="flex justify-end">
                <div className="bg-[#FAFAFA] border border-[#E6E6E6] rounded-3xl max-w-[520px] w-full px-8 py-10 shadow-md hover:shadow-xl transition-shadow">
                  <h2 className="text-[#000000] text-[24px] font-semibold leading-[100%] text-center">
                    Ready To Chat
                  </h2>

                  {submitMessage && (
                    <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-[14px]">
                      {submitMessage}
                    </div>
                  )}

                  {submitError && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[14px]">
                      {submitError}
                    </div>
                  )}

                  <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="John"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-2 py-2 border rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                            errors.name ? "border-red-500" : "border-[#EBEBEB]"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-[12px] mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="John@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-2 py-2 border rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                            errors.email ? "border-red-500" : "border-[#EBEBEB]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-[12px] mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Your main Object"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-2 py-2 border rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                          errors.subject ? "border-red-500" : "border-[#EBEBEB]"
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-[12px] mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-[14px] text-[#000] font-normal leading-[100%] mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Write your message here.."
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-2 py-2 h-[120px] border rounded-lg text-[12px] text-[#000] placeholder-[#0000008A] bg-white resize-none outline-none transition ${
                          errors.message ? "border-red-500" : "border-[#EBEBEB]"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-[12px] mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#FE9C00] text-white text-[16px] rounded-lg cursor-pointer hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="max-w-[1200px] mx-auto -mt-80 ">
              <div className="flex justify-end">
                <div
                  className="max-w-[520px] w-full px-8 py-10 rounded-3xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.16)",
                    backdropFilter: "blur(60px)",
                    border: "1px solid rgba(230, 230, 230, 0.32)",
                  }}
                >
                  <h2 className="text-white text-[28px] font-semibold leading-[100%] text-center mb-10">
                    Contact Us
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                        Address
                      </label>
                      <p className="text-white text-[20px] font-semibold leading-[100%]">
                        D739 Arbab Street, Block D, 5th Road Commercial market
                        Rawalpindi
                      </p>
                    </div>
                    <div>
                      <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                        Email
                      </label>
                      <p className="text-white text-[20px] font-semibold leading-[100%]">
                        jsher@letsoutsource.co.uk
                      </p>
                    </div>
                    <div>
                      <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                        Phone
                      </label>
                      <p className="text-white text-[20px] font-semibold leading-[100%]">
                        01623 396 943
                      </p>
                    </div>
                    <div>
                      <label className="block text-white/54 text-[16px] font-normal leading-[100%] mb-3">
                        Opening Hours
                      </label>
                      <p className="text-white text-[20px] font-semibold leading-[100%] mb-2">
                        Monday - Sunday
                      </p>
                      <p className="text-white text-[20px] font-semibold leading-[100%]">
                        24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
