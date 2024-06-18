import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="bg-[#E9E9EB] w-screen h-screen">
      <AdminSidebar>{children}</AdminSidebar>
    </div>
  );
}
