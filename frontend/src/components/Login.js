import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import Profile from "./Profile"
import "./Login.css";

function Login(props) {
    const userRef = useRef();
    const [username, setUsername] = useState()
    const [user, setUser] = useState()

    const getUsername = (e) => {
        e.preventDefault()
        const val = userRef.current.value;
        setUsername(val)
        console.log(val)
    }

    useEffect(() => {
        async function getUser(){
            const response = await fetch('/people');
            const body = await response.json();
            setUser(body);
            console.log('body', body);
        }
        getUser();
    }, [])

    return(
        <>
        <div className = "Login"> 
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
    
            {user && <Profile username={username} userList = {user}/>}
        </>
    )
}

export default Login
