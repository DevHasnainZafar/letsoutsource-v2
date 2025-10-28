import Image from "next/image";
import Link from "next/link";
const PerfectPartnerBanner = () => {
  return (
    <div className="relative max-w-[1200px] mx-auto w-full h-[260px] sm:h-[280px] md:h-[300px] overflow-hidden flex items-center justify-center">
      <Image
        src="/CTA.png"
        alt="letsoutsource"
        fill
        className="object-cover object-center sm:object-top"
        priority
      />
      <div className="relative text-center text-white z-10 px-4 sm:px-0 md:px-8">
        <h2 className="font-sora font-bold text-[28px] sm:text-[32px] md:text-[48px] leading-[36px] sm:leading-[42px] md:leading-[56px] tracking-[-0.8px] sm:tracking-[-1px] md:tracking-[-1.28px]">
          Your Perfect Outsourcing
          <br />
          Partner in the Taxi Trade
        </h2>
        <div className="relative inline-block mt-4 sm:mt-6 md:mt-8">
          <Link
            href="/contact"
            className="cursor-pointer border-[1.5px] border-white rounded-[233px] px-4 sm:px-5 py-1.5 sm:py-2 flex items-center justify-center gap-2 mx-auto hover:bg-[#d7d7d7f4] hover:text-black transition-all text-[14px] sm:text-[16px]"
          >
            Request a Quote
            <Image
              src="/tiltedarrowright.png"
              alt="arrow"
              width={20}
              height={20}
              className="object-contain w-[18px] sm:w-[20px] md:w-[25px] h-[18px] sm:h-[20px] md:h-[25px]"
            />
          </Link>
          <Image
            src="/arrowbottom.png"
            alt="arrow pointing to button"
            width={80}
            height={80}
            className="absolute right-[-110px] -top-0.5 -translate-y-1/2 rotate-[-10deg] hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};
export default PerfectPartnerBanner;
