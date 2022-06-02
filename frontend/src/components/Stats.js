import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../contexts/AccessToken";
import { Card } from "@mui/material";
import axios from "axios";

function Stats() {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const [topSongs, setTopSongs] = useState();
  const [topArtists, setTopArtists] = useState();
  const [likedSongs, setLikedSongs] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/users/likedsongs/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setLikedSongs(data.items));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/users/topsongs/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setTopSongs(data.items));
  }, []);
  console.log("top songs:", topSongs);

  useEffect(() => {
    fetch("http://localhost:9000/users/topartists/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setTopArtists(data.items));
  }, []);

  return (
    <>
      <div style={{ color: "black", textAlign: "center", fontsize: "large" }}>
        <h1>Liked Songs: </h1>
        {likedSongs &&
          likedSongs.map((song) => {
            return (
              <>
                <h3>
                  {song.track.name} by {song.track.artists[0].name}
                </h3>
              </>
            );
          })}
        <h1>Top Songs</h1>
        {topSongs &&
          topSongs.map((song) => {
            return (
              <>
                <h3>
                  {" "}
                  {song.name} by {song.artists[0].name}
                </h3>
              </>
            );
          })}
        <h1>Top Artists</h1>
        {topArtists &&
          topArtists.map((a) => {
            return (
              <>
                <h3>{a.name}</h3>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Stats;
