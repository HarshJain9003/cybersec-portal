// backend/routes/TrackComplaint.js
const express = require('express');
const router = express.Router();
const ComplaintModel = require('../models/ComplaintModel'); // Ensure the path to the model is correct

// Handle GET request to track a complaint by submissionId
router.get('/trackComplaint/:id', async (req, res) => {
  try {
    const complaint = await ComplaintModel.findOne({ submissionId: req.params.id });
    console.log("Searching for submissionId:", req.params.id); // Log the submissionId
    if (!complaint) {
      console.log("Complaint not found");
      return res.status(404).json({ message: 'Complaint not found' });
    }
    res.status(200).json(complaint);
  } catch (error) {
    console.error('Error fetching complaint:', error);
    res.status(500).json({ error: 'Failed to fetch complaint' });
  }
});

module.exports = router;
