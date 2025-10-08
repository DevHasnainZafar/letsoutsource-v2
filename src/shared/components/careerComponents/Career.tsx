import Image from "next/image";
const Career = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between py-30">
      <div className="flex flex-col space-y-2 max-w-[550px] ">
        <p className="text-[#000000B8] font-medium text-[16px] leading-[24px] uppercase">
          Email Support Services
        </p>
        <h2 className="text-black font-sora font-semibold text-[44px] leading-[110%]">
          We’re always searching <br /> for amazing people <br /> to join our
          team
        </h2>
        <p className="text-[#0000008A] font-normal text-[18px] leading-[27px]">
          At our company, we believe that amazing people make all the
          difference. That’s why we’re continuously searching for exceptional
          individuals to join our team. If you’re driven, talented, and eager to
          contribute to meaningful work, seize this opportunity.
        </p>
      </div>
      <div className="mt-20 flex justify-center">
        <Image
          src="/hero2.png"
          alt="Career illustration"
          width={550}
          height={200}
          className="object-cover md:translate-y-[36px] shadow-3xl rounded-md"
          priority
        />
      </div>
    </div>
  );
};

export default Career;
