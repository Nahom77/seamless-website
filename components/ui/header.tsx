"use client";

import Link from "next/link";
import Logo from "./logo";
import { MobileNavbar } from "../mobile-navbar";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useUserStore } from "@/stores/user.store";

export default function Header() {
  const [loading, setLoading] = useState(false);
  const path = usePathname();

  const isItInBlogSection = path.startsWith("/blog");

  // Zustand
  const { setUser, clearUser, user } = useUserStore();

  const { data: session } = authClient.useSession();

  // Sync session user with Zustand
  useEffect(() => {
    if (session?.user) {
      setUser(session.user);
    } else {
      clearUser();
    }
  }, [session, setUser, clearUser]);

  // Signing out
  async function handleSignout() {
    setLoading(true);

    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Something went wrong.");
    } else {
      toast.success("Signed out successfully");
      clearUser();
    }

    setLoading(false);
  }

  return (
    <header className="w-full top-0 z-30 sticky">
      <div className="w-full mx-auto after:-z-10 before:absolute after:absolute relative before:inset-0 after:inset-0 bg-gray-900/90 after:backdrop-blur-xs before:border before:border-transparent before:rounded-[inherit] before:pointer-events-none before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
        <div className="max-w-7xl h-[10vh] mx-auto px-3 py-12 flex justify-between items-center gap-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* If it is in blog details page to not display navbars*/}
          {isItInBlogSection || (
            <div>
              {/* Mobile Navbar */}
              <MobileNavbar
                user={user}
                handleSignout={handleSignout}
                loading={loading}
              />
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
                    href="/blogs"
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
                {user ? (
                  <>
                    <li>
                      <Link
                        href="/create-blog"
                        className="py-[15px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] disabled:opacity-50 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:shadow-lg text-primary-foreground cursor-pointer hero-gradient btn"
                      >
                        Create Blog
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleSignout}
                        disabled={loading}
                        className="py-[15px] before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] disabled:opacity-50 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:shadow-lg text-primary-foreground cursor-pointer hero-gradient btn"
                      >
                        Signout
                      </button>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
