import { Blog, blogs } from "@/lib/constants";
import Image from "next/image";

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const blogId = (await params).id;

  const [blog] = blogs.filter((blog: Blog) => blog.id === Number(blogId));

  return (
    <section>
      <div className="max-w-6xl h-[100vh] mx-auto mt-30.5 px-4 sm:px-6 flex justify-center">
        <div className="w-full h-[50vh] flex items-center">
          <Image
            src={blog.imageUrl}
            alt={blog.alternateText}
            width={400}
            height={400}
            className="w-full"
          />
        </div>
        <h1 className="text-primary text-lg">{blogId}</h1>
      </div>
    </section>
  );
};

export default BlogDetail;
