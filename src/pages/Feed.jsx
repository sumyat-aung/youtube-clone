import React from "react";

import { useGetFeedQuery } from "../redux/data";
import Video from "../components/Video";
import Loading from "../components/Loading";
import Error from "../components/Error";

// import necessary components ^^^^^

const Feed = () => {
  const { data, isFetching, isError } = useGetFeedQuery();
  const feedData = data?.items;
  
  return (
    <div className="feed">
      {isFetching && <Loading />}
      {isError && <Error />}
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
