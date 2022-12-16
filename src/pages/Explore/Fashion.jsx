import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Video from "../../components/Video";
import { useGetSearchQuery } from "../../redux/data";

const Fashion = () => {
  const { data, isFetching, isError } = useGetSearchQuery("Fashion & Beauty");
  const FashionData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = FashionData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div>
      {isFetching && <Loading />}

      {isError && <Error />}

      {FashionData && (
        <p className="items-title">
          Fashion & Beauty
          <i className="fa-solid fa-vest"></i>
        </p>
      )}

      {FashionData && (
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

export default Fashion;
