import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { context } from "../context/context.jsx";

const SideBar = () => {
  // destructuring every value we need from context to set SideBar
  const { sideBar, setsideBar, manual } = useContext(context);

  useEffect(() => {
    function handleResize() {
      if (!manual) {
        if (window.innerWidth < 1000) {
          setsideBar(false);
        } else {
          setsideBar(true);
        }
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [manual]);

  // animation
  // const styles = {
  //   sideIn: {
  //   },
  //   sideOut: {
  //     animation: "sideOut 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
  //   },
  // };

  //// jsx

  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <div className="home">
            <NavLink to={"/"} className="sidebar-link" activeClassName="active">
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink
              to={"/explore"}
              className="sidebar-link"
              activeClassName="active"
            >
              <i className="fa-solid fa-globe"></i> Explore
            </NavLink>
          </div>
        </div>
      )}
      {!sideBar && <div className="sb-small"> Side Bar Small </div>}
    </>
  );
};

export default SideBar;
