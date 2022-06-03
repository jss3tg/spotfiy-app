import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import Login from './Login';
import './Home.css'

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Home</h1>
        <p className="text-muted">Check out your Spotify</p>
        
      </div>
    </div>
  );
}