import React from "react";

const Details = (props) => {
  return (
    <div className="c-player--details">
      <div className="details_img">
        <img src={props.song.img_src} alt="" />
      </div>
      <h3 className="details_title">{props.song.title}</h3>
      <h3 className="details_artist">{props.song.artist}</h3>
    </div>
  );
};

export default Details;
