import React from 'react';
import dynamic from 'next/dynamic';
import Suspense from "../../../components/common/suspenseLoader/index"
const LoginPage = dynamic(()=>import('@/components/pages/login/login'),{ ssr : true ,loading : ()=><Suspense/>})

const Login = () => {
  return (
   <LoginPage/>
  );
};

export default Login;
