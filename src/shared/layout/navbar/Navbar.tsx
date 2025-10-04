"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Service", path: "/service", hasDropdown: true },
    { name: "Home", path: "/" },
  ];

  return (
    <nav className="bg-green-400 items-center flex md:justify-between border-b-[1.5px] border-[#FFFFFF52 border-red-400 py-4 md:max-w-[1200px] max-w-[95%] mx-auto">
      <Image
        src="/whitelogo.png"
        alt="letsoutsource"
        height={100}
        width={100}
      />
      <div className="flex gap-9">
        {navLinks.map((link) =>
          link.hasDropdown ? (
            <div
              key={link.name}
              className="flex gap-[14px] items-center cursor-pointer"
            >
              <Link
                href={link.path}
                className={`font-sora font-normal text-lg text-white pb-3 translate-y-[16px] border-b-4 ${
                  pathname === link.path ? "border-white" : "border-transparent"
                }`}
              >
                {link.name}
              </Link>
              <Image
                src="/arrowdown.png"
                alt="dropdown"
                height={10}
                width={10}
                className="w-[12px] h-[12px] mt-4"
              />
            </div>
          ) : (
            <Link
              key={link.name}
              href={link.path}
              className={`font-sora font-normal text-lg text-white pb-3 translate-y-[16px] border-b-4 ${
                pathname === link.path ? "border-white" : "border-transparent"
              }`}
            >
              {link.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
