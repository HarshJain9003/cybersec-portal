// routes/complaints.js
const express = require('express');
const router = express.Router();
const ComplaintModel = require('../models/Complaint');

// GET all complaints
router.get('/', async (req, res) => {
  try {
    const complaints = await ComplaintModel.find();
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Failed to fetch complaints' });
  }
});

// GET a single complaint by ID
router.get('/:id', async (req, res) => {
  try {
    const complaint = await ComplaintModel.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ error: 'Complaint not found' });
    }
    res.status(200).json(complaint);
  } catch (error) {
    console.error('Error fetching complaint:', error);
    res.status(500).json({ error: 'Failed to fetch complaint' });
  }
});

module.exports = router;
