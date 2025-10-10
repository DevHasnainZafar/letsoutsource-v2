"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { validateContactForm } from "@/core/utils/validations";

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
const ContactUs = () => {
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
    <section className="relative bg-white max-w-[1200px] mx-auto  px-4 text-center py-28">
      <p className="text-[#000000B8] font-medium text-[14px] leading-6 font-sora">
        CONTACT US
      </p>
      <div className="">
        <Image
          src="/bgorange.png"
          alt="orange glow background"
          fill
          className="object-contain mt-30"
        />
      </div>
      <p className="text-[#0000008A] text-[14px] leading-7 mt-1 font-sora font-normal max-w-[800px] mx-auto">
        Our skilled operators specialize in managing industry-leading systems
        like iCabbi, Autocab, and <br /> CabTreasure. With their expertise, we
        ensure every ride is dispatched smoothly, accurately, and on
        time—providing both drivers and passengers with a reliable experience.
      </p>
      <div className="relative mt-20 bg-[#FAFAFA] border border-[#E6E6E6] rounded-3xl max-w-[600px] mx-auto px-8 py-10 shadow-md hover:shadow-xl">
        <div className="flex justify-center mb-4 text-center">
          <Image
            src="/blacklogo.png"
            alt="letsoutsource logo"
            width={120}
            height={40}
          />
        </div>
        <h2 className="text-[#000000] text-[24px] font-semibold leading-[100%] font-sora">
          Ready To Chat
        </h2>
        <p className="text-[#0000008A] text-[14px] leading-7 mt-2 font-sora font-normal max-w-sm text-center mx-auto">
          Exceptional customer care to boost satisfaction and enhance long-term
          customer loyalty.
        </p>

        {submitMessage && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-[14px] font-sora">
            {submitMessage}
          </div>
        )}

        {submitError && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-[14px] font-sora">
            {submitError}
          </div>
        )}

        <form className="mt-8 space-y-5 text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John"
                value={formData.name}
                onChange={handleChange}
                className={`w-full h-10.5 px-2 py-2 border rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                  errors.name ? "border-red-500" : "border-[#EBEBEB]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-[12px] font-sora mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="John@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full h-10.5 px-2 py-2 border rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                  errors.email ? "border-red-500" : "border-[#EBEBEB]"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-[12px] font-sora mt-1">
                  {errors.email}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block  text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Your main Object"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full h-10.5 px-2 py-2 border rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white outline-none transition ${
                errors.subject ? "border-red-500" : "border-[#EBEBEB]"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-[12px] font-sora mt-1">
                {errors.subject}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-[14px] text-[#000] font-sora font-normal leading-[100%] mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here.."
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-2 py-2 h-[120px] border rounded-lg text-[12px] font-sora text-[#000] placeholder-[#0000008A] bg-white resize-none outline-none transition ${
                errors.message ? "border-red-500" : "border-[#EBEBEB]"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-[12px] font-sora mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#FE9C00] text-white text-[16px] font-sora rounded-lg cursor-pointer hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
