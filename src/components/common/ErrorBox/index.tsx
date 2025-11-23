import { Typography, Box } from '@mui/material';
import React from 'react'

interface IeErrorBoxProp {
    message: string;
    height: number;
    width: number;
}
const ErrorBox: React.FC<IeErrorBoxProp> = ({ message = '', height = 20, width = 10 }) => {
    return (
        <Box
            className="m-2"
            sx={{
                width: '100%',
                position: 'absolute',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    padding: '10px',
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor: '#ff050587',
                    display: 'flex',
                    alignItems: 'center',       
                    justifyContent: 'center',   
                    textAlign: 'center',        
                    overflowWrap: 'break-word', 
                    wordBreak: 'break-word', 
                    borderRadius : '3px'
                }}
            >
                <Typography sx={{fontSize : '12px'}}>{message}</Typography>
            </Box>
        </Box>
    )
}

export default ErrorBox;