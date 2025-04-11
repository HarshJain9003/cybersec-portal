import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';

const profiles = [
  { id: 1, name: "John Doe", role: "Administrator", avatar: "/static/images/avatar/1.jpg" },
  { id: 2, name: "Jane Smith", role: "Moderator", avatar: "/static/images/avatar/2.jpg" },
  { id: 3, name: "Alice Johnson", role: "User", avatar: "/static/images/avatar/3.jpg" }
];

const ProfilesPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Profiles</Typography>
      <Paper className="paper">
        <List>
          {profiles.map(profile => (
            <ListItem key={profile.id} button>
              <Avatar alt={profile.name} src={profile.avatar} />
              <ListItemText primary={profile.name} secondary={profile.role} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}

export default ProfilesPage;
