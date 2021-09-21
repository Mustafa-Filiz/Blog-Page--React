import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircle from '@mui/icons-material/AccountCircle';


const CardComp = () => {

    return (
        <Card sx={{ maxWidth: 345, m : 5 }}>

            <CardMedia
                component="img"
                height="194"
                image="https://cdn.pixabay.com/photo/2018/12/09/07/36/city-3864462_960_720.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardHeader
                avatar={
                    <AccountCircle fontSize="large" />
                }
                title="Shrimp and Chorizo Paella"
                subheader={new Date().toLocaleDateString("en-US", {dateStyle : "medium"})}
            />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default CardComp;
