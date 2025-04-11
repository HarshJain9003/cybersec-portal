import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const inboxItems = [
  { id: 1, subject: "Inbox Item 1", details: "Details of inbox item 1" },
  { id: 2, subject: "Inbox Item 2", details: "Details of inbox item 2" },
  { id: 3, subject: "Inbox Item 3", details: "Details of inbox item 3" }
];

const InboxPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Inbox</Typography>
      <Paper className="paper">
        <List>
          {inboxItems.map(item => (
            <ListItem key={item.id} button>
              <ListItemText primary={item.subject} secondary={item.details} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default InboxPage;
