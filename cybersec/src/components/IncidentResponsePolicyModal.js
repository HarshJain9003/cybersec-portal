import React from 'react';
import './IncidentResponsePolicyModal.css'; // CSS for modal

const IncidentResponsePolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="policy-modal-overlay">
      <div className="policy-modal-content">
        <h2>Incident Response Policy</h2>
        <p><strong>Purpose:</strong> This document describes the responsibilities of all the members of the SAKEC for responding and reporting information security incidents.</p>
        <p><strong>Applicability:</strong> This policy applies to everyone who uses, stores, transmits, processes, and accesses SAKEC data. This includes SAKEC employees, students, temporary workers, contractors, and anyone authorized to access SAKEC's information or assets.</p>
        <p><strong>Definitions:</strong></p>
        <ul>
          <li><strong>Event:</strong> A security event is an occurrence or change of a particular set of circumstances, which can have positive or negative causes.</li>
          <li><strong>Incident:</strong> An incident can be unauthorized access, destruction of information, data breaches, computer system breaches, etc.</li>
          <li><strong>Information security:</strong> Preservation of confidentiality, integrity, and availability of information.</li>
          <li><strong>Information security incident:</strong> A single or series of unwanted or unexpected information security events that significantly threaten information security.</li>
          <li><strong>Incident response:</strong> A set of information security policies and procedures to limit or eliminate security breaches.</li>
        </ul>
        <p><strong>Policy Statement:</strong></p>
        <ol>
          <li>All members of SAKEC must report any suspected or confirmed data breaches or security incidents involving SAKEC data to the responsible team.</li>
          <li>Members must cooperate with the incident response team and must not interfere with the investigation.</li>
          <li>During investigations, the responsible team may retrieve relevant communications or records without further notice or approval.</li>
          <li>Members should participate in training, awareness, and exercises related to incident response.</li>
          <li>SAKEC must ensure these training programs are well-promoted to all members.</li>
          <li>Failure to adhere to policies may result in sanctions or disciplinary actions.</li>
        </ol>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default IncidentResponsePolicyModal;
