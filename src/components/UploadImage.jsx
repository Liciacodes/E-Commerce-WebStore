import React from "react";

export default function UploadImage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center ">
        {/* Image Upload Input */}
        <label className="flex flex-col items-center w-12 p-6 bg-white border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
          <svg
            className="w-6 h-6 mb-3 text-blue-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.5 3h-4.2l-.4-1.3c-.2-.7-.9-1.2-1.7-1.2H9.8c-.8 0-1.5.5-1.7 1.2L7.8 3H3.5C2.7 3 2 3.7 2 4.5v11C2 16.3 2.7 17 3.5 17h13c.8 0 1.5-.7 1.5-1.5v-11C18 3.7 17.3 3 16.5 3zM10 15.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zM5.5 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
          </svg>
          <span className="text-sm text-gray-500">Click to upload</span>
          <input type="file" className="hidden" accept="image/*" />
        </label>

        {/* Optional Image Preview */}
        {/* <div className="w-64 h-64 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-sm text-gray-500">Image Preview</span>
        </div> */}
      </div>
    </div>
  );
}
