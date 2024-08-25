"use client"
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/services/apiService";


export const loginQuery = () => useMutation({
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
    },
  });
