import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [test, setTest] = useState();

  const clickHandler = () => {
    fetch("http://localhost:9000/webapp")
      .then((res) => res.json())
      .then((data) => {
        window.open(data.url);
      });
  };

  useEffect(() => {
    fetch("/webapp/callback").then((res) => console.log(res));
  }, [test]);
  return (
    <div className="App">
      <h1>Spotify App</h1>
      <button onClick={() => clickHandler()}>Log In</button>
    </div>
  );
}

export default App;
