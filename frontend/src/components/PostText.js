import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function PostText() {
  const onSubmit = (e) => {
    const likeCount = 0;
    const obj = {
      title: e.target.title.value,
      desc: e.target.desc.value,
      likes: likeCount,
      replies: [],
    };
    submitPost(obj);
  };
  const submitPost = (msg) => {
    axios.post("http://localhost:9000/forum/post", msg);
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" name="title" />
          <Form.Text className="text-muted">
            What do you want to write about?
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDesc">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" name="desc" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default PostText;
