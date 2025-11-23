"use client"
import React, { useState, useEffect } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { ButtonLoader } from '@/components/common/loading-button/loading-button';

import { loginMutation } from "../../../queries/authQueries";
import CustomToast from '@/components/common/toastMessage/toastMessage';
import GoogleLogin from '@/components/common/googleLogin/googleLogin';
import Link from 'next/link';
import ErrorBox from '@/components/common/ErrorBox';
import { MESSAGES } from '../../../../helper/constant';
import { useRouter } from 'next/navigation';
import { setCurrentUser } from '../../../../helper/common';
import { loginUser } from '@/store/user/userSlice';
import { useDispatch } from 'react-redux';
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const { mutate, isPending, data, isError, isSuccess, error } = loginMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data?.status) {
        CustomToast(data?.message || "Login successful!", 'success');
        console.log('data?.data=',{token : data?.data?.token , ...data?.data?.data});
        
        // setCurrentUser(data?.data ?? {})
        dispatch(loginUser({token : data?.data?.token , ...data?.data?.data}));
        // router.push('/home')
      }
      else CustomToast(data?.message || "Login failed", 'error');
    } else if (isError) {
      CustomToast(error?.message || MESSAGES.serverError, 'error');
    }
  }, [isSuccess, isError, data]);

  const login = async (e) => {
    e.preventDefault();
    mutate({ ...values })
  }

  return (
    <Container component="main" maxWidth="xs" sx={{ height: '100vh', }}>
      {/* <Box sx={{position : 'relative'}}>
        <ErrorBox message={'error'} width={200} height={30.}/>
      </Box> */}

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #476381',
          padding: '20px 20px',
          borderRadius: '7px',
          height: '450px',
          backgroundColor: "#fff"
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={login}>
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
          <Button
            className='custom_btn'
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isPending}
          >
            {isPending ? <ButtonLoader /> : "Login"}
          </Button>
          <GoogleLogin />
        </form>
        <Typography>Don't have an account? <Link style={{ 'color': 'blue' }} href={'/auth/sign-up'}>Signup</Link></Typography>
      </Box>
    </Container>
  );
};

export default Login;
