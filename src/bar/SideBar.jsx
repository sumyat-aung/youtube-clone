import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { context } from "../context/context.jsx";

const SideBar = () => {
  // destructuring every value we need from context to set SideBar
  const { sideBar, setsideBar } = useContext(context);

  //   responsive Side Bar Showing BASE on Width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1000) {
        setsideBar(false);
      } else {
        setsideBar(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //// jsx

  return (
    <>
      {sideBar && (
        <div className="sb-big">
          <Link to={"/"} className="sidebar-link">
            Home{" "}
          </Link>
          <Link to={"/explore"} className="sidebar-link">
            Explore{" "}
          </Link>
        </div>
      )}
      {!sideBar && <h1> Side Bar Small </h1>}
    </>
  );
};

export default SideBar;
