"use client";

import { UploadDropzone } from "../lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value) {
    return (
      <div className="size-40 relative">
        <img
          src={value}
          alt="Upload"
          className="size-40 object-cover rounded-md"
        />
        <button
          onClick={() => onChange("")}
          className="p-1 top-0 right-0 absolute bg-red-500 shadow-sm rounded-full"
          type="button"
        >
          <XIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}
export default ImageUpload;
