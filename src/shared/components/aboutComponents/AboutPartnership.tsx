const partnershipBenefits = [
  {
    title: "Official & Approved Expertise",
    description:
      "As the official outsourcing partner, our team is specially trained and experienced in utilising the iCabbi platform, ensuring seamless service delivery.",
  },
  {
    title: "Reliable Call Centre Operations",
    description:
      "We provide reliable, 24/7 support that is fully integrated with the iCabbi system to manage bookings, dispatching, customer service, and other crucial Call Centre functions.",
  },
  {
    title: "Operational Excellence",
    description:
      "This collaboration ensures that iCabbi - ETGL clients benefit from consistent operational standards and a commitment to performance, reliability, and exceptional service in every interaction.",
  },
];

const AboutPartnership = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-14 bg-[#f2f2f2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-0 lg:px-0">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FE9C00]/10 rounded-full px-4 py-2 mb-4">
            <span className="text-2xl">🤝</span>
            <span className="text-[#FE9C00] font-medium text-sm sm:text-base">
              Official Partnership
            </span>
          </div>
          <h2 className="font-sora font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[120%] text-[#000000] mb-4">
            Our Partnership with
            <br />
            <span className="text-[#FE9C00]">iCabbi - ETGL</span>
          </h2>
          <p className="text-[#0000008A] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] max-w-[900px] mx-auto">
            We are proud to announce that{" "}
            <span className="font-semibold text-[#000000]">
              Let's Outsource
            </span>{" "}
            is the only approved Call Centre for iCabbi - ETGL, the UK provider
            of the industry-leading, cloud-based taxi dispatch software.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E5E5E5] mb-8 sm:mb-12">
          <p className="text-[#0000008A] text-[15px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-center max-w-[850px] mx-auto">
            This official partnership recognises our expertise and dedication to
            delivering high-quality, scalable back-office and customer support
            solutions specifically for the UK taxi and private hire sector.
          </p>
        </div>
        <div className="mb-8 sm:mb-10">
          <h3 className="font-sora font-semibold text-[22px] sm:text-[26px] lg:text-[30px] text-[#000000] text-center mb-8 sm:mb-10">
            What This Means for{" "}
            <span className="text-[#FE9C00]">iCabbi - ETGL</span> Customers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 border border-[#E5E5E5] hover:shadow-lg hover:border-[#FE9C00]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FE9C00] flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <h4 className="font-sora font-semibold text-[18px] sm:text-[20px] text-[#000000] leading-[130%]">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-[#0000008A] text-[14px] sm:text-[16px] leading-[24px] pl-11">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#FE9C00]/5 rounded-2xl p-6 sm:p-8 border border-[#FE9C00]/20 text-center">
          <p className="text-[#000000] text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[30px] max-w-[800px] mx-auto">
            Our role is to help iCabbi - ETGL customers{" "}
            <span className="font-semibold text-[#FE9C00]">
              maximise efficiency, reduce overheads, and focus on growth
            </span>{" "}
            by providing a world-class, dedicated outsourcing platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPartnership;
