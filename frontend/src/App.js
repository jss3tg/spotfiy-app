import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import "./App.css";

function App() {
  const [test, setTest] = useState();

  const clickHandler = () => {
    fetch("http://localhost:9000/webapp")
      .then((res) => res.json())
      .then((data) => {
        window.open(data.url);
      });
  };

  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Spotify Social
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/discover">
              <Nav.Link>Discover</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/forum">
              <Nav.Link>Forum</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
