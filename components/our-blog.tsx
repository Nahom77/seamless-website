import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Link from "next/link";
import { getAllBlogs } from "@/actions/blog.action";
import { formatDate } from "@/lib/utils";
// import { blogs } from "@/lib/constants";

export default async function OurBlogs() {
  const blogs = await getAllBlogs();

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
            <h2 className="pb-4 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Our Blogs
            </h2>
          </div>

          {/* Blogs */}
          <div className="mx-auto container">
            {/* Blogs Grid */}
            <div className="flex flex-col gap-8 md:">
              {/* grid md:grid-cols-2 lg:grid-cols-3"> */}
              {blogs?.map((blog, index) => {
                return (
                  <Link
                    href={`/blog/${blog.id}`}
                    key={blog.id}
                    className="p-6 group bg-slate-800/30 hover:shadow-[var(--shadow-medium),var(--shadow-glow)] border border-[#1e2127] hover:border-primary/50 rounded-xl transition-all hover:-translate-y-0.5 animate-fade-in duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="space-y-4">
                      <div className="flex md:flex-row flex-col gap-5">
                        {/* imageUrl */}
                        <div className="relative">
                          <div className="w-full md:w-100 flex justify-center items-center bg-[#3c83f5]/10 group-hover:scale-101 transition-transform">
                            <Image
                              src={blog.imageUrl}
                              alt={blog.title}
                              height={100}
                              width={200}
                              className="w-full object-cover border border-[#3c83f5]/20 rounded-xl"
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <h3 className="font-semibold text-foreground group-hover:text-primary text-xl transition-colors">
                              {blog.title}
                            </h3>
                            <h2 className="font-regular text-foreground text-md group-hover:text-primary transition-colors">
                              {formatDate(blog.createdAt)}
                            </h2>
                          </div>
                          <p className="text-[#a8b8b8] text-md lg:text-lg text-justify leading-relaxed">
                            {blog.content.slice(0, 400) + "..."}
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
                  </Link>
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
