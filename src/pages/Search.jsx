import React from "react";
import { useParams } from "react-router-dom";

import { useGetSearchQuery } from "../redux/data";

const Search = () => {
  let { q } = useParams();

  // const { data, isFetching, isError } = useGetSearchQuery(q);
  // const sportsData = data?.items;

  return (
    <div>
      <p className="search">Search result for : "{q}"</p>
    </div>
  );
};

export default Search;
