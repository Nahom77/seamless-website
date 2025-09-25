import digitalHealth from "@/public/images/digital-health-illustration.png";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Hero content */}
        <div className="flex md:flex-row flex-col gap-3 py-12 md:py-20">
          {/* Section header */}
          <div className="flex-auto pb-12 md:pb-20 text-center">
            <h1
              className="bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text pb-5 font-nacelle font-semibold text-transparent text-4xl md:text-5xl animate-[gradient_6s_linear_infinite]"
              data-aos="fade-up"
            >
              Seamless Digital Experiences with Precision
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-indigo-200/65 text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </p>
              <div className="sm:flex sm:justify-center mx-auto sm:max-w-none max-w-xs">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="group bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-t from-indigo-600 to-indigo-500 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] mb-4 sm:mb-0 w-full sm:w-auto text-white btn"
                    href="#0"
                  >
                    <span className="inline-flex relative items-center">
                      Start Building
                      <span className="ml-1 text-white/50 tracking-normal transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-b from-gray-800 to-gray-800/60 sm:ml-4 before:border before:border-transparent before:rounded-[inherit] w-full sm:w-auto text-gray-300 before:pointer-events-none btn before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-center">
          <Image src={digitalHealth} alt="Digital health Illustration" className="" width={500} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
