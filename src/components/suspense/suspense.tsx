'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const messages = [
  'Loading your awesome experience...',
  'Hold tight, magic is happening...',
  'Just a moment, preparing something cool...',
  'Fetching data, stay tuned...',
  'Good things come to those who wait...',
];

const LoadingFallback: React.FC = () => {
    const showMessage =()=>{
        return messages[Math.floor(Math.random() * messages.length)]
    }

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={styles.textContainer}
      >
        <Typography style={styles.text}>{showMessage() || 'Loading...'}</Typography>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={styles.spinner}
      />
    </div>
  );
};

export default LoadingFallback;

const styles :any = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  textContainer: {
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  spinner: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#007BFF',
  },
};
