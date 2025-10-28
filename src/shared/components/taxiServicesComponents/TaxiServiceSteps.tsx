import Image from "next/image";
const TaxiServiceSteps = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-25 bg-[#F2F2F2]">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-0">
        <p
          className="font-poppins font-medium text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-center text-[#000000B8] mb-2"
          aria-hidden
        >
          STEPS
        </p>
        <h2 className="font-sora font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[120%] text-center text-[#000000] mb-3">
          Book in Seconds, Ride <br className="block sm:hidden" /> with Ease
        </h2>
        <p className="text-center text-[14px] sm:text-[16px] lg:text-[18px] leading-[22px] sm:leading-[25px] lg:leading-[27px] text-[#0000008A] max-w-[90%] sm:max-w-[550px] mx-auto mb-8 sm:mb-12 lg:mb-16">
          Discover the core tools designed to improve your breathing, reduce
          stress, and enhance your daily health routine.
        </p>
        <Image
          src="/taxibookingsteps.png"
          alt="Let's Outsource Taxi Service Steps"
          width={1200}
          height={300}
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 1200px"
        />
      </div>
    </section>
  );
};

export default TaxiServiceSteps;
