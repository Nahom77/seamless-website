"use client";

import { deleteBlog } from "@/actions/blog.action";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function DeleteButton({ blogId }: { blogId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDeleteBlog() {
    setLoading(true);
    try {
      const result = await deleteBlog(blogId);
      toast.success("Blog deleted successfully");
    } catch (error) {
      console.log("Something went wrong");
      toast.error("Cant delete a blog");
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      disabled={loading}
      onClick={handleDeleteBlog}
      className="cursor-pointer"
    >
      <Trash2 className="size-5 text-red-500" />
    </button>
  );
}

export default DeleteButton;
