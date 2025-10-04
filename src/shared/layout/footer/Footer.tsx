import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white pt-20 md:pt-40">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 px-2">
        <div className="md:max-w-xs">
          <Image
            src="/letsoutsourcelogo.png"
            alt="letsoutsource"
            height={100}
            width={100}
            className="mb-4"
          />
          <p className="text-[16px] text-[#FFFFFFB2] leading-relaxed">
            LetsOutSource gives distributors direct access to global inventory,
            full guest data, and automated commissions—no middlemen.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-10 md:gap-28">
          <div>
            <h3 className="text-[20px] mb-4">Company</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link href="/" className="hover:text-[#FFFFFFB2] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] mb-4">Contact</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                D739 Arbab Street, Block D, <br /> 5th Road Commercial Market,
                Rawalpindi
              </li>
              <li>01623 396 943</li>
              <li>jsher@letsoutsource.co.uk</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] mb-4">Social</h3>
            <ul className="space-y-3 text-[16px] text-white">
              <li>
                <Link
                  href="https://www.facebook.com/letsoutsourceSMC"
                  target="_blank"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/letsoutsource/"
                  target="_blank"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/let-s-outsource-smc-pvt-ltd/"
                  target="_blank"
                  className="hover:text-[#FFFFFFB2] transition"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-[#FFFFFF66] py-4 text-[14px] flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto px-2 text-[#FFFFFFB2]">
        <p>©2019 Letsoutsource. All rights reserved</p>
        <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mt-2 md:mt-0">
          <Link href="/privacypolicy" className="hover:text-white">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms&conditions" className="hover:text-white">
            Terms & Conditions
          </Link>
          <span>|</span>
          <a
            href="https://maps.app.goo.gl/fmeLZakFk9hHzx529"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Map
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
