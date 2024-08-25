"use client"
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { loginUser } from '@/services/apiService';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const loginQuery = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log('Login successful:', data);
      if(data.success){
            toast.success( data.data || data.message)
            setCurrentUser(data.data)
          }
          else toast.error( data.data || data.message)
    },
    onError: (err) => {
      console.error('Login failed:', err);
      toast("Something went wrong")
    },

  });

  const login = async (e) => {
    e.preventDefault();
    loginQuery.mutate({ ...values })
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
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
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}

          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ mb: 2 }}
            color='error'
          >
            Login with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ mb: 2 }}
            color='primary'
          >
            Login with Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
