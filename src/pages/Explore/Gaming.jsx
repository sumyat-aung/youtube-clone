import React from "react";

import Loading from "../../components/Loading";
import Video from "../../components/Video";
import { useGetSearchQuery } from "../../redux/data";

const Gaming = () => {
  const { data, isFetching, isError } = useGetSearchQuery("Gaming");
  const GamingData = data?.items;

  return (
    <div>
      <p className="items-title">
        Gaming<i className="fa-solid fa-gamepad"></i>
      </p>
      {isFetching && <Loading />}

      {GamingData && (
        <>
          <div className="video-card-wrapper">
            {GamingData.map((data) => (
              <Video key={data.id.videoId} d={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gaming;
