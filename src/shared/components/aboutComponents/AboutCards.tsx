import Image from "next/image";

const AboutCards = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto pt-10 pb-20 md:pb-40 px-4 md:px-0 flex flex-col relative">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 mb-16 md:mb-28">
        <div className="text-center md:text-left">
          <h4 className="text-[#000000B8] font-medium text-[14px] md:text-[16px] leading-[24px]">
            WHY TO CHOOSE US
          </h4>
          <h2 className="font-sora font-semibold text-[32px] md:text-[44px] leading-[110%] md:leading-[100%] text-black mt-2">
            Trusted Partner in <br /> Outsourcing
          </h2>
        </div>
        <div className="max-w-[600px] text-center md:text-left text-[#0000008A] text-[15px] md:text-[16px] leading-[26px] md:leading-[27px] mt-2 md:mt-6">
          At Lets Outsource, We run high-volume booking and dispatch for fleets
          using iCabbi, Autocab, Cordic, CabTreasure, and Cab9. Our trained
          operators seamlessly integrate into your systems to deliver reliable
          service, improve efficiency, and help your business scale—without the
          high costs of in-house staffing.
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        {/* Card 1 */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] min-h-[380px] flex items-center">
          <Image
            src="/orangebg.png"
            alt="Support 24/7"
            fill
            className="object-cover absolute inset-0 -z-10"
          />
          <div className="relative z-10 flex flex-col justify-center px-6 py-8 space-y-3">
            <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[22px] w-12 h-12 rounded-full flex items-center justify-center font-sora font-semibold text-black">
              01
            </div>
            <h3 className="font-sora font-bold text-[28px] text-black leading-[110%]">
              Support 24/7
            </h3>
            <p className="text-[#0000008A] text-[15px] leading-[24px]">
              Always On 24/7/365 coverage for peak hours, late nights, and
              weekends. We know reliable support keeps your business running
              smoothly. That's why our team is available minimize downtime,
              and provide quick, effective solutions.
            </p>
          </div>
        </div>

        {/* Image 1 */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[#00000014] h-[260px] shadow-md">
          <Image
            src="/busyman.avif"
            alt="Customer Support Team"
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-full rounded-xl overflow-hidden border border-[#00000014] h-[260px] shadow-md">
          <Image
            src="/workingman.avif"
            alt="Robust Help"
            fill
            className="object-cover"
          />
        </div>

        {/* Card 2 */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] min-h-[380px] flex items-center">
          <Image
            src="/orangebg.png"
            alt="Robust Help"
            fill
            className="object-cover absolute inset-0 -z-10"
          />
          <div className="relative z-10 flex flex-col justify-center px-6 py-8 space-y-3">
            <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[22px] w-12 h-12 rounded-full flex items-center justify-center font-sora font-semibold text-black">
              02
            </div>
            <h3 className="font-sora font-bold text-[28px] text-black leading-[110%]">
              Results You Get
            </h3>
            <p className="text-[#0000008A] text-[15px] leading-[24px]">
              Partnering with Lets Outsource means lower booking costs, faster
              response times, and smoother dispatch operations. Our Services
              coverage ensures higher satisfaction. Your business will scale
              effortlessly without the stress of constant recruitment.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden md:block relative h-[900px]">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-stretch md:justify-start gap-10 md:gap-0 z-10">
          <div className="relative w-full md:w-[65%] rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] h-[430px] flex items-center">
            <Image
              src="/orangebg.png"
              alt="Support 24/7"
              fill
              className="object-cover absolute inset-0 -z-10"
            />
            <div className="relative z-10 flex flex-col justify-center px-8 space-y-4 max-w-[90%] mt-26 ml-4">
              <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[26px] w-14 h-14 rounded-full flex items-center justify-center font-sora font-semibold text-black">
                01
              </div>
              <h3 className="font-sora font-bold text-[34px] text-black leading-[100%]">
                Support 24/7
              </h3>
              <p className="text-[#0000008A] text-[18px] leading-[24px] max-w-[470px]">
                Always On 24/7/365 coverage for peak hours, late nights, and
                weekends. We know reliable support keeps your business running
                smoothly. That's why our team is available minimize downtime,
                and provide quick, effective solutions.
              </p>
            </div>
          </div>
          <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-112 w-full md:w-[50%] rounded-xl overflow-hidden border border-[#00000014] h-[280px] md:h-[430px] shadow-md z-20">
            <Image
              src="/busyman.avif"
              alt="Customer Support Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute top-135 inset-0 flex flex-col md:flex-row-reverse items-center md:items-stretch md:justify-between gap-10 md:gap-0 z-20">
          <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-45 w-full md:w-[50%] rounded-xl overflow-hidden border border-[#00000014] h-[280px] md:h-[430px] shadow-md z-20">
            <Image
              src="/workingman.avif"
              alt="Robust Help"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full md:w-[65%] md:ml-auto rounded-2xl overflow-hidden shadow-sm border border-[#F0F0F0] h-[430px] flex items-center">
            <Image
              src="/orangebg.png"
              alt="Robust Help"
              fill
              className="object-cover absolute inset-0 -z-10"
            />
            <div className="relative z-10 flex flex-col justify-center px-8 space-y-4 max-w-[90%] mt-26 ml-auto mr-4">
              <div className="bg-gradient-to-b from-[#FAE5C1] to-[#FFE4B6] text-[26px] w-14 h-14 rounded-full flex items-center justify-center font-sora font-semibold text-black">
                02
              </div>
              <h3 className="font-sora font-bold text-[34px] text-black leading-[100%]">
                Results You Get
              </h3>
              <p className="text-[#0000008A] text-[18px] leading-[24px] max-w-[470px]">
                Partnering with Lets Outsource means lower booking costs, faster
                response times, and smoother dispatch operations. Our Services
                coverage ensures higher satisfaction. Your business will scale
                effortlessly without the stress of constant recruitment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;