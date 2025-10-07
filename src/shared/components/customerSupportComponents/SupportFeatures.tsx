"use client";
import React from "react";

const SupportFeatures = () => {
  const features = [
    {
      id: "I",
      title: "24/7 Live Chat Support",
      desc: "Get instant assistance anytime with our 24/7 live chat, ensuring your customers are never left waiting for support.",
    },
    {
      id: "II",
      title: "Email Support with Fast Response Times",
      desc: "We deliver quick and accurate email responses, keeping your communication smooth, professional, and always reliable.",
    },
    {
      id: "III",
      title: "Dedicated Support Managers",
      desc: "A single dedicated manager as your point of contact, ensuring personalized support that truly understands your needs.",
    },
    {
      id: "IV",
      title: "Comprehensive FAQs and Help Center",
      desc: "Comprehensive self-service resources that empower customers with faster, hassle-free problem-solving.",
    },
    {
      id: "V",
      title: "Multi-Language Support Available",
      desc: "Seamless multi-language support that lets your customers communicate with ease in the language they prefer.",
    },
  ];

  return (
    <section className="w-full py-30">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-4">
        <div className="lg:w-[40%]">
          <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#000000B8] uppercase mb-2">
            Support
          </p>
          <h2 className="font-sora font-semibold text-[36px] leading-[100%] text-[#000000] mb-4">
            Our Support Services
          </h2>
          <p className="font-sora text-[16px] leading-[27px] text-[#0000008A]">
            Efficient, reliable, and cost-effective outsourcing solutions for
            your business needs.
          </p>
        </div>
        <div className="lg:w-[55%] flex flex-col gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative flex items-start gap- border border-[#00000014] px-5 py-8"
            >
              {" "}
              <div
                className="absolute top-15 -translate-y-1/2 -left-6 w-[45px] h-[45px] flex items-center justify-center text-white font-serif font-semibold text-[16px] rounded-md"
                style={{
                  background:
                    "linear-gradient(180deg, #FFBD54 0%, #E2A84BE5 100%)",
                }}
              >
                {feature.id}
              </div>
              <div className="ml-8">
                <h3 className="font-sora font-bold text-[22px] leading-[31.72px] text-[#000000] mb-1">
                  {feature.title}
                </h3>
                <p className="font-sora font-normal text-[15px] max-w-[550px] leading-[22.78px] text-[#0000008A]">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportFeatures;
