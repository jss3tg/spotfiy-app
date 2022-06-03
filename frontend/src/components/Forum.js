import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostText from "./PostText";
//import Search from './Search';
import { Helmet } from "react-helmet";

function Forum() {
  const [post, setPost] = useState();

  useEffect(() => {
    async function getPost() {
      const response = await fetch("/forum/post");
      const body = await response.json();
      setPost(body);
    }
    getPost();
  }, []);

  console.log(post);
  return (
    <>
      <Helmet>
        <title>Forum</title>
      </Helmet>
      <h4>Forum</h4>
      {/* <Search /> */}
      {post && <Post data={post} />}
      <PostText />
    </>
  );
}

export default Forum;
