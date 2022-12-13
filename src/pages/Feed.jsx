import React from "react";

import { useGetFeedQuery } from "../redux/data";
import Video from "../components/Video.jsx";

// import necessary components ^^^^^

const Feed = () => {
  const { data, isFetching, isError } = useGetFeedQuery();
  const feedData = data?.items;

  console.log(useGetFeedQuery());
  return (
    <div className="feed">
      {feedData && (
        <div className="video-card-wrapper">
          {feedData.map((data) => (
            <Video key={data.id.videoId} d={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Feed;
