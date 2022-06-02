import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import Login from './Login';
import './Home.css'

export default function Home() {
  const [username, setUsername] = useState();
    const [user, setUser] = useState()
    useEffect(() => {
        async function getPost(){
            const response = await fetch('/people');
            const body = await response.json();
            setUser(body);
            console.log('body', body);
        }
        getPost();
    }, [])
  return (
    <div className="Home">
      <div className="lander">
        <h1>Home</h1>
        <p className="text-muted">Check out your Spotify</p>
        {username? user && <Profile username={username} userList={user}/> : <Login setUsername={setUsername}/>}
      </div>
    </div>
  );
}