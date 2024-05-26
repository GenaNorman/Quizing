import React, { useState } from "react";
import { Navigations } from "../assets/SidebarItems";
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="sidebar">
        <span className="slider" onClick={toggleNavbar}>
          {isOpen ? <IoIosArrowForward /> : <IoChevronBackOutline />}
        </span>
        <div>
          <h2 className="logo">Quizy</h2>
        </div>
        <ul className="topnav">
          {Navigations.map((navigate, index) => (
            <Navigate navigate={navigate} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
function Navigate({ navigate }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((show) => !show);
  }
  return (
    <Link className="mainitem" to={navigate.path}>
      <li className="sidebar_item" onClick={() => handleClick()}>
        <div className="center">
          <span>{navigate.icon}</span>
          <span className="itemname">{navigate.name}</span>

          <span className="iconguide">
            {!isOpen ? navigate.forwardicon : navigate.downicon}
          </span>
        </div>
      </li>
      {isOpen && (
        <div>
          {navigate.subroutes && (
            <div className="subroute">
              {navigate.subroutes &&
                navigate.subroutes.map((subnavigate, index) => (
                  <Dropdown subnavigate={subnavigate} key={index} />
                ))}
            </div>
          )}
        </div>
      )}
    </Link>
  );
}

export default SideBar;
