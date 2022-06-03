import React, { useEffect, useState } from "react";
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
  const { id, title, desc, likes, replies } = props.data;
  const [clicked, setClicked] = useState();

  console.log(replies);

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

  const respond = (rply) => {
    console.log(rply);
    replies.push(rply);
    console.log(replies);
    axios.put("http://localhost:9000/forum/reply", {
      id: id,
      replies: replies,
    });
  };
  return (
    <>
      <Card
        variant="outlined"
        style={{
          margin: "10px",
          borderWidth: "5px",
          borderColor: "#1DB954",
        }}
      >
        <Grid container>
          <Grid item xs={6} style={{ marginTop: "30px" }}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </Grid>
          <Grid item xs={6} style={{ marginTop: "10px" }}>
            <Form onSubmit={updatePost}>
              <IconButton color="success" type="submit">
                <KeyboardArrowUpIcon />
              </IconButton>
            </Form>
            <h4 style={{ margin: "2px" }}>{likes}</h4>
            <Form onSubmit={downvotePost}>
              <IconButton color="success" type="submit">
                <KeyboardArrowDownIcon />
              </IconButton>
            </Form>
          </Grid>
        </Grid>

        {/* {!clicked && (
          <Button onClick={() => setClicked(true)}>See Replies</Button>
        )}
        {clicked && (
          <Button onClick={() => setClicked(false)}>Hide Replies</Button>
        )}

        {clicked &&
          replies &&
          replies.map((r) => {
            <p>{r}</p>;
          })}

        {clicked && (
          <Card>
            <p>
              Post A Reply: <input id="responder" />{" "}
              <input
                type="submit"
                value="Post"
                onClick={() =>
                  respond(document.getElementById("responder").value)
                }
              />
            </p>
          </Card>
              ) */}
      </Card>
    </>
  );
}

export default Text;
