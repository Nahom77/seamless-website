"use client";

import { toast } from "sonner";
import { UploadDropzone } from "../lib/uploadthing";
import { XIcon } from "lucide-react";

interface ImageUploadProps {
  onChange: (urls: string[]) => void;
  value: string[];
  endpoint: "postImage";
}

function ImageUpload({ endpoint, onChange, value }: ImageUploadProps) {
  if (value.length > 0) {
    return (
      <div className="w-full gap-4 grid grid-cols-2 md:grid-cols-3">
        {value.map((url, idx) => (
          <div key={idx} className="size-35 md:size-40 relative">
            <img
              src={url}
              alt={`Upload ${idx}`}
              className="size-35 md:size-40 object-cover rounded-md"
            />
            <button
              onClick={() => onChange(value.filter((_, i) => i !== idx))}
              className="p-1 top-0 right-0 absolute bg-red-500 shadow-sm rounded-full"
              type="button"
            >
              <XIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <UploadDropzone
      className="w-[300px]"
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        // res is an array of uploaded file data
        const urls = res.map((file) => file.ufsUrl);
        onChange([...(value || []), ...urls].slice(0, 3)); // cap at 3
      }}
      onUploadError={(error: Error) => {
        console.error(error);
        toast.error(`${error.message}` || "Something went wrong");
      }}
    />
  );
}

export default ImageUpload;
