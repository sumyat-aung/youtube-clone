import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const Video = ({ d }) => {
  // Calculate the difference between the date format 'YYYY-MM-DDTHH:MM:SSZ'  and the current date
  const date = d && d.snippet.publishTime;
  const diff = moment().diff(moment(date));
  const ago = moment.duration(diff).humanize();

  return (
    <Link to={"/explore"} className="card-box" text="Click to play">
      <img src={d.snippet.thumbnails.medium?.url} alt={d.snippet.title} />
      <div className="card-content">
        <img
          src={d.snippet.thumbnails.medium?.url}
          alt={d.snippet.title}
          className="thumb"
        />
        <div className="des">
          <p>{d.snippet.title}</p>
          <Link
            to={"/gaming"}
            className="channel-name"
            text={d.snippet.channelTitle}
          >
            {d.snippet.channelTitle}
          </Link>
          <div className="date"> {ago} ago </div>
        </div>
      </div>
    </Link>
  );
};

export default Video;
