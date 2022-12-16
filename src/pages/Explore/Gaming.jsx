import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Video from "../../components/Video";
import { useGetSearchQuery } from "../../redux/data";

const Gaming = () => {
  const { data, isFetching, isError } = useGetSearchQuery("Gaming");
  const GamingData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = GamingData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div>
      {isFetching && <Loading />}

      {isError && <Error />}

      {GamingData && (
        <p className="items-title">
          Gaming<i className="fa-solid fa-gamepad"></i>
        </p>
      )}

      {GamingData && (
        <>
          <div className="video-card-wrapper">
            {FliteringVideoOnly.map((data) => (
              <Video key={data?.id?.videoId} d={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Gaming;
