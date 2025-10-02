import { getAllBlogs } from "@/actions/blog.action";
import BlogsList from "./blog-list";

export interface Blog {
  createdAt: Date;
  id: string;
  title: string;
  content: string;
  imageUrl: string[];
}

export default async function OurBlogsPage() {
  const blogs = await getAllBlogs();
  return <BlogsList blogs={blogs} />;
}
