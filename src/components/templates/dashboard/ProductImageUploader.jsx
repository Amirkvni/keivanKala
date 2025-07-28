"use client";

import { useDropzone } from "react-dropzone";
import { useEffect, useState } from "react";
import { FaImage, FaTrashAlt } from "react-icons/fa";

export default function ProductImageUploader({ onDrop }) {
  const [files, setFiles] = useState([]);

  const handleDelete = (index) => {
    const updatedFiles = [...files];
    URL.revokeObjectURL(updatedFiles[index].preview);
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
    if (onDrop) onDrop(updatedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const mappedFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      const allFiles = [...files, ...mappedFiles];
      setFiles(allFiles);
      if (onDrop) onDrop(allFiles);
    },
  });

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <section className="w-full">
      {/* Dropzone */}
      <div
        {...getRootProps({
          className:
            "flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-md p-6 cursor-pointer text-center text-gray-600 hover:bg-blue-50 transition",
        })}
      >
        <input {...getInputProps()} />
        <FaImage className="text-4xl text-blue-400 mb-3" />
        <p className="text-sm">تصاویر خود را اینجا رها کنید یا</p>
        <p className="text-sm text-blue-500 underline">برای مرور کلیک کنید</p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-3  gap-4 cursor-pointer">
          {files.map((file, index) => (
            <div
              key={index}
              className="border border-dashed border-blue-400 rounded-lg p-2 shadow-sm relative group"
            >
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md text-red-500 hover:bg-red-100 transition z-10 opacity-0 group-hover:opacity-100"
                title="حذف تصویر"
              >
                <FaTrashAlt className="w-4 h-4 cursor-pointer" />
              </button>

              <img
                src={file.preview}
                alt={file.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />

              <div className="text-xs text-center text-gray-700">
                <p className="font-medium truncate">{file.name}</p>
                <p className="text-gray-500">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
