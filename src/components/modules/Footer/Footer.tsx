"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/", label: "Home", id: 1 },
  { href: "groups", label: "Groups", id: 4 },
  { href: "billing", label: "Billing", id: 2 },

  { href: "my-events", label: "My Events ", id: 5 },
];
const socials = [
  { sm: "/icons/facebookIcon.png", url: "Services" },
  { sm: "/icons/ig.png", url: "About Us" },
  { sm: "/icons/XIcon.png", url: "Servicesc" },
  { sm: "/icons/tikTok.png", url: "Home" },
];
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  const pathname = usePathname();

  return (
    <>
      <footer
        id="footer"
        className={`md:px-20   z-0  shadow-xl  bg-black text-white`}
      >
        <div className="flex flex-col  px-4 py-10">
          <div className="py-5  flex  flex-col gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between justify-center lg:border-b border-gray-200">
            <div className="flex justify-center lg:justify-start">
              <Image
                className="w-20 h-auto "
                src={"/images/logo.png"}
                width={500}
                height={50}
                alt="Douglas Meet logo"
              />
            </div>

            <ul className="text-lmsWhite cursor-pointer flex justify-center items-center">
              {links.map((link) => (
                <li
                  key={link.id}
                  className="lg:text-base lg:mr-6 font-semibold"
                >
                  <Link
                    href={link.href}
                    className="block text-sm w- px-2   duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-around  items-center  px-0 l py-2 gap-x-4">
              {socials.map((social) => (
                <span
                  key={social.url}
                  className="bg-white rounded-full  p-2 text-lg flex justify-center items-center "
                >
                  <Link href={social.url} className="text-wgite">
                    <Image
                      src={social.sm}
                      alt=""
                      width={500}
                      height={200}
                      className="block h-5 w-5 object-cover rounded-[10px] "
                    />
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <div className="flex  lg:flex-row py-5 justify-center items-center ">
            <h1 className="text-lmsWhite text-lg  text-center">
              © {year} All rights reserved. douglasmeet.com
            </h1>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
