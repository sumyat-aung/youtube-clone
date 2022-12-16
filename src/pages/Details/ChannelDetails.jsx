import React from "react";
import { useParams } from "react-router-dom";
import numeral from "numeral";

import {
  useGetChannelDetailsQuery,
  useGetChannelVideosQuery,
} from "../../redux/data";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Video from "../../components/Video";

// import necessary components ^^^^^

const ChannelDetails = () => {
  const { id } = useParams();

  // channel banner
  const { data, isFetching, isError } = useGetChannelDetailsQuery(id);
  let channelCardData = data?.items?.[0];

  // channel video
  const {
    data: videoData,
    isFetching: videoFetching,
    isError: videoError,
  } = useGetChannelVideosQuery(id);
  const VideoCardData = videoData?.items;

  // flitering video only from api given array
  const FliteringVideoOnly = VideoCardData?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  // getting subscribers formatted with numeral
  let subscribers = channelCardData?.statistics?.subscriberCount;
  let formatted =
    subscribers?.length < 7
      ? numeral(+subscribers).format("0a")
      : numeral(+subscribers).format("0.000a");

  // jsx
  return (
    <div className="channel">
      {(isError || videoError) && <Error />}

      {(isFetching || videoFetching) && <Loading />}

      {channelCardData && videoData && (
        <>
          <div className="banner">
            <img
              src={
                channelCardData?.snippet?.thumbnails?.high?.url ||
                "https://wallpaperaccess.com/full/1615355.jpg"
              }
              alt={channelCardData?.name?.title}
              referrerPolicy="no-referrer"
            />
            <div className="acc-info">
              <img
                src={
                  channelCardData?.snippet?.thumbnails?.high?.url ||
                  "https://wallpaperaccess.com/full/1615355.jpg"
                }
                alt={channelCardData?.name?.title}
                referrerPolicy="no-referrer"
              />
              <div>
                <h3>{channelCardData?.brandingSettings?.channel?.title}</h3>
                <h4>{channelCardData?.snippet?.customUrl}</h4>
                <h4>{formatted.toUpperCase()} subscribers</h4>
              </div>
            </div>
          </div>
          <div className="video-card-wrapper">
            {FliteringVideoOnly?.map((data) => (
              <Video key={data?.id?.videoId} d={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChannelDetails;
