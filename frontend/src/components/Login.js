import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Profile from "./Profile";
import "./Login.css";

function Login(props) {
  const userRef = useRef();
  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [clicked, setClicked] = useState(false);
  const getUsername = (e) => {
    e.preventDefault();
    const val = userRef.current.value;
    setUsername(val);
    console.log(val);
  };
  useEffect(() => {
    async function getUser() {
      const response = await fetch("/people");
      const body = await response.json();
      setUser(body);
      console.log("body", body);
    }
    getUser();
  }, []);
  console.log(user);
  return (
    <>
      <div className="Login">
        <p>
          <Form onSubmit={getUsername}>
            <Form.Group size="lg" controlId="user">
              <Form.Label>Enter Your Username:</Form.Label>
              <p>
                <Form.Control autoFocus type="name" ref={userRef} />{" "}
                <Button
                  type="submit"
                  style={{
                    color: "#1DB954",
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderColor: "#1DB954",
                  }}
                  onClick={() => setClicked(true)}
                >
                  Login
                </Button>{" "}
              </p>
            </Form.Group>
          </Form>
        </p>
      </div>
      {user && clicked && <Profile username={username} userList={user} />}
    </>
  );
}
export default Login;
