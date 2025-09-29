import { ArrowRight } from "lucide-react";

export default function HeroHome() {
  return (
    <section>
      <div className="max-w-6xl h-[90vh] mx-auto px-4 sm:px-6 flex justify-center items-center">
        {/* Hero content */}
        <div className="py-12 md:py-20 flex md:flex-row flex-col gap-3">
          {/* Section header */}
          <div className="pb-12 md:pb-20 flex-auto text-center">
            <h1
              className="pb-5 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-4xl md:text-5xl animate-[gradient_6s_linear_infinite]"
              data-aos="fade-up"
            >
              Seamless Experience
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="mb-8 text-indigo-200/65 text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Co-building reliable, scalable health systems and digital health
                payments.
              </p>
              <div className="sm:max-w-none max-w-xs mx-auto sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="w-full sm:w-auto mb-4 sm:mb-0 group bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-t from-[#1b2d45] to-[#2e4056] shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] text-white btn"
                    href="#contact-us"
                  >
                    <span className="items-center inline-flex relative">
                      Get in touch
                      <span className="ml-1 text-white/50 tracking-normal transition-transform group-hover:translate-x-0.5">
                        {<ArrowRight className="size-4" />}
                      </span>
                    </span>
                  </a>
                </div>
                {/* <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="w-full sm:w-auto sm:ml-4 before:absolute relative before:inset-0 bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-b from-gray-800 to-gray-800/60 before:border before:border-transparent before:rounded-[inherit] text-gray-300 before:pointer-events-none btn before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    href="#0"
                  >
                    Schedule Demo
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Illustration
          <div className="md:flex justify-center items-center hidden">
            <Image
              src={digitalHealth}
              alt="Digital health Illustration"
              className=""
              width={800}
              height={1600}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
