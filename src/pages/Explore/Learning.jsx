import React from "react";

import Loading from "../../components/Loading";
import Video from "../../components/Video";
import { useGetSearchQuery } from "../../redux/data";

const Learning = () => {
  const { data, isFetching, isError } = useGetSearchQuery("Veritasium");
  const LearningData = data?.items;

  return (
    <div>
      <p className="items-title">
        Learning
        <i className="fa-solid fa-graduation-cap"></i>
      </p>
      {isFetching && <Loading />}

      {LearningData && (
        <>
          <div className="video-card-wrapper">
            {LearningData.map((data) => (
              <Video key={data.id.videoId} d={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Learning;
