import SideBar from "./SideBar";
import TopNav from "./TopNav";

function Navigation() {
  return (
    <div className="navigation__layout">
      <SideBar />
      <div>
        <TopNav />
      </div>
    </div>
  );
}

export default Navigation;
