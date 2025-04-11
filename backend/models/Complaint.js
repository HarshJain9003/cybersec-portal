// models/Complaint.js
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  victimDetails: {
    fullName: String,
    mobileNumber: String,
    email: String,
    hasScreenshots: String,
    screenshots: String, // Path to screenshot
  },
  incidentDetails: {
    incidentDate: String,
    incidentType: String,
    incidentSubtype: String,
    otherIncidentType: String,
    platform: String,
    incidentDetails: String,
  },
  submissionId: String, // Unique ID for the submission
  created_at: { type: Date, default: Date.now },
});

// Check if model is already compiled
const ComplaintModel = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);

module.exports = ComplaintModel;
