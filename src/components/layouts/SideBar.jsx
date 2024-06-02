import React, { useState } from "react";
import { Navigations } from "../../data/SidebarItems";

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useProvider } from "../../context/HandlerContext.js";

function SideBar() {
  const { toggleNav } = useProvider();
  return (
    <div className={toggleNav ? "sidebar" : "translate"}>
      <div>
        <h2 className="sidebar__logo">Quizy</h2>
      </div>
      <ul className="sidebar__sidenav">
        {Navigations.map((navigate, index) => (
          <Navigate navigate={navigate} key={index} />
        ))}
      </ul>
      <span className="sidebar__copyright">&copy;2024 T-chala</span>
    </div>
  );
}
function Navigate({ navigate }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((show) => !show);
  }
  return (
    <Link className="sidebar__mainitem" to={navigate.path}>
      <li className="sidebar__item" onClick={() => handleClick()}>
        <div className="sidebar__item-block">
          <span className="sidebar__item-block-sidebaricon">
            {navigate.icon}
          </span>
          <span className="sidebar__item-block-itemname">{navigate.name}</span>

          <span className="sidebar__item-block-iconguide">
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
