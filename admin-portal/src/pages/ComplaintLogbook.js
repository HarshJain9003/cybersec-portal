// src/pages/ComplaintLogbook.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ComplaintLogbook.css';

const ComplaintLogbook = ({ token }) => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('/api/complaints', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setComplaints(data);
      } catch (err) {
        console.error('Failed to fetch complaints:', err);
      }
    };

    fetchComplaints();
  }, [token]);

  return (
    <div>
      <h2>Complaint Logbook</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date of Reporting</th>
            <th>Date of Incident</th>
            <th>Type of attack</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint._id}>
              <td>{complaint.submissionId}</td>
              <td>{new Date(complaint.created_at).toLocaleDateString()}</td>
              <td>{complaint.incidentDetails.incidentDate}</td>
              <td>{complaint.incidentDetails.incidentType}</td>
              <td>{complaint.status}</td>
              <td><Link to={`/complaints/${complaint._id}`}>View Details</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintLogbook;
