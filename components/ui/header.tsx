"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="z-30 mt-2 md:mt-5 w-full">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="after:-z-10 before:absolute after:absolute relative before:inset-0 after:inset-0 flex justify-between items-center gap-3 bg-gray-900/90 after:backdrop-blur-xs px-3 before:border before:border-transparent rounded-2xl before:rounded-[inherit] h-14 before:pointer-events-none before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 justify-end items-center gap-5">
            <li>
              <Link
                href="#services"
                className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] py-[5px] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] py-[5px] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
             Blog
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] py-[5px] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
               About Us
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] py-[5px] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-b from-gray-800 to-gray-800/60 py-[5px] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
              >
                Sign In
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </header>
  );
}
