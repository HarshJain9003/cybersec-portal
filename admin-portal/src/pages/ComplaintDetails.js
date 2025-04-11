import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ComplaintDetails.css';


const ComplaintDetails = () => {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await fetch(`/api/complaints/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setComplaint(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComplaint();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Complaint Details</h2>
      {complaint ? (
        <div>
          <h3>ID: {complaint.submissionId}</h3>
          <p>Date: {new Date(complaint.created_at).toLocaleDateString()}</p>
          <h4>Victim Details</h4>
          <p>Full Name: {complaint.victimDetails.fullName}</p>
          <p>Mobile Number: {complaint.victimDetails.mobileNumber}</p>
          <p>Email: {complaint.victimDetails.email}</p>
          <p>Has Screenshots: {complaint.victimDetails.hasScreenshots}</p>
          {complaint.victimDetails.screenshots && (
            <img src={complaint.victimDetails.screenshots} alt="Screenshot" />
          )}
          <h4>Incident Details</h4>
          <p>Incident Date: {complaint.incidentDetails.incidentDate}</p>
          <p>Incident Type: {complaint.incidentDetails.incidentType}</p>
          <p>Incident Subtype: {complaint.incidentDetails.incidentSubtype}</p>
          <p>Other Incident Type: {complaint.incidentDetails.otherIncidentType}</p>
          <p>Platform: {complaint.incidentDetails.platform}</p>
          <p>Details: {complaint.incidentDetails.incidentDetails}</p>
        </div>
      ) : (
        <p>No complaint details available.</p>
      )}
    </div>
  );
};

export default ComplaintDetails;
