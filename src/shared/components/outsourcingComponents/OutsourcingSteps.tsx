import Image from "next/image";
const TaxiServiceSteps = () => {
  return (
    <section className="w-full py-10 sm:py-12 bg-[#F2F2F2] px-4">
      <div className="max-w-[1200px] mx-auto">
        <p
          className="font-poppins font-medium text-[16px] leading-[24px] text-center text-[#000000B8] mb-2"
          aria-hidden
        >
          HOW WE OPERATE
        </p>
        <h2 className="font-sora font-semibold text-[32px] sm:text-[44px] leading-[120%] text-center text-[#000000] mb-3">
          How Working <br className="hidden sm:block" /> with Us Feels
        </h2>
        <p className="text-center text-[16px] sm:text-[18px] leading-[27px] text-[#0000008A] max-w-[550px] mx-auto mb-12 sm:mb-16">
          We learn how you run things, plug directly into your existing systems,
          and start taking the load off — answering calls, logging jobs, and
          coordinating dispatch.
        </p>
        <Image
          src="/outsourcingsteps.avif"
          alt="Let's Outsource Taxi Service Steps"
          width={1200}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default TaxiServiceSteps;
