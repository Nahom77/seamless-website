import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Footer illustration */}
        <div
          className="bottom-0 left-1/2 -z-10 absolute -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="py-8 md:py-12 justify-between gap-12 xl:gap-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[repeat(3,minmax(0,140px))_1fr] sm:grid-rows-[auto_auto] md:grid-rows-[auto_auto] lg:grid-rows-1">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-200 text-lg">Services</h3>
            <ul className="space-y-2 lg:text-md text-sm">
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#services"
                >
                  Digital Health Solutions
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#services"
                >
                  Digital Health Consultancy
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#services"
                >
                  Data Analytics
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#services"
                >
                  Digital Health blog
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-200 text-lg">Quick Links</h3>
            <ul className="space-y-2 lg:text-md text-sm">
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#about-us"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#contact-us"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                  href="#services"
                >
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="flex flex-col justify-center justify-self-center items-center col-span-2 md:col-span-2 lg:col-span-2 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © {new Date().getFullYear()} Seamless Ethiopia. All rigths
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
