import React from "react";
import ContentLoader from "react-content-loader";

const Loading = () => (
  <div className="loading-wrapper">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((d) => {
      return (
        <ContentLoader
          key={d}
          width={350}
          height={350}
          viewBox="0 0 400 400"
          backgroundColor="rgba(151, 151, 151, 0.212)"
          foregroundColor=" rgba(141, 141, 141, 0.363)"
        >
          <rect x="10" y="250" rx="4" ry="4" width="271" height="9" />
          <rect x="10" y="275" rx="3" ry="3" width="119" height="6" />
          <rect x="10" y="20" rx="10" ry="10" width="388" height="217" />
        </ContentLoader>
      );
    })}
  </div>
);

export default Loading;
