"use client"
import { useMutation } from "@tanstack/react-query";
import { loginUser , signUser } from "@/services/apiService";


export const loginMutation = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log('Login successful:', data);
      return data
    },
    onError: (err) => {
        console.error('Login failed:', err);
        return err
      },
    });
}

export const signupMutation = () =>{
  return useMutation({
    mutationFn : signUser,
    onSuccess : (data)=>{
      console.log('Signup successful:', data);
      return data
    },onError:(err)=>{
      console.error('Login failed:', err);
      return err
    }
  })
}
