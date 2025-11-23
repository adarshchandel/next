"use client"
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ButtonLoader } from '@/components/common/loading-button/loading-button';
import PhoneInput from 'react-phone-input-2'
import CustomToast from '@/components/common/toastMessage/toastMessage';
import 'react-phone-input-2/lib/style.css'
import { signupMutation } from "../../../queries/authQueries";
import Link from 'next/link';
import GoogleLogin from '@/components/common/googleLogin/googleLogin';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router = useRouter();

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: '',
        name: "",
        phone: "",
        phoneCode: "",
        phoneWithCode: ""
    });

    const handleNumberChange = (phone, data) => {
        setValues((prev) => ({ ...prev, phoneCode: data.dialCode, phone: phone.slice(data.dialCode.length), phoneWithCode: phone, }))
    }

    const { mutate, isPending, data, error, isError, isSuccess, status } = signupMutation();

    useEffect(() => {
        console.log('error', error);

        if (isSuccess) {
            if (data?.success) {
                CustomToast(data?.message || "Sign up successful!", 'success');
                router.push('/auth/login')
            }
            else CustomToast(data?.message || data?.data || "Sign up failed", 'error');
        } else if (isError) {
            CustomToast(error?.message || error?.data || "An error occurred during Sign up", 'error');
        }
    }, [isSuccess, isError, data]);

    const signup = async (e) => {
        e.preventDefault();
        console.log("submit");

        mutate({ ...values })
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid #476381',
                    padding: '20px 40px',
                    borderRadius: '7px',
                }}
            >
                <Typography component="h1" variant="h5">
                    Signup
                </Typography>
                <Box component="form" onSubmit={signup} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Name"
                        type="text"
                        id="name"
                        autoComplete="off"
                        value={values.name}
                        onChange={(e) => setValues({ ...values, name: e.target.value })}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={values.email}
                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                    />
                    <div className='mt-2 mb-1'>
                        <PhoneInput
                            country={'in'}
                            value={values.phoneWithCode}
                            onChange={(phone, data) => handleNumberChange(phone, data)}
                            inputStyle={{
                                // height : '53px',
                                width: '100%'
                            }}
                        />
                    </div>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="confirm-password"
                        value={values.password}
                        onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
                    />
                    <Button
                        className='custom_btn'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isPending}
                    >
                        {isPending ? <ButtonLoader /> : "Signup"}
                    </Button>
                    <GoogleLogin />
                </Box>
                <Typography>Already have an account? <Link style={{ 'color': 'blue' }} href={'/auth/login'}>Login</Link></Typography>
            </Box>
        </Container>
    );
};

export default SignUpPage;
