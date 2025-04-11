const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to handle complaint submissions and sending emails
const sendComplaint = async (req, res) => {
  const { victimDetails, incidentDetails } = req.body;
  const uniqueId = uuidv4();

  const adminEmailContent = `
    <html>
      <body>
        <h1>New Incident Report</h1>
        <p><strong>Unique ID:</strong> ${uniqueId}</p>
        <h2>Victim Details</h2>
        <p><strong>Name:</strong> ${victimDetails.fullName}</p>
        <p><strong>Contact:</strong> ${victimDetails.mobileNumber}</p>
        <p><strong>Email:</strong> ${victimDetails.email}</p>
        <h2>Incident Details</h2>
        <p><strong>Date:</strong> ${incidentDetails.incidentDate}</p>
        <p><strong>Type:</strong> ${incidentDetails.incidentType}</p>
        <p><strong>Details:</strong> ${incidentDetails.incidentDetails}</p>
      </body>
    </html>
  `;

  const userEmailContent = `
    <html>
      <body>
        <h1>Complaint Submitted</h1>
        <p>Your complaint has been submitted successfully!</p>
        <p>Your Unique ID is: ${uniqueId}</p>
        <p>Thank you for your report. We will get back to you shortly.</p>
      </body>
    </html>
  `;

  try {
    // Send email to the admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'harshjjain9003@gmail.com',
      subject: 'New Incident Report',
      html: adminEmailContent,
    });

    // Send email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: victimDetails.email,
      subject: 'Your Incident Report',
      html: userEmailContent,
    });

    res.status(200).json({ uniqueId });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

module.exports = { sendComplaint };