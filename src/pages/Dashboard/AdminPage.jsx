import React from "react";
import AdminDashboard from "../../components/dashboard/AdminDashboard";
import SideBar from "../../components/layouts/SideBar";
import TopNav from "../../components/layouts/TopNav";

function Admin() {
  return (
    <div className="Admin">
      <SideBar />
      <div className="Admin__block">
        <TopNav />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default Admin;
