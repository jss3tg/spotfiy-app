import React, {useEffect, useState} from 'react';
import Profile from './Profile';
import Login from './Login';

function Discover() {
    const [username, setUsername] = useState();
    return(
        <>
        <div>Discover</div>
        {username? <Profile username={username} /> : <Login setUser={setUsername}/>}
        </>
        
    )
}

export default Discover 