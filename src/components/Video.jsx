import React from "react";

const Video = ({ d }) => {
  console.log("fdsfs");
  return (
    <div className="card-box">
      <img src={d.snippet.thumbnails.medium?.url} alt={d.snippet.title} />
      <div className="card-content">
        <img src={d.snippet.thumbnails.default?.url} alt={d.snippet.title} />
        <div className="des">
          <p>{d.snippet.title}</p>
          <div className="channel-name">{d.snippet.channelTitle}</div>
          <div className="date"> {d.snippet.publishTime} </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
