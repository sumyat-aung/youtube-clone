import React from "react";
import ContentLoader from "react-content-loader";

const VideoLoading = () => {
  return (
    <div className="loader">
      <ContentLoader
        viewBox="0 0 1200 200"
        width={"100%"}
        height={200}
        backgroundColor="rgba(151, 151, 151, 0.212)"
        foregroundColor=" rgba(141, 141, 141, 0.363)"
      >
        <rect x="0" y="9.93" rx="5" ry="5" width="100%" height="100" />
      </ContentLoader>
    </div>
  );
};

export default VideoLoading;
