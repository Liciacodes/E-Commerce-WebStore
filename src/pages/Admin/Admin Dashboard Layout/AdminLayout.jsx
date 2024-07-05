import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex flex-col flex-1 bg-[#E9E9EB]">
        {/* Header */}
        <AdminHeader />

        {/* Main Content */}
        <div className="flex-grow p-6 overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
