import Image from "next/image";
const TaxiServiceSpecialized = () => {
  const services = [
    {
      iconImage: "/usericon.png",
      title: "Local Voice, Global Support",
      description:
        "Our team communicates professionally and naturally — passengers feel they’re talking to your office, not a call centre halfway around the world.",
    },
    {
      iconImage: "/timeicon.png",
      title: "Flexible & Scalable",
      description:
        "Need extra help during peak hours or full coverage on weekends? We easily scale up or down based on your needs — no long-term commitments required.",
    },
    {
      iconImage: "/personicon.png",
      title: "Save Serious Cost",
      description:
        "Reduce your operational expenses by outsourcing to our trained taxi support team — no recruitment, training, or night shift costs. One fixed monthly rate, zero HR hassle.",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto pt-10 sm:pt-10 pb-0 sm:pb-0 px-4 sm:px-0">
      <div>
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-gray-600 font-medium text-[14px] sm:text-base leading-6 tracking-normal mb-2">
            WHY CHOOSE US
          </p>
          <h1 className="text-black font-semibold text-[28px] sm:text-[36px] leading-[36px] sm:leading-[44px] mb-4 font-sora">
            Why Taxi Companies Choose <br className="hidden sm:block" /> Let’s
            Outsource
          </h1>
          <p className="text-[#0000008A] font-normal text-[15px] sm:text-lg leading-[25px] sm:leading-[27px] max-w-[650px] mx-auto">
            Since 2019, we’ve been helping taxi firms run smoother, faster, and
            cheaper. Our UK-trained offshore team handles bookings, dispatch,
            and customer calls with complete reliability.
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
                src="/taxi2.avif"
                alt="Taxi Outsourcing Team"
                fill
                unoptimized
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

export default TaxiServiceSpecialized;
