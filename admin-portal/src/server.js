const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let complaints = [];

app.post('/api/complaints', (req, res) => {
    const complaint = req.body;
    complaints.push(complaint);
    res.status(201).send('Complaint received');
});

app.get('/api/complaints', (req, res) => {
    const allComplaints = Array.from(complaints.values());
    res.status(200).json(allComplaints);
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
