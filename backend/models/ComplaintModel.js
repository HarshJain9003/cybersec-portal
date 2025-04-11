const mongoose = require('mongoose');

// Define the Complaint schema
const ComplaintSchema = new mongoose.Schema({
  victimDetails: {
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    hasScreenshots: { type: String },
    screenshots: { type: String }, // Path to screenshot
  },
  incidentDetails: {
    incidentDate: { type: String, required: true },
    incidentType: { type: String, required: true },
    incidentSubtype: { type: String },
    otherIncidentType: { type: String },
    platform: { type: String, required: true },
    incidentDetails: { type: String, required: true },
  },
  submissionId: { type: String, unique: true, required: true }, // Unique ID for the submission
  created_at: { type: Date, default: Date.now },
});

// Check if the model already exists, otherwise define it
const ComplaintModel = mongoose.models.Complaint || mongoose.model('Complaint', ComplaintSchema);

module.exports = ComplaintModel;
