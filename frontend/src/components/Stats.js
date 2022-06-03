import React, { useContext, useEffect, useState } from "react";
import { AccessTokenContext } from "../contexts/AccessToken";
import { Card, CardGroup, Button } from "react-bootstrap";
import axios from "axios";
import "./Stats.css";
import { Helmet } from "react-helmet";
function Stats() {
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);
  const [topSongs, setTopSongs] = useState();
  const [topArtists, setTopArtists] = useState();
  const [likedSongs, setLikedSongs] = useState();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [profile, setProfile] = useState();

  useEffect(() => {
    fetch("http://localhost:9000/users/likedsongs/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setLikedSongs(data.items));
  }, [accessToken]);

  useEffect(() => {
    fetch("http://localhost:9000/users/topsongs/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setTopSongs(data.items));
  }, [accessToken]);

  useEffect(() => {
    fetch("http://localhost:9000/users/topartists/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => setTopArtists(data.items));
  }, [accessToken]);

  useEffect(() => {
    fetch("http://localhost:9000/users/profile/?token=" + accessToken)
      .then((res) => res.json())
      .then((data) => {
        setName(data.display_name);
        setId(data.id);
        setProfile(data.external_urls.spotify);
      });
  }, [accessToken]);

  console.log(topSongs);

  return (
    <>
      <Helmet>
        <title>Stats</title>
      </Helmet>
      <div className="stats">
        <div style={{ textAlign: "center", color: "black" }}>
          <h1>Hello, {name}</h1>
          <h4>[{id}]</h4>
          <Button
            style={{
              fontFamily: "Poppins",
              backgroundColor: "white",
              color: "black",
              borderColor: "#1DB954",
              borderWidth: "2px",
            }}
            onClick={() => window.open(profile, "_blank")}
          >
            {" "}
            Go to Spotify Profile
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardGroup>
            <div className="top-songs">
              <Card
                className="card"
                style={{ borderColor: "#1DB954", borderWidth: "5px" }}
              >
                <Card.Header>
                  <h3 style={{ color: "#1DB954" }}>Top Songs</h3>
                </Card.Header>
                <Card.Body>
                  {topSongs &&
                    topSongs.map((song) => {
                      return (
                        <>
                          <p style={{ textAlign: "left" }}>
                            <img
                              src={song.album.images[2].url}
                              style={{ margin: "5px" }}
                            />{" "}
                            <a
                              href={song.external_urls.spotify}
                              target="_blank"
                            >
                              {song.name}
                            </a>{" "}
                            - {song.artists[0].name}
                          </p>
                        </>
                      );
                    })}
                </Card.Body>
              </Card>
            </div>

            <div className="top-Artists">
              <Card
                className="card"
                style={{ borderColor: "#1DB954", borderWidth: "5px" }}
              >
                <Card.Header>
                  <h3 style={{ color: "#1DB954" }}>Top Artists</h3>
                </Card.Header>
                <Card.Body>
                  {topArtists &&
                    topArtists.map((a) => {
                      return (
                        <>
                          <p>
                            <a href={a.external_urls.spotify} target="_blank">
                              {a.name}
                            </a>
                          </p>
                        </>
                      );
                    })}
                </Card.Body>
              </Card>
            </div>

            <div className="liked-songs">
              {
                <Card
                  className="card"
                  style={{ borderColor: "#1DB954", borderWidth: "5px" }}
                >
                  <Card.Header>
                    <h3 style={{ color: "#1DB954" }}>Liked Songs</h3>
                  </Card.Header>
                  <Card.Body>
                    {likedSongs &&
                      likedSongs.map((song) => {
                        return (
                          <>
                            <p style={{ textAlign: "left" }}>
                              <img
                                src={song.track.album.images[2].url}
                                style={{ margin: "5px" }}
                              />
                              <a
                                href={song.track.external_urls.spotify}
                                target="_blank"
                              >
                                {song.track.name}
                              </a>{" "}
                              - {song.track.artists[0].name}
                            </p>
                          </>
                        );
                      })}
                  </Card.Body>
                </Card>
              }
            </div>
          </CardGroup>
        </div>
      </div>
    </>
  );
}

export default Stats;
