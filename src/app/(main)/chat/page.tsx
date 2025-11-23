import React from 'react';
import dynamic from 'next/dynamic';
const ChatPage = dynamic(()=>import('@/components/pages/chat/chat') , { ssr : true })

const Chat = () => {
  return (
    <ChatPage/>
  );
};

export default Chat;
