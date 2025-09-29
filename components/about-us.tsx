import React from "react";

const AboutUs = () => {
  const features = [
    {
      icon: "🌟",
      title: "Our Vision",
      description:
        "Empowering healthier lives worldwide through accessible, innovative, and trusted digital healthcare solutions.",
    },
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "Deliver patient-centered digital health services that improve access, efficiency, and outcomes through technology.",
    },
    {
      icon: "💡",
      title: "Our Values",
      description:
        "Integrity, innovation, empathy, inclusivity, and security guide every decision to improve patient well-being.",
    },
    {
      icon: "⚙️",
      title: "Technology and Approach",
      description:
        "We leverage AI, telemedicine, and secure platforms to provide reliable, scalable, and personalized healthcare access.",
    },
  ];

  return (
    <section
      id="about-us"
      className={`relative w-full  px-4 md:px-8 transition-colors duration-500 bg-transparent`}
    >
      <div
        aria-hidden="true"
        className="w-64 h-64 -top-12 -right-12 absolute opacity-40 blur-3xl rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99, 102, 241, 0.35), rgba(99, 102, 241, 0.10), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto mt-15 py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
        <div className="gap-10 md:gap-8 grid grid-cols-1 md:grid-cols-3">
          {/* Left column */}
          <div className="">
            <h2 className="pb-4 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              About Seamless Ethiopia
            </h2>
            <div className="text-indigo-200/65 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              suscipit quasi amet provident odit, eos at sed corrupti rem iusto
              odio adipisci et dignissimos officiis numquam earum ex
              repudiandae? Rem!
            </div>
          </div>

          {/* Right column */}
          <div className="gap-8 grid grid-cols-1 md:grid-cols-2 col-span-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative flex items-start space-x-4 p-5 rounded-xl border
                            transition-all duration-300 ease-out hover:translate-y-[-2px]
                            bg-slate-800/60 border-slate-700
                                
                            shadow-sm hover:shadow-lg`}
              >
                <>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(99,102,241,0.08), transparent 40%)",
                    }}
                  />
                </>

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-xl shrink-0 z-[1] transition-transform duration-300 hover:scale-105
                              bg-slate-700/70 text-gray-100
                                  `}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                <div className="z-[1]">
                  <h3
                    className={`text-lg sm:text-xl font-semibold mb-1.5 text-gray-100" : "text-gray-900"
                    `}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`text-gray-300" : "text-gray-700"
                    `}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
