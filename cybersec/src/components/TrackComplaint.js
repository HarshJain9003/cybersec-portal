import React, { useState } from 'react';
import axios from 'axios';
import './TrackingPage.css';

const TrackComplaint = () => {
  const [submissionId, setSubmissionId] = useState('');
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/trackComplaint/${submissionId}`);
      setComplaint(response.data);
    } catch (err) {
      console.error('Error details:', err);
      setComplaint(null);
      if (err.response) {
        setError(err.response.data.error || 'Complaint not found or an error occurred');
      } else {
        setError('Network error or server not reachable');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tracking-page">
      <h1>Track Complaint</h1>
      <div className="tracking-form">
        <input
          type="text"
          placeholder="Enter submission ID"
          value={submissionId}
          onChange={(e) => setSubmissionId(e.target.value)}
          disabled={loading}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {complaint ? (
        <div className="complaint-details">
          <h2>Complaint Details</h2>
          <p><strong>Full Name:</strong> {complaint.victimDetails?.fullName || 'N/A'}</p>
          <p><strong>Mobile Number:</strong> {complaint.victimDetails?.mobileNumber || 'N/A'}</p>
          <p><strong>Email:</strong> {complaint.victimDetails?.email || 'N/A'}</p>
          <p><strong>Has Screenshots:</strong> {complaint.victimDetails?.hasScreenshots === 'yes' ? 'Yes' : 'No'}</p>
          {complaint.victimDetails?.screenshots && (
            <p><strong>Screenshots:</strong> <a href={complaint.victimDetails.screenshots} target="_blank" rel="noopener noreferrer">View Screenshot</a></p>
          )}
          <h3>Incident Details</h3>
          <p><strong>Incident Date:</strong> {complaint.incidentDetails?.incidentDate || 'N/A'}</p>
          <p><strong>Incident Type:</strong> {complaint.incidentDetails?.incidentType || 'N/A'}</p>
          {complaint.incidentDetails?.incidentSubtype && (
            <p><strong>Sub-incident Type:</strong> {complaint.incidentDetails?.incidentSubtype || 'N/A'}</p>
          )}
          <p><strong>Incident Details:</strong> {complaint.incidentDetails?.incidentDetails || 'N/A'}</p>

          {/* Status Log Section */}
          {complaint.statusLog && complaint.statusLog.length > 0 && (
            <div className="status-log">
              <h3>Status Log</h3>
              <ul>
                {complaint.statusLog.map((log, index) => (
                  <li key={index}>
                    <p><strong>Date:</strong> {log.date || 'N/A'}</p>
                    <p><strong>Status:</strong> {log.status || 'N/A'}</p>
                    <p><strong>Details:</strong> {log.details || 'N/A'}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        !loading && <p>No complaint details available</p>
      )}
    </div>
  );
};

export default TrackComplaint;
