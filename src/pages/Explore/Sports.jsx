import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Video from "../../components/Video";

import { useGetSearchQuery } from "../../redux/data";

const Sports = () => {
  const { data, isFetching, isError } = useGetSearchQuery("Sports");
  const sportsData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = sportsData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div>
      {isFetching && <Loading />}

      {isError && <Error />}

      {sportsData && (
        <p className="items-title">
          Sports <i className="fa-solid fa-medal"></i>
        </p>
      )}

      {sportsData && (
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

export default Sports;
