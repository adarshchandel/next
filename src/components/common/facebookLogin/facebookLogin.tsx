import React from 'react'
import {Facebook as FacebookIcon } from '@mui/icons-material';
import { Button } from '@mui/material';

const FacebookLogin = () => {
  return (
    <Button
    fullWidth
    variant="outlined"
    startIcon={<FacebookIcon />}
    sx={{ mb: 2 }}
    color='primary'
  >
    Login with Facebook
  </Button>
  )
}

export default FacebookLogin