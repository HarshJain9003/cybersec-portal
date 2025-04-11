import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Dashboard.css'; // Import the CSS file for styling

const pieData = [
  { name: 'High', value: 400 },
  { name: 'Medium', value: 300 },
  { name: 'Low', value: 300 }
];

const lineData = [
  { name: '9 AM', uv: 400, pv: 2400, amt: 2400 },
  { name: '12 PM', uv: 300, pv: 1398, amt: 2210 },
  { name: '3 PM', uv: 200, pv: 9800, amt: 2290 },
  { name: '6 PM', uv: 278, pv: 3908, amt: 2000 },
  { name: '9 PM', uv: 189, pv: 4800, amt: 2181 },
  { name: '12 AM', uv: 239, pv: 3800, amt: 2500 }
];

const Dashboard = () => {
  const [data, setData] = useState(pieData);

  const fetchAttackData = async () => {
    try {
      const response = await fetch('/api/attack-stats');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const fetchedData = await response.json();
      const formattedData = fetchedData.map(item => ({
        name: item.type,
        value: item.count,
      }));
      setData(formattedData);
    } catch (error) {
      console.error('Failed to fetch attack data:', error);
    }
  };

  const refreshData = () => {
    fetchAttackData();
  };

  useEffect(() => {
    fetchAttackData();
  }, []);

  return (
    <div className="dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper className="paper">
            <Typography variant="h6">Types of Attacks</Typography>
            <PieChart width={400} height={400} className="pie-chart">
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.name === 'High' ? '#e74c3c' : entry.name === 'Medium' ? '#f39c12' : '#2ecc71'}
                  />
                ))}
              </Pie>
            </PieChart>
            <Button variant="contained" color="primary" onClick={refreshData}>Refresh Data</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Paper className="paper">
            <Typography variant="h6">Daily Appointments</Typography>
            <LineChart width={600} height={300} data={lineData} className="line-chart">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#2980b9" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="pv" stroke="#27ae60" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
