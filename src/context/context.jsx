import { createContext, useState } from "react";
import { API_KEY } from "../key/key";

// import necessary components ^^^^^

///////////////////////

// creating context
const context = createContext();

// context provider sending all the data
const ContextProvider = (props) => {
  // Side Bar Handling with state base of width
  const [sideBar, setsideBar] = useState(
    window.innerWidth < 1000 ? false : true
  );

  // State to handle all data
  const [FeedData, setFeedData] = useState();

  //  options => Header's
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  // fetching Data For Feed Page

  function GettingFeedData() {
    fetch(
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
      options
    )
      .then((response) => response.json())
      .then((response) => setFeedData(response.items))
      .catch((err) => console.error(err));
  }

  return (
    <context.Provider
      value={{ sideBar, setsideBar, GettingFeedData, FeedData }}
    >
      {props.children}
    </context.Provider>
  );
};

export { context, ContextProvider };
