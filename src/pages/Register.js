import { Button, TextField, Avatar, Typography, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import blogImage from '../assets/blog.png';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import NavBar from '../components/NavBar';

const initialValues = {
    name: '',
    email: '',
    userName: '',
};

const validationSchema = Yup.object({
    password: Yup.string().required('This field is required.'),
    email: Yup.string().email('Invalid email address'),
});

const Register = () => {
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
                    height: '620px',
                    backgroundColor: '#c6c4c2',
                }}
            >
                <Paper elevation={24}
                    sx={{
                        width: '450px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: '#a2957b'
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
                    >{` REGISTER `}</Typography>

                    <Formik
                        className="container"
                        initialValues={initialValues}
                        // onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        <Form
                            action=""
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '400px',
                            }}
                        >
                            <TextField
                                type="email"
                                id="email"
                                name="email"
                                variant="outlined"
                                label="E-mail"
                                sx={{ m: 1 }}
                            />
                            <ErrorMessage name="email" />
                            <TextField
                                type="password"
                                id="password"
                                name="password"
                                variant="outlined"
                                label="Password"
                                sx={{ m: 1 }}
                            />
                            <ErrorMessage name="password" />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ m: 1, backgroundColor: '#eba10e' }}
                            >
                                REGISTER
                            </Button>
                        </Form>
                    </Formik>
                </Paper>
            </Box>
        </Box>
    );
};

export default Register;
