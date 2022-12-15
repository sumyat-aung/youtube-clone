import React from "react";
import { useParams } from "react-router-dom";

import { useGetVideoDetailsQuery } from "../../redux/data";

const VideoDetails = () => {
  let { id } = useParams();

  // console.log(useGetVideoDetailsQuery(id));
  return <div>VideoDetails</div>;
};

export default VideoDetails;
