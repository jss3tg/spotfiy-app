import React, { useEffect, useState } from 'react';
import Post from './Post';
import PostText from './PostText';
//import Search from './Search';



function Forum() {
    const [post, setPost] = useState();

    useEffect(() => {
        async function getPost(){
            const response = await fetch('/forum/post');
            const body = await response.json();
            setPost(body);
        }
        getPost();
    }, [])
    return(
        <>
            <h4>Forum</h4>
            {/* <Search /> */}
            {post && <Post data={post}/>}
            <PostText/>
        </>
    )
}

export default Forum