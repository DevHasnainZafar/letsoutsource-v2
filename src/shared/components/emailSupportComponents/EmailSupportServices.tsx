import Image from "next/image";

const EmailSupportServices = () => {
  const features = [
    { image: "/framework.png", alt: "Framework" },
    { image: "/agents.png", alt: "Agents" },
    { image: "/technology.png", alt: "Technology" },
    { image: "/data.png", alt: "Data" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto pt-35 pb-15">
      <div className="grid lg:grid-cols-2 items-stretch gap-10">
        <div className="flex flex-col justify-center space-y-3 h-full">
          <p className="text-[#000000B8] font-medium text-[16px] leading-6 uppercase">
            Email Support Services
          </p>
          <h2 className="text-black font-sora font-semibold text-[38px] leading-[120%]">
            Always Addressing Your <br /> Inquiries with Care
          </h2>
          <p className="text-[#0000008A] font-normal text-[17px] leading-[27px] max-w-[480px]">
            Seamless email support with expert agents, smart processes, and
            technology for better customer satisfaction.
          </p>
          <div className="grid grid-cols-2 gap-y-6 pt-6 max-w-[520px]">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-start">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={220}
                  height={200}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end relative">
          <div className="w-full   h-full rounded-sm overflow-hidden shadow-[0px_4px_6px_0px_#00000014] relative mr-16">
            <Image
              src="/emailsimage.png"
              alt="Email Support Illustration"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="absolute -bottom-22 -right-0.5">
            <Image
              src="/dotshorizantal.png"
              alt="Decorative Dots"
              width={330}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <div className="absolute -bottom-0 -right-1">
            <Image
              src="/dotsvertical.png"
              alt="Decorative Dots"
              width={60}
              height={130}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSupportServices;
