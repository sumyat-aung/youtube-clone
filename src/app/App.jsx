import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "../bar/Nav.jsx";
import SideBar from "../bar/SideBar.jsx";

import { context } from "../context/context.jsx";

import Feed from "../pages/Feed.jsx";
import Search from "../pages/Search.jsx";

// import necessary components ^^^^^

function App() {
  // destructuring every value we get from context
  const consumer = useContext(context);

  return (
    <div className="app">
      <Nav />
      <div className="main">
        <SideBar />
        <div className="conent">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:q" element={<Search />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
