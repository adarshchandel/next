import React from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
type chatsType = {
    name : string,
    id :string,
    isActive : boolean,
}

interface chatSideBarTypes {
    chats : chatsType[],
    activeChat : string
}

const ChatSidebar :React.FC<chatSideBarTypes> = ({ chats , activeChat }) => {
  return (
<div style={{ width: '25%', height: '100vh', backgroundColor: '#2E3B55', padding: '1rem', color: '#fff' }}>
      <Typography variant="h5" gutterBottom>
        Chats
      </Typography>
      <List>
        {chats.map((chat) => (
          <ListItem
            key={chat.id}
            button
            selected={activeChat === chat.id}
            // onClick={() => onSelectChat(chat.id)}
            sx={{
              backgroundColor: activeChat === chat.id ? 'primary.main' : 'inherit',
              borderRadius: '8px',
              mb: 1,
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>{chat.name[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={chat.name}  />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatSidebar;
