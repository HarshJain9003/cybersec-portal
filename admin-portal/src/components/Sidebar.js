// src/components/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail';
import SecurityIcon from '@mui/icons-material/Security';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './Sidebar.css'; // Import the CSS

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <List>
        <Link to="/">
          <ListItem button className={location.pathname === '/' ? 'active' : ''}>
            <DashboardIcon />
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/messages">
          <ListItem button className={location.pathname === '/messages' ? 'active' : ''}>
            <MailIcon />
            <ListItemText primary="Messages" />
          </ListItem>
        </Link>
        <Link to="/inbox">
          <ListItem button className={location.pathname === '/inbox' ? 'active' : ''}>
            <MailIcon />
            <ListItemText primary="Inbox" />
          </ListItem>
        </Link>
        <Link to="/security">
          <ListItem button className={location.pathname === '/security' ? 'active' : ''}>
            <SecurityIcon />
            <ListItemText primary="Security" />
          </ListItem>
        </Link>
        <Link to="/profiles">
          <ListItem button className={location.pathname === '/profiles' ? 'active' : ''}>
            <AccountBoxIcon />
            <ListItemText primary="Profiles" />
          </ListItem>
        </Link>
        <Link to="/complaints">
          <ListItem button className={location.pathname === '/complaints' ? 'active' : ''}>
            <MailIcon />
            <ListItemText primary="Complaints" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default Sidebar;