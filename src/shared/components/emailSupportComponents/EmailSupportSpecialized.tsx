import Image from "next/image";
const EmailSupportSpecialized = () => {
  const services = [
    {
      iconImage: "/usericon.png",
      title: "Enhance Customer Experience",
      description:
        "Personalized support that builds trust and boosts satisfaction.",
    },
    {
      iconImage: "/personicon.png",
      title: "Track Trends, Unlock Growth.",
      description:
        "Stay updated on key trends and opportunities to drive smarter business growth.",
    },
    {
      iconImage: "/timeicon.png",
      title: "Fast, Reliable Email Support.",
      description:
        "Our email support ensures timely responses and better customer interactions.",
    },
  ];

  return (
    <div className=" max-w-[1200px] mx-auto pt-20 sm:pt-25 pb-8 sm:pb-15 px-4 sm:px-0">
      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-gray-600 font-medium text-[14px] sm:text-base leading-6 tracking-normal mb-2">
            SPECIALIZED
          </p>
          <h1 className="text-black font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] mb-4 font-sora">
            Specialized Email Support <br /> Services
          </h1>
          <p className="text-[#0000008A] font-normal text-[15px] sm:text-lg leading-[25px] sm:leading-[27px] max-w-[610px] mx-auto">
            Our specialized email support delivers fast, accurate, and
            professional responses, helping you build stronger customer
            relationships and maintain clear communication.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="space-y-6 flex flex-col justify-between h-full">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[14px] cursor-pointer max-w-[520px] pl-4 py-5 pr-2 transition-shadow flex-1 shadow-[0px_4px_6px_0px_#00000014] hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={service.iconImage}
                      alt={service.title}
                      width={40}
                      height={40}
                      className="object-contain w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-black font-bold text-[18px] sm:text-[21px] leading-7 sm:leading-8 mb-2 font-sora">
                      {service.title}
                    </h3>
                    <p className="text-[#0000008A] font-normal text-[14px] sm:text-base leading-[24px] sm:leading-[26px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="block lg:pl-8 flex items-stretch mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full flex-1 min-h-[300px] sm:min-h-[400px]">
              <Image
                src="/workingperson.avif"
                alt="Person working on laptop"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSupportSpecialized;
