import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { LinkContainer } from "react-router-bootstrap";

function Text(props) {
    const {id, title, desc, likes} = props.data

    const updatePost = () => {
        const likeCount = likes + 1;
        console.log(likeCount)
        axios.put('http://localhost:9000/forum/post', {
            id: id,
            likes: likeCount}
        )
    }
    return(
        <>
            <h4>{title}</h4>
            <p>{desc}</p>
            <p>{likes}</p>
            <Form onSubmit={updatePost}>
            <Button variant="primary" type="submit">
                Upvote
            </Button>
            </Form>
            <LinkContainer to="/forum-post">
              <Button>Discussion</Button>
            </LinkContainer>
        </>
    )
}

export default Text