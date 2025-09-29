import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import panalists from "@/public/images/panalists.jpg";

import {
  Zap,
  Shield,
  Users,
  BarChart3,
  Clock,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    imageUrl: "/images/panalists.jpg",
    alternateText: "panalists",
    title: "Digital Payment",
    description:
      "Sept 04 marked an important milestone for digital payments in Ethiopia's healthcare sector. For years, achieving a truly paperless system has been a challenge. Cashiers carried the extra load of handling both manual receipts and digital systems, while health facilities struggled with financial reporting and claim audits. During the National Orientation on Digital Government Payments hosted by the Ministry of Finance with the support of the Ministry of Health, the National Bank, and Better Than Cash Alliance, we witnessed a turning point. The newly issued directive requiring digital payments across public institutions is a big step forward. It brings us closer to building a healthcare system that is more accessible, traceable, accountable, and efficient.",
    color: "text-primary",
  },
  // {
  //   imageUrl: Shield,
  //   alternateText:"panalists",
  //   title: "Enterprise-Grade Security",
  //   description:
  //     "Your data is protected with bank-level encryption, advanced access controls, and compliance standards.",
  //   color: "text-accent",
  // },
  // {
  //   imageUrl: Users,
  //   alternateText:"panalists",
  //   title: "Seamless Team Collaboration",
  //   description:
  //     "Invite unlimited team members, assign roles, and collaborate in real-time with integrated communication tools.",
  //   color: "text-accent",
  // },
  // {
  //   imageUrl: BarChart3,
  //   alternateText:"panalists",
  //   title: "Advanced Analytics",
  //   description:
  //     "Track project progress, team performance, and gain insights with detailed analytics and reporting.",
  //   color: "text-primary",
  // },
  // {
  //   imageUrl: Clock,
  //   alternateText:"panalists",
  //   title: "Smart Time Tracking",
  //   description:
  //     "Automatic time tracking, deadline management, and project timeline optimization for maximum productivity.",
  //   color: "text-accent",
  // },
  // {
  //   imageUrl: MessageSquare,
  //   alternateText:"panalists",
  //   title: "Integrated Communication",
  //   description:
  //     "Built-in chat, video calls, and comment system to keep all project communication in one place.",
  //   color: "text-accent",
  // },
];

export default function OurBlogs() {
  return (
    <section className="relative" id="blog">
      <div
        className="-mt-20 top-0 left-1/2 -z-10 absolute -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="-mb-80 bottom-0 left-1/2 -z-10 absolute opacity-50 -translate-x-[120%] pointer-events-none"
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1]">
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-4 md:pb-12 text-center">
            <div className="before:w-8 after:w-8 before:h-px after:h-px pb-3 items-center gap-3 inline-flex before:bg-linear-to-r after:bg-linear-to-l before:from-transparent after:from-transparent before:to-indigo-200/50 after:to-indigo-200/50">
              <span className="inline-flex bg-clip-text bg-linear-to-r from-indigo-500 to-indigo-200 text-transparent">
                Read about us
              </span>
            </div>
            <h2 className="pb-4 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Our Blogs
            </h2>
          </div>

          {/* Blogs */}
          <div className="mx-auto container">
            {/* Blogs Grid */}
            <div className="flex flex-col gap-8 md:">
              {/* grid md:grid-cols-2 lg:grid-cols-3"> */}
              {features.map((feature, index) => {
                return (
                  <div
                    key={feature.title}
                    className="group animate-fade-in feature-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex md:flex-row flex-col gap-5">
                        {/* imageUrl */}
                        <div className="relative">
                          <div className="w-100 flex justify-center items-center bg-[#3c83f5]/10 group-hover:scale-101 transition-transform">
                            <Image
                              src={feature.imageUrl}
                              alt={feature.alternateText}
                              height={100}
                              width={200}
                              className="w-full object-cover border border-[#3c83f5]/20 rounded-xl"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <h3 className="font-semibold text-foreground group-hover:text-primary text-xl transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-[#a8b8b8] text-lg leading-relaxed">
                            {feature.description.slice(0, 400) + "..."}
                          </p>

                          {/* Learn More Link */}
                          <div className="pt-2">
                            <button className="font-medium text-[#1d4ed8] hover:text-[#9ca2fb] text-sm animated-underline transition-transform group-hover:translate-x-0.5 cursor-pointer">
                              Read more →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            {/* <div className="mt-16 text-center">
              <div className="max-w-2xl mx-auto p-8 bg-surface border border-card-border rounded-2xl">
                <h3 className="mb-4 font-bold text-2xl">
                  Ready to experience the difference?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Join thousands of teams who've revolutionized their workflow
                  with Mondilla Connect.
                </p>
                <button className="px-8 py-3 hover:shadow-lg rounded-lg font-semibold text-primary-foreground hover:scale-105 transition-all hero-gradient">
                  Start Your Free Trial
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
