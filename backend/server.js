const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer'); // Import nodemailer

require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // Serve static files

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/complaintsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define a schema and model for complaints
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

const ComplaintModel = mongoose.model('Complaint', ComplaintSchema);

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append extension
  },
});

const upload = multer({ storage: storage });

// Configure nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Handle POST request to save complaint
app.post('/sendComplaint', upload.single('screenshots'), async (req, res) => {
  const victimDetails = JSON.parse(req.body.victimDetails);
  const incidentDetails = JSON.parse(req.body.incidentDetails);

  const newComplaint = new ComplaintModel({
    victimDetails: {
      ...victimDetails,
      screenshots: req.file ? req.file.path : 'https://drive.google.com/drive/u/1/folders/13RMARIhLRZCpdbbH6hnJ2GbVzteL4Jaq', // Save the file path if exists
    },
    incidentDetails,
    submissionId: `CID-${Date.now()}`, // Generate a unique ID for the submission
  });

  try {
    const savedComplaint = await newComplaint.save();

    // Compose email content
    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `New Complaint Registered - ID: ${savedComplaint.submissionId}`,
      text: `A new complaint has been registered. Here are the details:\n\n
      Complaint ID: ${savedComplaint.submissionId}
      Victim Name: ${victimDetails.fullName}
      Mobile Number: ${victimDetails.mobileNumber}
      Email: ${victimDetails.email}
      Incident Type: ${incidentDetails.incidentType}
      Incident Date: ${incidentDetails.incidentDate}
      Platform: ${incidentDetails.platform}
      Incident Details: ${incidentDetails.incidentDetails}
      
      Please log in to the admin panel to view the full details.`,
    };

    // Send email to admin
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(200).json({ uniqueId: savedComplaint.submissionId });
  } 
  catch (error) {
    console.error('Error saving complaint:', error);
    res.status(500).json({ error: 'Failed to save complaint' });
  }
});

const trackComplaintRoute = require('./routes/TrackComplaint'); // Adjust the path as necessary
app.use('/api', trackComplaintRoute);

const complaintsRouter = require('./routes/complaints');
app.use('/api/complaints', complaintsRouter);

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
