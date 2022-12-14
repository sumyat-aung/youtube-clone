import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const VerticalVideo = ({ d }) => {
  const date = d && d.snippet.publishTime;
  const diff = moment().diff(moment(date));
  const ago = moment.duration(diff).humanize();

  return (
    <Link to={"/explore"} className="ver-card" alt="Click to play">
      <img src={d.snippet.thumbnails.medium?.url} alt={d.snippet.title} />
      <div className="ver-card-content">
        <div className="des">
          <p>{d.snippet.title}</p>

          <div className="date"> {ago} ago </div>
          <div className="acc">
            <img
              src={d.snippet.thumbnails.medium?.url}
              alt={d.snippet.title}
              className="thumb"
            />
            <Link
              to={"/gaming"}
              className="channel-name"
              text={d.snippet.channelTitle}
            >
              {d.snippet.channelTitle}
            </Link>
          </div>
          <p className="description">{d.snippet.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default VerticalVideo;
