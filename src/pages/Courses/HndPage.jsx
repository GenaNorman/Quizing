import SideBar from "../../components/layouts/SideBar";
import TopNav from "../../components/layouts/TopNav";
import HndSpecialties from "../../components/Exams/HND/HndSpeciallties";

function courses() {
  return (
    <div className="courses">
      <SideBar />
      <div className="Admin__block">
        <TopNav />
        <HndSpecialties />
      </div>
    </div>
  );
}

export default courses;
