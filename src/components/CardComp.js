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

const CardComp = ({ blog }) => {
    console.log(blog)
    return (
        <Card sx={{ maxWidth: 345, m: 5 }}>
            <CardMedia
                component="img"
                height="194"
                image={blog.imgURL}
                alt={blog.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {blog.context}
                </Typography>
            </CardContent>
            <CardHeader
                avatar={<AccountCircle fontSize="large" />}
                title={blog.title}
                subheader={new Date().toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                })}
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
