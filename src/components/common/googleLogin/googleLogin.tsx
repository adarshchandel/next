import { Button } from '@mui/material'
import React from 'react'
import { Google as GoogleIcon } from '@mui/icons-material';


const GoogleLogin = () => {
  return (
    <Button
    fullWidth
    variant="outlined"
    startIcon={<GoogleIcon />}
    sx={{ mb: 2 }}
    color='error'
  >
    Login with Google
  </Button>
  )
}

export default GoogleLogin