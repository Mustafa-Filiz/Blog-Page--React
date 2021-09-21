import { Avatar, Button, TextField, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React from 'react';
import NavBar from '../components/NavBar';
import blogImage from '../assets/blog.png';
import { Formik } from 'formik';

const NewBlog = () => {
    return (
        <Box>
            <NavBar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%',
                    height: '800px',
                    backgroundColor: '#a2957b',
                }}
            >
                <Avatar
                    sx={{
                        width: '200px',
                        height: '200px',
                        backgroundColor: '#a2957b',
                    }}
                >
                    <img
                        src={blogImage}
                        alt="blog image"
                        style={{ width: '190px' }}
                    />
                </Avatar>
                <Typography
                    variant="h4"
                    sx={{ m: 3}}
                >{`}{ New Blog }{`}</Typography>
                <Formik>
                    <form
                        action=""
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
                        }}
                    >
                        <TextField
                            variant="outlined"
                            label="Title *"
                            sx={{ m: 1}}
                        />
                        <TextField
                            variant="outlined"
                            label="Image URL *"
                            sx={{ m: 1}}
                        />
                        <TextField
                            variant="outlined"
                            label="Context *"
                            sx={{ m: 1}}
                            rows={10}
                            multiline
                        />
                        <Button variant="contained" size="large" sx={{ m: 1, backgroundColor : "#eba10e" }}>
                            SUBMIT
                        </Button>
                    </form>
                </Formik>
            </Box>
        </Box>
    );
};

export default NewBlog;
