import React from "react";
import AdminSidebar from "./AdminSidebar";

// import Dashboard from "../Dashboard.jsx/Dashboard";
import AdminHeader from "../../../components/AdminDashboardCharts/AdminHeader";
import Dashboard from "../Dashboard.jsx/Dashboard";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-[#E9E9EB] w-screen h-screen">
      <AdminSidebar>{children}</AdminSidebar>

      <div className=" sm:w-[82%] w-full flex-grow flex flex-col bg-[#E9E9EB] p-6 overflow-auto">
        <AdminHeader />
        <Dashboard />
        <main>{children}</main>
      </div>
    </div>
  );
}
