import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "../bar/Nav.jsx";
import SideBar from "../bar/SideBar.jsx";

import Feed from "../pages/Feed.jsx";
import Search from "../pages/Search.jsx";
import Explore from "../pages/Explore.jsx";

import Gaming from "../pages/Explore/Gaming.jsx";
import Fashion from "../pages/Explore/Fashion.jsx";
import Learning from "../pages/Explore/Learning.jsx";
import Sports from "../pages/Explore/Sports.jsx";

import ChannelDetails from "../pages/Details/ChannelDetails.jsx";
import VideoDetails from "../pages/Details/VideoDetails.jsx";

// import necessary components ^^^^^

function App() {
  // state for bars
  const [sideBar, setsideBar] = useState(
    window.innerWidth < 1000 ? false : true
  );

  // jsx
  return (
    <div className="app">
      <Nav sideBar={sideBar} setsideBar={setsideBar} />
      <div className="main">
        <SideBar sideBar={sideBar} setsideBar={setsideBar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:q" element={<Search />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/gaming" element={<Gaming />} />
            <Route path="/beauty" element={<Fashion />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/sports" element={<Sports />} />

            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route
              path="/video/:id"
              element={<VideoDetails setsideBar={setsideBar} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
