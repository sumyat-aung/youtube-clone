import React, { useContext } from "react";

import { context } from "../context/context.jsx";

// import necessary components ^^^^^

const Feed = () => {
  // destructuring every value we get from context
  const { sideBar } = useContext(context);
  return <div>Feed</div>;
};

export default Feed;
