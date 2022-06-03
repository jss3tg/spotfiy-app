import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardActionArea from '@mui/material/CardActionArea';
import Avatar from '@material-ui/core/Avatar'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { makeStyles } from '@material-ui/core/styles'
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { red } from '@mui/material/colors'; 
import Routes from "/Users/davidvincent/Desktop/spotify-app/spotfiy-app-1/frontend/src/Routes.js"
const useBasicProfileStyles = makeStyles({
   root: {     
     display: 'flex',     
     alignItems: 'center', 
     margin: "2rem"  
    },  
     
   info: {     
     marginRight: 12,   
   },   
   avatar: {
     borderRadius: 8,
     backgroundColor: '#495869'
   },
   overline: {
     fontSize: 10,
     textTransform: 'uppercase',
     letterSpacing: 1,
     color: '#8D9CAD',
   },
   name: {
     fontSize: 14,
     fontWeight: 500,
     color: '#495869',
   },
 })


function Discover() {
    const [user, setUser] = useState();
    const styles = useBasicProfileStyles();
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
    const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 48 });
    useEffect(() => {
        async function getPost(){
            const response = await fetch('/people');
            const body = await response.json();
            setUser(body);
            console.log('body', body);
        }
        getPost();
    }, [])
    return(
        <>
            <h4>Discover</h4>
            {user && user.map (user => 
                <div key={user.id}>
                  <Link to={`/forum/${user.id}`}>
                    <Card variant={"outlined"}sx={{ maxWidth: 345, margin:"2rem"}}>                      
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {user.username[0]}
                            </Avatar>
                            }
                            title={user.username}
                            subheader="September 14, 2016"
                        />                      
                    </Card>
                  </Link>
                </div>
            )}
        </>
    )
}




export default Discover 