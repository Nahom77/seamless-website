"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageIcon } from "lucide-react";
import { createBlog } from "@/actions/blog.action";
import ImageUpload from "@/components/image-upload";

export default function SignIn() {
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!content.trim() && !title.trim()) return;

    setUploading(true);
    try {
      const result = await createBlog(title, content, imageUrl);

      if (result?.success) {
        setContent("");
        setTitle("");
        toast.success("Blog created successfully.");
        router.push("/");
      }
    } catch (error) {
      toast.error("Failed to create Blog");
    } finally {
      setUploading(false);
    }
  }

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="bg-[length:200%_auto] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-clip-text font-nacelle font-semibold text-transparent text-3xl md:text-4xl animate-[gradient_6s_linear_infinite]">
              Create a Blog
            </h1>
          </div>

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto">
            <div className="mb-4 space-y-5">
              <label
                className="mb-1 block font-medium text-indigo-200/65 text-sm"
                htmlFor="image"
              >
                Image
              </label>
              <button
                className="w-full flex justify-center items-center gap-4 text-muted-foreground hover:text-primary text-lg cursor-pointer form-input"
                onClick={() => setShowImageUpload(!showImageUpload)}
                disabled={uploading}
              >
                <ImageIcon className="size-8 mr-2" />
                Upload Image
              </button>
            </div>

            {(showImageUpload || imageUrl) && (
              <div className="p-4 border rounded-lg">
                <ImageUpload
                  endpoint="postImage"
                  value={imageUrl}
                  onChange={(url) => {
                    setImageUrl(url);
                    if (!url) setShowImageUpload(false);
                  }}
                />
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label
                  className="mb-1 block font-medium text-indigo-200/65 text-sm"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  id="title"
                  className="w-full form-input"
                  placeholder="Blog title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="mb-1 block font-medium text-indigo-200/65 text-sm"
                  htmlFor="content"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="w-full h-[300px] form-input"
                  placeholder="Blog content"
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-6 space-y-5">
              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-[bottom] bg-[length:100%_100%] hover:bg-[length:100%_150%] disabled:opacity-50 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:shadow-lg text-primary-foreground cursor-pointer hero-gradient btn"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
