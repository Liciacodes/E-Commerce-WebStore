import React from "react";

export default function Input({ placeholder, ...props }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      {...props}
      className="h-[50px] px-[20px] py-[10px] border bg-white pl-10 rounded-md"
    />
  );
}
