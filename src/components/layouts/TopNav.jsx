import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useProvider } from "../../context/HandlerContext.js";

function TopNav() {
  const { hidesidebar } = useProvider();
  return (
    <div className="topnav">
      <div className="leftnav">
        <GiHamburgerMenu
          className="topnav__leftnav-hambuger"
          onClick={hidesidebar}
        />
        <input
          type="search"
          placeholder="Search for..."
          className="search_bar"
          maxLength={35}
        />
        <li className="search_icon">
          <IoIosSearch />
        </li>
      </div>
      <div className="rightnav">
        <span className="notification">
          <IoIosNotificationsOutline />
        </span>
        <span className="username">T-chala Fx</span>
        <li className="user">
          <img
            src=".././public/images/image.png"
            alt=""
            className="userprofile"
          />
        </li>
      </div>
    </div>
  );
}

export default TopNav;
