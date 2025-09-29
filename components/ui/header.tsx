"use client";

import Link from "next/link";
import Logo from "./logo";
import { MobileNavbar } from "../mobile-navbar";

export default function Header() {
  // const blogId = (await params)?.id;

  return (
    <header className="w-full top-0 z-30 sticky">
      <div className="w-full mx-auto after:-z-10 before:absolute after:absolute relative before:inset-0 after:inset-0 bg-gray-900/90 after:backdrop-blur-xs before:border before:border-transparent before:rounded-[inherit] before:pointer-events-none before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <div className="max-w-7xl h-[10vh] mx-auto px-3 py-12 flex justify-between items-center gap-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          {/* {blogId && ( */}
          <div>
            {/* Mobile Navbar */}
            <MobileNavbar />
            {/* Desktop sign in links */}
            <ul className="md:flex flex-1 justify-end items-center gap-5 hidden">
              <li>
                <Link
                  href="#services"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#about-us"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  About Us
                </Link>
              </li> */}
              <li>
                <Link
                  href="#contact-us"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/signin"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-b from-gray-800 to-gray-800/60 before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Sign In
                </Link>
              </li> */}
            </ul>
          </div>
          {/* )} */}
        </div>
      </div>
    </header>
  );
}
