"use client"
import React, { useState } from 'react';
import MessageBubble from './message/message';
import MessageInput from './messageInput/messageInput';
import { Box } from '@mui/material';

const demoMessages = [
  { id: "oh9yf9du9", text: "Hello, how can I help you today", sender: "John Doe", isSender: false, timestamp: "2024-09-12", isRead: false },
  { id: "98ry8ry3y", text: "I need assistance with my account.", sender: "You", isSender: true, timestamp: "2024-09-12", isRead: true }
]

const ChatWindow = () => {
  type msgProps = {
    text: string,
    sender: string,
    isSender: boolean,
    timestamp: string,
    isRead: boolean,
    id: string
  }
  const [ messages , setMessage ] = useState<msgProps[]>([...demoMessages])
  
  const sendMessage = (message: string) => {

    const newMessage: msgProps = {
      id: Math.random().toString(36).substring(7), // Generate a random id
      text: message,
      sender: "You", // Assuming "You" is the sender for this example
      isSender: true,
      timestamp: new Date().toISOString().split('T')[0], // Use the current date
      isRead: false
  };
    setMessage([ ...messages , newMessage ])
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#F4F6F8',
        padding: '1rem',
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </Box>
      <MessageInput sendMessage={sendMessage} />
    </Box>
  );
};

export default ChatWindow;
