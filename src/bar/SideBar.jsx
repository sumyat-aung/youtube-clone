import React, { useContext } from "react";

import { context } from "../context/context.jsx";

const SideBar = () => {
  // destructuring every value we need from context to set SideBar
  const { sideBar } = useContext(context);

  return (
    <>
      {sideBar && <h1> Side Bar </h1>}
      {!sideBar && <h1> Side Bar Small </h1>}
    </>
  );
};

export default SideBar;
