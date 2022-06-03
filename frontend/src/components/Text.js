import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Grid } from "@material-ui/core";
//import { Card } from "react-bootstrap";
import { Card } from "@material-ui/core";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Text(props) {
  const { id, title, desc, likes } = props.data;

  const updatePost = () => {
    const likeCount = likes + 1;
    console.log(likeCount);
    axios.put("http://localhost:9000/forum/post", {
      id: id,
      likes: likeCount,
    });
  };

  const downvotePost = () => {
    const likeCount = likes - 1;
    console.log(likeCount);
    axios.put("http://localhost:9000/forum/post", {
      id: id,
      likes: likeCount,
    });
  };
  return (
    <>
      <Card
        variant="outlined"
        style={{
          margin: "10px",
          borderWidth: "5px",
          borderColor: "black",
        }}
      >
        <Grid container>
          <Grid item xs={6} style={{ marginTop: "10px" }}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </Grid>
          <Grid item xs={6} style={{ marginTop: "10px" }}>
            <Form onSubmit={updatePost}>
              <IconButton color="success" type="submit">
                <KeyboardArrowUpIcon />
              </IconButton>
            </Form>
            <p>{likes}</p>
            <Form onSubmit={downvotePost}>
              <IconButton color="success" type="submit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Form>
          </Grid>
        </Grid>

        <LinkContainer to="/forum-post">
          <Button>Discussion</Button>
        </LinkContainer>
      </Card>
    </>
  );
}

export default Text;
