import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="overflow-hidden relative">
      <div
        className="-mb-24 ml-20 bottom-0 left-1/2 -z-10 absolute -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto px-4 sm:px-6 max-w6xl">
        <div className="py-12 md:py-20 bg-linear-to-r from-transparent via-gray-800/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="pb-2 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]"
              data-aos="fade-up"
            >
              Still have questions?
            </h2>
            <p className="pb-2 text-indigo-200/65 text-sm">
              Our team is ready to assist you. Reach out anytime!
            </p>
            <div className="sm:max-w-none max-w-xs mx-auto sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="w-full sm:w-auto mb-4 sm:mb-0 group bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-linear-to-t from-[#1b2d45] to-[#2e4056] shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] text-white btn"
                  href="#contact-us"
                >
                  <span className="items-center inline-flex relative">
                    Contact support
                    <span className="ml-1 text-white/50 tracking-normal transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
