import React from "react";
import AdminSidebar from "./AdminSidebar";

import Dashboard from "../Dashboard.jsx/Dashboard";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-[#E9E9EB] w-screen h-screen">
      <AdminSidebar></AdminSidebar>

      <Dashboard />

      <div className="flex-grow bg-[#E9E9EB] p-6">{children}</div>
    </div>
  );
}
