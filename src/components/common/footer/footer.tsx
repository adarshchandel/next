import React from 'react';
import { Box, Typography, Link, Grid, IconButton } from '@mui/material';
import PlayStoreIcon from '@mui/icons-material/Android'; // Icon for Play Store
import AppleIcon from '@mui/icons-material/Apple'; // Icon for App Store

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2c3e50',
        py: 4,
        px: 2,
        borderTop: '1px solid #ddd',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        {/* Left Section: Common Links */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="/about" color="white" underline="none" sx={{ mr: 2 }}>
              About Us
            </Link>
            <Link href="/contact" color="white" underline="none" sx={{ mr: 2 }}>
              Contact
            </Link>
            <Link href="/privacy" color="white" underline="none" sx={{ mr: 2 }}>
              Privacy Policy
            </Link>
            <Link href="/terms" color="white" underline="none">
              Terms of Service
            </Link>
          </Box>
        </Grid>

        {/* Right Section: App Store & Play Store */}
        <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
          <Typography variant="h6" gutterBottom>
            Get Our App
          </Typography>
          <Box>
            {/* Play Store Link */}
            <IconButton
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              color='white'
              sx={{ mr: 2 }}
            >
              <PlayStoreIcon fontSize="large" />
            </IconButton>

            {/* App Store Link */}
            <IconButton
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
            >
              <AppleIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section: Copyright */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
