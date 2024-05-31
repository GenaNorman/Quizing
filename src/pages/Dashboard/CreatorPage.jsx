import React from "react";
import CreatorDashboard from "../../components/dashboard/CreatorDashboard";
import SideBar from "../../components/layouts/SideBar";
import TopNav from "../../components/layouts/TopNav";

function CreatorPage() {
  return (
    <div className="creator">
      <SideBar />
      <div className="creator__block">
        <TopNav />
        <CreatorDashboard />
      </div>
    </div>
  );
}

export default CreatorPage;
