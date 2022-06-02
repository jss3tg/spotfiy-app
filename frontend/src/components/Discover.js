import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { Row, Item } from '@mui-treasury/components/flex'
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors'; 

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
                </div>
            )}
        </>
    )
}




export default Discover 