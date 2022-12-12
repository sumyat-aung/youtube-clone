import React, { useContext } from "react";
import { useEffect } from "react";
import Video from "../components/Video.jsx";

import { context } from "../context/context.jsx";

// import necessary components ^^^^^

const Feed = () => {
  // destructuring every value we need from context to fetch data
  const { GettingFeedData, FeedData } = useContext(context);
  useEffect(() => {
    GettingFeedData();
  }, []);

  console.log(FeedData);

  return (
    <div className="feed">
      <div className="video-card-wrapper">
        {FeedData &&
          FeedData.map((data) => <Video key={data.id.videoId} d={data} />)}
      </div>
    </div>
  );
};

export default Feed;
