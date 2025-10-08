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
    <section className="w-full py-30 relative">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 px-4">
        <div className="lg:w-[40%]">
          <p className="font-poppins font-medium text-[16px] leading-[24px] text-[#000000B8] uppercase mb-2">
            Support
          </p>
          <h2 className="font-sora font-semibold text-[36px] leading-[100%] text-[#000000] mb-4">
            Why Choose Careers <br /> at Letout Source Tech?
          </h2>
          <p className="font-sora text-[16px] leading-[27px] text-[#0000008A] max-w-[400px]">
            Build a meaningful career with opportunities for growth and
            professional development.
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

export default CareerFeatures;
