import React from 'react';
import { Box, Typography } from '@mui/material';

type msgProps = {
    message: {
        text: string,
        sender: string,
        isSender: boolean,
        timestamp: string,
        isRead: boolean
    }
}
const MessageBubble: React.FC<msgProps> = ({ message }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: message.isSender ? 'flex-end' : 'flex-start',
                mb: 2,
            }}
        >
            <Box
                sx={{
                    maxWidth: '70%',
                    padding: '0.8rem',
                    backgroundColor: message.isSender ? 'primary.main' : '#fff',
                    color: message.isSender ? '#fff' : '#000',
                    borderRadius: '8px',
                }}
            >
                <Typography>{message.text}</Typography>
                <Typography variant="caption" sx={{ color: '#aaa', mt: 1, display: 'block' }}>
                    {message.timestamp}
                </Typography>
            </Box>
        </Box>
    );
};

export default MessageBubble;
