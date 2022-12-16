import React from "react";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Video from "../../components/Video";
import { useGetSearchQuery } from "../../redux/data";

const Learning = () => {
  const { data, isFetching, isError } = useGetSearchQuery(
    "Education & Learning"
  );
  const LearningData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = LearningData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div>
      {isFetching && <Loading />}

      {isError && <Error />}

      {LearningData && (
        <p className="items-title">
          Learning
          <i className="fa-solid fa-graduation-cap"></i>
        </p>
      )}

      {LearningData && (
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

export default Learning;
