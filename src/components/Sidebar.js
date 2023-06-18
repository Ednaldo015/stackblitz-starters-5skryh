import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Sidebar.css";
import { FiMenu } from "react-icons/fi";

function Sidebar() {
  const [sidebarClicked, setSidebarClicked] = useState(false);
  function toggleSidebar(event) {
    event.preventDefault();
    !sidebarClicked ? setSidebarClicked(true) : setSidebarClicked(false);
  }
  return (
    <>
      <nav className="side-nav">
        <div
          className="side-burger-container"
          data-testid="side-burger-container"
          onClick={(event) => toggleSidebar(event)}
        >
          <FiMenu className="side-burger" />
        </div>
        {!sidebarClicked ? (
          <div className="side-links-container">
            <NavLink to="/loja/men" className="side-men-link">
              Men
            </NavLink>
            <NavLink to="/loja/women" className="side-women-link">
              Women
            </NavLink>
            <NavLink to="/loja/accessories" className="accessories-link">
              Accessories
            </NavLink>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}

export default Sidebar;