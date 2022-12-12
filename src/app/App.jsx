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

// import necessary components ^^^^^

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/search/:q" element={<Search />} />
            <Route path="/explore" element={<Explore />} />

            <Route path="/gaming" element={<Gaming />} />
            <Route path="/beauty" element={<Fashion />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
