import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

function Login(props) {
    const {setUser} = props;
    const [currUser, setCurrUser] = useState();
    // const [password, setPassword] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        setUser(currUser);
    }
    return(
    <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="user">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="name"
                value={currUser}
                onChange={(e) => setCurrUser(e.target.value)}
            />
            </Form.Group>
            <Button block="true" type="submit" >
            Login
            </Button>
        </Form>
    </div>
    )
}

export default Login
