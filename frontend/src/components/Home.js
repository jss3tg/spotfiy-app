import React from "react";

import "./Home.css";

export default function Home() {
  const clickHandler = () => {
    fetch("http://localhost:9000/webapp")
      .then((res) => res.json())
      .then((data) => {
        window.open(data.url);
      });
  };
  return (
    <div className="Home">
      <div className="lander">
        <h1>Home</h1>
        <p className="text-muted">Check out your Spotify</p>
        <button onClick={() => clickHandler()}>Log In</button>
      </div>
    </div>
  );
}
