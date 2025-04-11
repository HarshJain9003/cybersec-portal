import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const securityEvents = [
  { id: 1, name: "Malicious URL Request", severity: "High" },
  { id: 2, name: "Phishing Attempt", severity: "Medium" },
  { id: 3, name: "Data Breach", severity: "Critical" }
];

const SecurityPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Security</Typography>
      <Paper className="paper">
        <List>
          {securityEvents.map(event => (
            <ListItem key={event.id} button>
              <ListItemText primary={event.name} secondary={`Severity: ${event.severity}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default SecurityPage;
