"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createBlog(title: string, content: string) {
  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
      },
    });

    revalidatePath("/");
    return { success: true, blog };
  } catch (error) {
    console.error("Failed to create Blog", error);
  }
}
