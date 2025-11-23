import React from 'react';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';
export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/" className="custom_btn mt-6 px-4 py-2 text-white rounded">
         <Typography className='text-white rounded'>Go back to Home</Typography> 
        </Link>
    </div>
  );
};
