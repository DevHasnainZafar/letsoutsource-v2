import React from "react";

const EmailSupportSpecialized = () => {
  const services = [
    {
      iconImage: "usericon.png",
      title: "Enhance Customer Experience",
      description:
        "Personalized support that builds trust and boosts satisfaction.",
    },
    {
      iconImage: "personicon.png",
      title: "Track Trends, Unlock Growth.",
      description:
        "Stay updated on key trends and opportunities to drive smarter business growth.",
    },
    {
      iconImage: "timeicon.png",
      title: "Fast, Reliable Email Support.",
      description:
        "Our email support ensures timely responses and better customer interactions.",
    },
  ];

  return (
    <div className="min-h-screen max-w-[1200px] mx-auto py-25">
      <div className="">
        <div className="text-center mb-16">
          <p className="text-gray-600 font-medium text-base leading-6 tracking-normal mb-2">
            SPECIALIZED
          </p>
          <h1 className="text-black font-semibold text-[36px] leading-[44px] mb-4 font-sora">
            Specialized Email Support <br /> Services
          </h1>
          <p className="text-[#0000008A] font-normal text-lg leading-[27px] max-w-[610px] mx-auto">
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
                    <img
                      src={service.iconImage}
                      alt={service.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-black font-bold text-[21px] leading-8 mb-2 font-sora">
                      {service.title}
                    </h3>
                    <p className="text-[#0000008A] font-normal text-base leading-[26px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:pl-8 flex items-stretch">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full flex-1">
              <img
                src="workingperson.png"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSupportSpecialized;
