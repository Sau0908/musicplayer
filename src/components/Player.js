import React, { useEffect, useRef } from "react";
import Details from "./Details";
import Controls from "./Controls";
import { useState } from "react";
const Player = (props) => {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <h1 className="heading">Playing Now... </h1>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={SkipSong}
      />
      <audio
        className="c-player--audio"
        src={props.songs[props.currentSongIndex].src}
        ref={audioElement}
        controls
      ></audio>
      <p>
        Next Up :{"  "}{" "}
        <span>
          {props.songs[props.nextSongIndex].title} by{" "}
          {props.songs[props.nextSongIndex].artist}
        </span>
      </p>
    </div>
  );
};

export default Player;
