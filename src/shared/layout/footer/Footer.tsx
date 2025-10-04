import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white pt-40">
      <div className="max-w-[1200px] mx-auto flex justify-between">
        <div>
          <Image
            src="/letsoutsourcelogo.png"
            alt="letsoutsource"
            height={100}
            width={100}
            className="mb-4"
          />
          <p className="text-[16px] text-[#FFFFFFB2]  leading-relaxed max-w-xs">
            LetsOutSource gives distributors direct access to global inventory,
            full guest data, and automated commissions—no middlemen.
          </p>
        </div>
        <div className="flex gap-30">
          <div>
            <h3 className=" text-[20px] text-white  mb-4">Company</h3>
            <ul className="space-y-4 text-[16px] text-white hover:text-[#ffffffdf] transition">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact us</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/career">Career</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" text-[20px] text-white  mb-4">Contact</h3>
            <ul className="space-y-4 text-sm  text-[16px] text-white hover:text-[#ffffffdf] transition">
              <li>
                D739 Arbab Street, Block D, <br /> 5th Road Commercial market
                Rawalpindi
              </li>
              <li>01623 396 943</li>
              <li>jsher@letsoutsource.co.uk</li>
            </ul>
          </div>
          <div>
            <h3 className=" text-[20px] text-white  mb-4">Social</h3>
            <ul className="space-y-4 hover:text-[#ffffffdf] transition  text-[16px] text-white">
              <li>
                <Link
                  href="https://www.facebook.com/letsoutsourceSMC"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/letsoutsource/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/let-s-outsource-smc-pvt-ltd/">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-25 border-t border-[#FFFFFF66] py-4 text-sm  flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto text-[14px]">
        <p>©2019 Letsoutsource. All rights reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0 hover:text-[#ffffffdf]">
          <Link href="/privacypolicy">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms&conditions">Terms & Conditions</Link>
          <span>|</span>
          <Link
            target="_blank"
            href="https://www.google.com/maps/place/Let's+Outsource+(SMC-PVT)+Ltd/@33.6403076,73.0665767,17z"
          >
            Map
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
