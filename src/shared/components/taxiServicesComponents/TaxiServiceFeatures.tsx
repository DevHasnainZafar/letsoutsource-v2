import Image from "next/image";
const features = [
  {
    icon: "/mobile.png",
    title: "Live Booking",
    description:
      "We answer your passenger calls or chats in your company name, quote fares, and confirm pickups.",
  },
  {
    icon: "/location.png",
    title: "Dispatching",
    description:
      "Our trained controllers assign the right job to the right driver, manage nearest car logic.",
  },
  {
    icon: "/camera.png",
    title: "Peak-Time Cover",
    description:
      "Last-minute sickness, weekend chaos, or early-morning airport rush — we’ve got you covered.",
  },
  {
    icon: "/clock.png",
    title: "SLA & Reporting",
    description:
      "We monitor and report key metrics  giving you real visibility into performance, not guesswork.",
  },
];

const TaxiServiceFeatures: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto py-12 sm:py-20 lg:py-20 px-2 sm:px-0">
      <p
        className="font-poppins font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] uppercase text-center text-[#000000B8] mb-2"
        aria-hidden
      >
        Features
      </p>
      <h2 className="font-sora font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[100%] text-center text-[#000000] mb-3">
        Our Service <br />
        Features
      </h2>
      <p className="text-center text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[25px] lg:leading-[27px] text-[#0000008A] max-w-[90%] sm:max-w-[820px] mx-auto mb-8 sm:mb-10 lg:mb-12">
        We manage your bookings, dispatch, and customer support around the clock
        — using your existing systems like iCabbi, Autocab, Cordic, CabTreasure,
        or Cab9.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-y-8 lg:gap-y-10 items-start justify-items-center mt-2 sm:mt-10 lg:mt-10">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`w-full max-w-[390px] sm:max-w-[360px] rounded-2xl shadow-sm py-8 sm:py-10 px-6 sm:px-8 flex flex-col items-start text-left bg-[#F4F4F4] ${
              i === 3 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="mb-4 sm:mb-6">
              <Image
                src={f.icon}
                alt={f.title}
                width={50}
                height={50}
                className="object-contain w-10 h-10 sm:w-[65px] sm:h-[65px]"
                sizes="(max-width: 640px) 10vw, 65px"
              />
            </div>
            <h3 className="font-sora font-semibold text-[18px] sm:text-[20px] lg:text-[22px] text-[#000000] mb-2">
              {f.title}
            </h3>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] text-[#0000008A]">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxiServiceFeatures;
