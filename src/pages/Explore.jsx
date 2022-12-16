import React from "react";
import { Link } from "react-router-dom";

import Error from "../components/Error";
import { useGetExploreQuery } from "../redux/data";
import VerticalVideo from "../components/VerticalVideo";
import VerticalLoading from "../components/VerticalLoading";

const Explore = () => {
  const { data, isFetching, isError } = useGetExploreQuery();
  const TrendingData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = TrendingData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div className="explore-feed">
      <div className="explore-wrapper">
        <Link to={"/gaming"} className="explore-items">
          <i className="fa-solid fa-gamepad"></i> Gaming
        </Link>
        <Link to={"/beauty"} className="explore-items">
          <i className="fa-solid fa-vest"></i> Fashion & Beauty
        </Link>
        <Link to={"/learning"} className="explore-items">
          <i className="fa-solid fa-graduation-cap"></i> Learning
        </Link>
        <Link to={"/sports"} className="explore-items">
          <i className="fa-solid fa-medal"></i> Sports
        </Link>
      </div>
      <div className="trending">
        {isFetching && <VerticalLoading />}
        {isError && <Error />}

        {TrendingData && <h1>Trending Videos</h1>}
        {TrendingData && (
          <div className="ver-card-wrapper">
            {FliteringVideoOnly.map((data) => (
              <VerticalVideo key={data?.id?.videoId} d={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
