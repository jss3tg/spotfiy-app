import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AccessTokenContext } from "../contexts/AccessToken";

import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useContext(AccessTokenContext);

  const clickHandler = () => {
    fetch("http://localhost:9000/webapp")
      .then((res) => res.json())
      .then((data) => {
        window.open(data.url);
      });
  };

  const path = window.location.href.split("/")[3];
  let code = "";

  useEffect(() => {
    if (path) {
      code = path.split("=")[1];
      fetch("http://localhost:9000/webapp/callback?code=" + code)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            setAccessToken(data.token);
            navigate("/stats");
          }
        });
    }
  }, []);

  return (
    <div className="Home">
      <div className="lander">
        <h1>Home</h1>
        <p className="text-muted">Log into your Spotify account:</p>
        <button onClick={() => clickHandler()}>Log In</button>
      </div>
    </div>
  );
}
