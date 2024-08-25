"use client"
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import {Box , TextField, IconButton } from '@mui/material';

type sendMessage = (message: string) => void;

interface MessageProps {
    sendMessage: sendMessage;
}

const MessageInput: React.FC<MessageProps> = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            sendMessage(message);
            setMessage(''); // Clear the input field after sending
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '8px' }}>
            <TextField
                variant="outlined"
                placeholder="type your message..."
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                sx={{ mr: 2 }}
            />
            <IconButton onClick={handleSend} color="primary">
                <SendIcon />
            </IconButton>
        </Box>
    );
};

export default MessageInput;
