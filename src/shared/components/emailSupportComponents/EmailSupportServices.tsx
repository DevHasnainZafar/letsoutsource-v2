"use client";
import Image from "next/image";

const EmailSupportServices = () => {
  const features = [
    { image: "/framework.png", alt: "Framework" },
    { image: "/agents.png", alt: "Agents" },
    { image: "/technology.png", alt: "Technology" },
    { image: "/data.png", alt: "Data" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto pt-10 sm:pt-12 pb-6 sm:pb-12 px-4 sm:px-0">
      <div className="grid lg:grid-cols-2 items-stretch gap-6 sm:gap-10">
        <div className="flex flex-col justify-center space-y-3 h-full">
          <p className="text-[#000000B8] font-medium text-[14px] sm:text-[16px] leading-6 uppercase text-center lg:text-left">
            Email Support Services
          </p>
          <h2 className="text-black font-sora font-semibold text-[28px] sm:text-[38px] leading-[120%] text-center lg:text-left">
            Always Addressing Your <br /> Inquiries with Care
          </h2>
          <p className="text-[#0000008A] font-normal text-[15px] sm:text-[17px] leading-[25px] sm:leading-[27px] max-w-[480px] mx-auto lg:mx-0 text-center lg:text-left">
            Seamless email support with expert agents, smart processes, and
            technology for better customer satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6 pt-4 sm:pt-6 max-w-[520px] mx-auto lg:mx-0 mr-[53px] sm:mr-0">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center lg:justify-start">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={220}
                  height={200}
                  className="object-contain w-[160px] sm:w-[200px] h-auto lg:w-[220px] lg:h-[200px]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end relative">
          <div className="w-full h-full rounded-sm overflow-hidden shadow-[0px_4px_6px_0px_#00000014] relative mr-0 lg:mr-16">
            <Image
              src="/emailsimage.avif"
              alt="Email Support Illustration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-[62px] sm:-bottom-20 lg:-bottom-22 -right-0.5">
            <Image
              src="/dotshorizantal.png"
              alt="Decorative Dots"
              width={330}
              height={80}
              className="object-contain w-[280px] sm:w-[300px] lg:w-[330px] h-auto"
              priority
            />
          </div>
          <div className="absolute -bottom-0 -right-0.5 lg:-right-1">
            <Image
              src="/dotsvertical.png"
              alt="Decorative Dots"
              width={60}
              height={130}
              className="object-contain w-[50px] sm:w-[55px] lg:w-[60px] h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSupportServices;
