import Image from "next/image";
import digitalHealth from "@/public/images/health-app_11878817.png";
import healthConsultancy from "@/public/images/telehealth_17323092.png";
import dataAnalytics from "@/public/images/statistic_7581618.png";
import Spotlight from "@/components/spotlight";

export default function Services() {
  return (
    <section id="services" className="">
      <div className="mx-auto mt-15 px-4 sm:px-6 max-w-6xl">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto pb-12 md:pb-20 max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 before:bg-linear-to-r after:bg-linear-to-l before:from-transparent after:from-transparent before:to-indigo-200/50 after:to-indigo-200/50 pb-3 before:w-8 after:w-8 before:h-px after:h-px">
              <span className="inline-flex bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                Workflows
              </span>
            </div>
            <h2 className="bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text pb-4 font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Our Services
            </h2>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group items-start gap-6 grid md:grid-cols-2 lg:grid-cols-3 mx-auto lg:max-w-none max-w-3xl">
            {/* Card 1 */}
            <div className="group/card before:-top-40 after:-top-48 before:-left-40 after:-left-48 before:z-10 after:z-30 before:absolute after:absolute relative bg-gray-800 before:bg-indigo-500/80 after:bg-indigo-500 before:opacity-0 after:opacity-0 hover:after:opacity-20 group-hover:before:opacity-100 before:blur-3xl after:blur-3xl p-px rounded-2xl before:rounded-full after:rounded-full before:w-80 after:w-64 h-full before:h-80 after:h-64 overflow-hidden before:transition-opacity after:transition-opacity before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] before:duration-500 after:duration-500 before:pointer-events-none after:pointer-events-none">
              <div className="z-20 after:absolute relative after:inset-0 bg-gray-950 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 rounded-[inherit] h-full overflow-hidden">
                {/* Image */}
                <div className="flex justify-center items-center px-5 pt-2 w-full h-[100px]">
                  <Image
                    className="inline-flex"
                    src={digitalHealth}
                    width={80}
                    height={80}
                    alt="Digital Health Image"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="before:absolute relative before:inset-0 bg-gray-800/40 hover:bg-gray-800/60 px-2.5 py-0.5 before:border before:border-transparent rounded-full before:rounded-[inherit] font-normal text-lg before:pointer-events-none btn-sm before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                        Digital Health Solutions
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Our team of cofounders brings deep expertise in the design,
                    development, and implementation of nationally implemented
                    digital health products - including Electronic Medical
                    Records, Laboratory Information System, Inventory System,
                    Health Quality Management System, and electronic referral
                    systems. We create innovative, user-centered solutions that
                    empower healthcare providers and improve patient outcomes by
                    seamlessly integrating technology with clinical workflows.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group/card before:-top-40 after:-top-48 before:-left-40 after:-left-48 before:z-10 after:z-30 before:absolute after:absolute relative bg-gray-800 before:bg-indigo-500/80 after:bg-indigo-500 before:opacity-0 after:opacity-0 hover:after:opacity-20 group-hover:before:opacity-100 before:blur-3xl after:blur-3xl p-px rounded-2xl before:rounded-full after:rounded-full before:w-80 after:w-64 h-full before:h-80 after:h-64 overflow-hidden before:transition-opacity after:transition-opacity before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] before:duration-500 after:duration-500 before:pointer-events-none after:pointer-events-none">
              <div className="z-20 after:absolute relative after:inset-0 bg-gray-950 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 rounded-[inherit] h-full overflow-hidden">
                {/* Image */}
                <div className="flex justify-center items-center px-5 pt-2 w-full h-[100px]">
                  <Image
                    className="inline-flex"
                    src={healthConsultancy}
                    width={80}
                    height={80}
                    alt="tele-health image"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="before:absolute relative before:inset-0 bg-gray-800/40 hover:bg-gray-800/60 px-2.5 py-0.5 before:border before:border-transparent rounded-full before:rounded-[inherit] font-normal text-lg before:pointer-events-none btn-sm before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                        Digital Health Consultancy
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    Our digital health consultancy services guide healthcare
                    organizations through the effective selection,
                    implementation, and optimization of technology solutions. We
                    provide strategic advice, technology evaluations, and
                    practical support to ensure digital health initiatives align
                    with clinical goals and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group/card before:-top-40 after:-top-48 before:-left-40 after:-left-48 before:z-10 after:z-30 before:absolute after:absolute relative bg-gray-800 before:bg-indigo-500/80 after:bg-indigo-500 before:opacity-0 after:opacity-0 hover:after:opacity-20 group-hover:before:opacity-100 before:blur-3xl after:blur-3xl p-px rounded-2xl before:rounded-full after:rounded-full before:w-80 after:w-64 h-full before:h-80 after:h-64 overflow-hidden before:transition-opacity after:transition-opacity before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] before:duration-500 after:duration-500 before:pointer-events-none after:pointer-events-none">
              <div className="z-20 after:absolute relative after:inset-0 bg-gray-950 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50 rounded-[inherit] h-full overflow-hidden">
                {/* Image */}
                <div className="flex justify-center items-center px-5 pt-2 w-full h-[100px]">
                  <Image
                    className="inline-flex"
                    src={dataAnalytics}
                    width={80}
                    height={80}
                    alt="Analytics image"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="before:absolute relative before:inset-0 bg-gray-800/40 hover:bg-gray-800/60 px-2.5 py-0.5 before:border before:border-transparent rounded-full before:rounded-[inherit] font-normal text-lg before:pointer-events-none btn-sm before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                      <span className="bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                        Data Analytics
                      </span>
                    </span>
                  </div>
                  <p className="text-indigo-200/65">
                    We provide comprehensive analytics services that convert raw
                    data into actionable insights and informed predictions.
                    Utilizing established analytical tools and methodologies, we
                    support informed decision-making, enhance performance, and
                    promote evidence-based improvements.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
