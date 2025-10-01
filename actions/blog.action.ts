"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBlog(
  title: string,
  content: string,
  imageUrl: string
) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        imageUrl,
      },
    });

    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Failed to create Blog", error);
  }
}

export async function getAllBlogs() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return blogs;
  } catch (error) {
    console.log("Error in getting Blogs", error);
  }
}

export async function getBlog(id: string) {
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
    });

    return blog;
  } catch (error) {
    console.log("Error in fetching a blog", error);
  }
}
