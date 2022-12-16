import React from "react";
import { useParams } from "react-router-dom";

import Error from "../components/Error";
import VerticalVideo from "../components/VerticalVideo";
import VerticalLoading from "../components/VerticalLoading";

import { useGetSearchQuery } from "../redux/data";

const Search = () => {
  let { q } = useParams();

  const { data, isFetching, isError } = useGetSearchQuery(q);
  const searchData = data?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = searchData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  return (
    <div>
      <p className="search">Search result for : "{q}"</p>

      {isFetching && <VerticalLoading />}

      {isError && <Error />}

      {searchData && !isFetching && (
        <div className="ver-card-wrapper">
          {FliteringVideoOnly.map((data) => (
            <VerticalVideo key={data?.id?.videoId} d={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
