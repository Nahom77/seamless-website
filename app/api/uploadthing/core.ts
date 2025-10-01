import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // define routes for different upload types
  postImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 3,
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    try {
      return { fileUrl: file.ufsUrl };
    } catch (error) {
      console.error("Error in onUploadComplete:", error);
      throw error;
    }
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
