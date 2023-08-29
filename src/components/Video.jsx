import React from "react";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

// import necessary components ^^^^^

const Video = ({ d }) => {
  // Calculate the difference between the date format 'YYYY-MM-DDTHH:MM:SSZ'  and the current date
  const date = d && d?.snippet?.publishTime;
  const diff = moment().diff(moment(date));
  const ago = moment.duration(diff).humanize();

  // using navigation
  const navigate = useNavigate();

  // Replace '=>' with ':' in the URL strings
  const correctedMediumUrl = d?.snippet?.thumbnails?.medium?.url
    .replace(/=>/g, ":")
    .replace(/\s/g, "");

  return (
    <Link
      to={`/video/${d?.id?.videoId}`}
      className="card-box"
      text="Click to play"
    >
      <img
        src={correctedMediumUrl}
        alt={d?.snippet?.title}
        referrerPolicy="no-referrer"
      />
      <div className="card-content">
        <img
          src={correctedMediumUrl}
          alt={d?.snippet?.title}
          referrerPolicy="no-referrer"
          className="thumb"
        />
        <div className="des">
          <p>{d?.snippet?.title}</p>
          <div
            onClick={() => {
              navigate(`/channel/${d?.snippet?.channelId}`);
            }}
            className="channel-name"
            text={d?.snippet?.channelTitle}
          >
            {d?.snippet?.channelTitle}
          </div>
          <div className="date"> {ago} ago </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
