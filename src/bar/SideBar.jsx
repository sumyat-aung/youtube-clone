import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

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

  //// jsx

  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <Link to={"/"} className="sidebar-link">
            <i className="fa-solid fa-house"></i> Home
          </Link>
          <Link to={"/explore"} className="sidebar-link">
            Explore
          </Link>
        </div>
      )}
      {!sideBar && <h1> Side Bar Small </h1>}
    </>
  );
};

export default SideBar;
