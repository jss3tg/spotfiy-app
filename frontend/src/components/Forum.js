import React, { useEffect, useState } from 'react';
import Post from './Post';
import PostText from './PostText';
import axios from 'axios';



function Forum() {
    const [post, setPost] = useState();

    useEffect(() => {
        async function getPost(){
            const response = await fetch('/forum/post');
            const body = await response.json();
            setPost(body);
            console.log('body', body);
        }
        getPost();
    }, [])
    return(
        <>
            <h4>Forum</h4>
            <Post data={post}/>
            <PostText data={post}/>
        </>
    )
}

export default Forum