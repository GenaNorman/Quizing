import React from "react";
import StudentDashboard from "../../components/dashboard/StudentDashboard";
import SideBar from "../../components/layouts/SideBar";
import TopNav from "../../components/layouts/TopNav";

function StudentPage() {
  return (
    <div className="student">
      <SideBar />
      <div className="creator__block">
        <TopNav />
        <StudentDashboard />
      </div>
    </div>
  );
}

export default StudentPage;
