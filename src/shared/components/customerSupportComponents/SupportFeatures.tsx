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
    <section className="w-full pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-6 px-4 sm:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12">
        <div className="lg:w-[40%] w-full">
          <p className="font-poppins font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#000000B8] uppercase mb-2 sm:mb-3 md:mb-2 text-center lg:text-left">
            Support
          </p>
          <h2 className="font-sora font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[100%] text-[#000000] mb-3 sm:mb-4 text-center lg:text-left">
            Our Support Services
          </h2>
          <p className="font-sora text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[27px] text-[#0000008A] max-w-[90%] sm:max-w-[80%] md:max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left">
            Efficient, reliable, and cost-effective outsourcing solutions for
            your business needs.
          </p>
        </div>
        <div className="lg:w-[55%] w-full flex flex-col gap-4 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative flex items-start gap-4 border border-[#00000014] px-5 sm:px-5 py-6 sm:py-7 md:py-8"
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 left-[-14px] sm:left-[-18px] w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] md:w-[45px] md:h-[45px] flex items-center justify-center text-white font-serif font-semibold text-[12px] sm:text-[14px] md:text-[16px] rounded-md"
                style={{
                  background:
                    "linear-gradient(180deg, #FFBD54 0%, #E2A84BE5 100%)",
                }}
              >
                {feature.id}
              </div>
              <div className="ml-7 sm:ml-8 md:ml-9">
                <h3 className="font-sora font-bold text-[20px] sm:text-[21px] md:text-[22px] leading-[28px] sm:leading-[30px] md:leading-[31.72px] text-[#000000] mb-1 sm:mb-1.5">
                  {feature.title}
                </h3>
                <p className="font-sora font-normal text-[14px] sm:text-[15px] leading-[20px] sm:leading-[22px] md:leading-[22.78px] text-[#0000008A] max-w-[95%] sm:max-w-[550px]">
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
