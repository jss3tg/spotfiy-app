import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditProfile(props) {
    //const { id, username, phoneNumber, name, totalMessages } = props.data
    const {user} = props
    console.log(props)
    const updatePost = () => {
        
        //console.log(username)
        axios.put('http://localhost:9000/people', {
        }
        )
    }
    return(
        <>
            <Form onSubmit={updatePost}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter title" 
                name="username"
                />
                <Form.Text className="text-muted">
                What would you like to change?
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDesc">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" 
                name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDesc">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="PhoneNumber" 
                name="phoneNumber"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDesc">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" 
                name="email"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Update Profile
            </Button>
            </Form>
        </>
    )
}

export default EditProfile