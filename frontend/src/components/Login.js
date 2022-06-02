import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

function Login(props) {
    const {setUser} = props;
    const userRef = useRef();
    // const [password, setPassword] = useState("");

    const getUsername = (e) => {
        e.preventDefault()
        const val = userRef.current.value;
        setUser(val)
        console.log(val)
    }
    
    return(
    <div className="Login">
        <Form onSubmit={getUsername}>
            <Form.Group size="lg" controlId="user">
            <Form.Label>Username</Form.Label>
            <Form.Control
                autoFocus
                type="name"
                ref={userRef}
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
