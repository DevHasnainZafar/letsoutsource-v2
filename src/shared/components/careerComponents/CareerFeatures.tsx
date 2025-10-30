"use client";
import React from "react";

const CareerFeatures = () => {
  const features = [
    {
      id: "I",
      title: "Collaborative environment",
      desc: "At LetOutsource, we thrive on collaboration, innovation, and growth through teamwork",
    },
    {
      id: "II",
      title: "Growth opportunity",
      desc: "At LetOutsource, we offer growth opportunities through training, mentorship, & challenging projects helping you enhance skills and advance your career.",
    },
    {
      id: "III",
      title: "Work-life balance",
      desc: "At LetOutsource, we promote a healthy work-life balance with flexible policies, resources, & support helping you thrive personally & professionally.",
    },
    {
      id: "IV",
      title: "Impactful work",
      desc: "At LetOutsource, every contribution counts. Work on meaningful projects, create solutions, and have your efforts recognized.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-12 md:py-12 relative px-2 sm:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 md:gap-12">
        <div className="lg:w-[40%]">
          <p className="font-poppins font-medium text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#000000B8] uppercase mb-2 sm:mb-3 md:mb-2">
            Support
          </p>
          <h2 className="font-sora font-semibold text-[28px] sm:text-[32px] md:text-[36px] leading-[100%] text-[#000000] mb-3 sm:mb-4">
            Why Choose Careers <br className="block sm:hidden" /> at Letout
            Source Tech?
          </h2>
          <p className="font-sora text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[27px] text-[#0000008A] max-w-[90%] sm:max-w-[80%] md:max-w-[400px]">
            Build a meaningful career with opportunities for growth and
            professional development.
          </p>
        </div>
        <div className="lg:w-[55%] flex flex-col gap-4 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative flex items-start gap-4 border border-[#00000014] px-5 sm:px-0 py-6 sm:py-7 md:py-8"
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

export default CareerFeatures;
