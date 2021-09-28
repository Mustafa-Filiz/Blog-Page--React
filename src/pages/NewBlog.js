import { Avatar, Button, TextField, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import React, { useState } from 'react';
import blogImage from '../assets/blog.png';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { addBlog } from '../utils/functions';

const initialValues = {
    title: '',
    imgURL: '',
    context: '',
};

const validationSchema = Yup.object({
    title: Yup.string().required('This field is required.'),
    imgURL: Yup.string().required('This field is required.'),
    context: Yup.string().required('This field is required.'),
});

const NewBlog = () => {
    const [blogInfo, setBlogInfo] = useState(initialValues);
    // const [title, setTitle] = useState("")
    // const [imgURL, setImgURL] = useState("")
    // const [context, setContext] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogInfo({ ...blogInfo, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.title.value)
        // console.log(e.target.imgURL.value)
        // console.log(e.target.context.value)
        addBlog(blogInfo);
        
    };

    return (
        <Box>
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
                    sx={{ m: 3 }}
                >{` New Blog `}</Typography>
                <Formik
                    className="container"
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                >
                    <Form
                        action=""
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '400px',
                        }}
                        onSubmit={onSubmit}
                    >
                        <TextField
                            id="title"
                            name="title"
                            variant="outlined"
                            label="Title *"
                            value={blogInfo.title}
                            onChange={handleChange}
                            sx={{ m: 1 }}
                        />
                        <ErrorMessage name="title" />
                        <TextField
                            id="imgURL"
                            name="imgURL"
                            variant="outlined"
                            label="Image URL *"
                            value={blogInfo.imgURL}
                            onChange={handleChange}
                            sx={{ m: 1 }}
                        />
                        <ErrorMessage name="imgURL" />
                        <TextField
                            id="context"
                            name="context"
                            variant="outlined"
                            label="Context *"
                            value={blogInfo.context}
                            onChange={handleChange}
                            sx={{ m: 1 }}
                            rows={10}
                            multiline
                        />
                        <ErrorMessage name="context" />
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{ m: 1, backgroundColor: '#eba10e' }}
                        >
                            SUBMIT
                        </Button>
                    </Form>
                </Formik>
            </Box>
        </Box>
    );
};

export default NewBlog;
