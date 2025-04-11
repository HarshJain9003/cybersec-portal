import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer'; // or any other email service you prefer

const generateUniqueId = () => {
  return uuidv4();
};

const sendEmail = async (recipientEmail, emailContent) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  let mailOptions = {
    from: 'your-email@gmail.com',
    to: recipientEmail,
    subject: 'Your Incident Report',
    html: emailContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export const handleComplaintSubmission = async (formData) => {
  const uniqueId = generateUniqueId();
  const emailContent = createEmailTemplate(formData, uniqueId);

  await sendEmail(formData.email, emailContent);

  return uniqueId;
};

const createEmailTemplate = (formData, uniqueId) => `
  <html>
    <body>
      <h1>Incident Report</h1>
      <p><strong>Unique ID:</strong> ${uniqueId}</p>
      <h2>Victim Details</h2>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Contact:</strong> ${formData.mobileNumber}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <h2>Incident Details</h2>
      <p><strong>Date:</strong> ${formData.incidentDate}</p>
      <p><strong>Type:</strong> ${formData.incidentType}</p>
      <p><strong>Details:</strong> ${formData.incidentDetails}</p>
      <p>Thank you for your report. We will get back to you shortly.</p>
    </body>
  </html>
`;
