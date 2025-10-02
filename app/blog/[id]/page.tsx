import { getBlog } from "@/actions/blog.action";
import { Blog, blogs } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const blogId = (await params).id;

  const blog = await getBlog(blogId);

  return (
    <section>
      {blog && blog.imageUrl && (
        <div className="flex justify-center items-center">
          <Image
            width={1400}
            height={720}
            className="lg:max-w-[1000px] object-center object-cover aspect-video mb-5 bg-no-repeat"
            src={`${blog.imageUrl[0]}`}
            alt={blog.title}
          />
        </div>
      )}
      <main className="mx-auto flex flex-col justify-center">
        <div className="w-full mx-auto px-4 flex md:flex-row flex-col justify-center items-start">
          <div className="mt-4 md:pr-20 pb-4 md:pb-0 flex justify-start md:justify-center">
            <Link
              href="/blogs"
              className="p-2 bg-white dark:bg-zinc-950 shadow-md border border-zinc-100 dark:border-zinc-800 rounded-full text-zinc-700 dark:text-zinc-300"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-3/4 max-w-3xl mr-20 flex flex-col justify-start">
            <h2>
              {!blog && <div className="text-center">Blog Not found</div>}
              {blog && (
                <div className="mt-3 pb-1 bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
                  {blog.title}
                </div>
              )}
            </h2>
            {blog && (
              <>
                <hr className="w-full pb-8 border-zinc-300 dark:border-zinc-700 border-t" />
                <div className="mb-15 text-[#a8b8b8] text-md lg:text-lg text-justify leading-relaxed">
                  {blog.content}
                </div>
              </>
            )}
            <div className="w-full mx-auto mt-8 mb-6">
              <hr className="w-full pb-8 border-zinc-300 dark:border-zinc-700 border-t" />
              {blog?.imageUrl && blog?.imageUrl?.length > 1 && (
                <div className="w-full flex flex-col">
                  <h3 className="pb-3 font-semibold text-zinc-400 dark:text-zinc-200 text-xl">
                    {/* Images */}
                  </h3>
                  <div className="flex md:flex-row flex-col space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                    {blog?.imageUrl.slice(1, 3).map((image, index) => (
                      <div
                        key={index}
                        className="w-full md:w-100 overflow-hidden flex justify-center items-center bg-[#3c83f5]/10 border border-[#3c83f5]/20 rounded-xl group-hover:scale-101 transition-transform"
                      >
                        <Image
                          width={1400}
                          height={720}
                          className="w-full object-center object-cover aspect-video bg-no-repeat"
                          src={`${image}`}
                          alt={blog.title}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BlogDetail;
