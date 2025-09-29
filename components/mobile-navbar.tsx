import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileNavbar() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ul className="pt-7 flex flex-col justify-end items-center gap-5">
            <li>
              <SheetClose asChild>
                <Link
                  href="#services"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Services
                </Link>
              </SheetClose>
            </li>
            <li>
              <SheetClose asChild>
                <Link
                  href="#blog"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Blog
                </Link>
              </SheetClose>
            </li>
            {/* <li>
              <SheetClose asChild>
                <Link
                  href="#about-us"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  About Us
                </Link>
              </SheetClose>
            </li> */}
            <li>
              <SheetClose asChild>
                <Link
                  href="#contact-us"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Contact Us
                </Link>
              </SheetClose>
            </li>

            {/* <li>
              <SheetClose asChild>
                <Link
                  href="/signin"
                  className="py-[5px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-b from-gray-800 to-gray-800/60 before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn-sm before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                >
                  Sign In
                </Link>
              </SheetClose>
            </li> */}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
