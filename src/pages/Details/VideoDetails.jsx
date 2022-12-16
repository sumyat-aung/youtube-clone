import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import numeral from "numeral";

import {
  useGetRelatedVideosQuery,
  useGetVideoDetailsQuery,
} from "../../redux/data";
import VideoLoading from "../../components/VideoLoading";
import Error from "../../components/Error";
import Video from "../../components/Video";

const VideoDetails = ({ setsideBar }) => {
  // close side bar
  useEffect(() => {
    setsideBar(false);
  }, []);

  // get id
  let { id } = useParams();

  // get video detail
  const { data, isFetching, isError } = useGetVideoDetailsQuery(id);
  let videosDisData = data?.items[0];

  // get related video
  const {
    data: relatedData,
    isError: relatedError,
    isFetching: relatedFetching,
  } = useGetRelatedVideosQuery(id);

  // flitering video only from api given array
  const FliteringVideoOnly = relatedData?.items?.filter(
    (obj) => obj?.id?.kind !== "youtube#channel"
  );

  // getting likes formatted with numeral

  let Likes = videosDisData?.statistics?.likeCount;
  let Likeformatted =
    Likes?.length < 7
      ? numeral(+Likes).format("0a")
      : numeral(+Likes).format("0.000a");

  // views formatted with numeral
  let Views = videosDisData?.statistics?.viewCount;
  let viewformatted =
    Views?.length < 7
      ? numeral(+Views).format("0a")
      : numeral(+Views).format("0.000a");

  /// jsx

  return (
    <div>
      {(isError || relatedError) && <Error />}
      {(isFetching || relatedFetching) && <VideoLoading />}
      {data && relatedData && !isFetching && !relatedFetching && (
        <>
          <div className="video-detail">
            <ReactPlayer
              className="react-player"
              width="95%"
              origin={window.location.href}
              controls={true}
              url={`https://www.youtube.com/watch?v=${id}`}
              playing
            />

            <h2 className="video-title">{videosDisData?.snippet?.title}</h2>
            <div className="video-des">
              <Link
                to={`/channel/${videosDisData?.snippet?.channelId}`}
                className="des-one"
              >
                <img
                  src={videosDisData?.snippet?.thumbnails?.high?.url}
                  alt={videosDisData?.snippet?.title}
                />
                <div>
                  <h3>{videosDisData?.snippet?.channelTitle}</h3>
                  <h4>{viewformatted.toUpperCase()} views</h4>
                </div>
              </Link>

              <div className="des-two">
                {Likeformatted.toUpperCase()} Likes{" "}
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
            </div>
          </div>
          <div className="related-videos">
            <h2 className="title">Related Videos</h2>
            <div className="video-card-wrapper">
              {FliteringVideoOnly?.map((data) => (
                <Video key={data?.id?.videoId} d={data} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetails;
