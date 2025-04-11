import React, { useState } from 'react';
import './RegisterComplaint.css';

const RegisterComplaint = () => {
  const [step, setStep] = useState(1);
  const [victimDetails, setVictimDetails] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    hasScreenshots: '',
    screenshots: null,
  });
  const [incidentDetails, setIncidentDetails] = useState({
    incidentDate: '',
    incidentType: '',
    incidentSubtype: '',
    otherIncidentType: '',
    platform: '',
    incidentDetails: '',
  });
  const [declarationAccepted, setDeclarationAccepted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleDeclarationChange = (event) => {
    setDeclarationAccepted(event.target.checked);
  };

  const validateMobileNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(number)) {
      setMobileNumberError('Mobile number must be exactly 10 digits.');
    } else {
      setMobileNumberError('');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async () => {
    if (!declarationAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }

    if (!victimDetails.fullName || !victimDetails.mobileNumber || !victimDetails.email || !incidentDetails.incidentDate || !incidentDetails.incidentType) {
      alert('Please fill out all required fields.');
      return;
    }

    if (mobileNumberError || emailError) {
      alert('Please provide valid inputs.');
      return;
    }

    const formData = new FormData();
    formData.append('victimDetails', JSON.stringify(victimDetails));
    formData.append('incidentDetails', JSON.stringify(incidentDetails));

    if (victimDetails.screenshots) {
      formData.append('screenshots', victimDetails.screenshots);
    }

    try {
      const response = await fetch('http://localhost:5000/sendComplaint', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionId(result.uniqueId);
        alert(`Complaint Submitted! Your Unique ID is: ${result.uniqueId}`);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('There was an error submitting your complaint. Please try again later.');
    }
  };

  return (
    <div className="register-complaint-page">
      <h2>Register Complaint</h2>

      {step === 1 && (
        <div className="form-section">
          <h3>Victim Details</h3>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={victimDetails.fullName}
            onChange={(e) => setVictimDetails({ ...victimDetails, fullName: e.target.value })}
            required
          />

          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={victimDetails.mobileNumber}
            onChange={(e) => {
              setVictimDetails({ ...victimDetails, mobileNumber: e.target.value });
              validateMobileNumber(e.target.value);
            }}
            required
          />
          
          {/* Error message placed below the mobile number field */}
          {mobileNumberError && <p className="error">{mobileNumberError}</p>}

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={victimDetails.email}
            onChange={(e) => {
              setVictimDetails({ ...victimDetails, email: e.target.value });
              validateEmail(e.target.value);
            }}
            required
          />
          
          {/* Error message placed below the email field */}
          {emailError && <p className="error">{emailError}</p>}

          <label>Do you have screenshots?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="screenshots"
                value="yes"
                onChange={(e) => setVictimDetails({ ...victimDetails, hasScreenshots: e.target.value })}
              />{' '}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="screenshots"
                value="no"
                onChange={(e) => setVictimDetails({ ...victimDetails, hasScreenshots: e.target.value })}
              />{' '}
              No
            </label>
          </div>

          {victimDetails.hasScreenshots === 'yes' && (
            <>
              <label htmlFor="screenshots">Upload Screenshots:</label>
              <input
                type="file"
                id="screenshots"
                onChange={(e) => setVictimDetails({ ...victimDetails, screenshots: e.target.files[0] })}
              />
            </>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="form-section">
          <h3>Incident Details</h3>
          <label htmlFor="incidentDate">Incident Date:</label>
          <input
            type="date"
            id="incidentDate"
            value={incidentDetails.incidentDate}
            onChange={(e) => setIncidentDetails({ ...incidentDetails, incidentDate: e.target.value })}
            required
          />

          <label htmlFor="incidentType">Incident Type:</label>
          <select
            id="incidentType"
            value={incidentDetails.incidentType}
            onChange={(e) => setIncidentDetails({ ...incidentDetails, incidentType: e.target.value })}
            required
          >
            <option value="">Select Incident Type</option>
            <option value="hacking">Hacking</option>
            <option value="image-abuse">Image Abuse</option>
            <option value="sexual-abuse">Sexual Abuse</option>
            <option value="identity-theft">Identity Theft</option>
            <option value="other">Other</option>
          </select>

          {incidentDetails.incidentType && (
            <>
              <label htmlFor="incidentSubtype">Sub-incident Type:</label>
              <select
                id="incidentSubtype"
                value={incidentDetails.incidentSubtype}
                onChange={(e) => setIncidentDetails({ ...incidentDetails, incidentSubtype: e.target.value })}
              >
                <option value="">Select Sub-incident Type</option>
                <option value="morphing">Morphing</option>
                <option value="fake-profile">Fake Profile</option>
                <option value="sextortion">Sextortion</option>
                <option value="sexting">Sexting</option>
                <option value="phishing">Phishing</option>
                <option value="scamming">Scamming</option>
              </select>
            </>
          )}

          <label htmlFor="incidentDetails">Incident Details:</label>
          <textarea
            id="incidentDetails"
            value={incidentDetails.incidentDetails}
            onChange={(e) => setIncidentDetails({ ...incidentDetails, incidentDetails: e.target.value })}
            required
          ></textarea>
        </div>
      )}

      {step === 3 && (
        <div className="form-section">
          <h3>Preview Your Complaint</h3>
          <div className="complaint-preview">
            <h4>Victim Details</h4>
            <p><strong>Full Name:</strong> {victimDetails.fullName}</p>
            <p><strong>Mobile Number:</strong> {victimDetails.mobileNumber}</p>
            <p><strong>Email:</strong> {victimDetails.email}</p>

            <h4>Incident Details</h4>
            <p><strong>Incident Date:</strong> {incidentDetails.incidentDate}</p>
            <p><strong>Incident Type:</strong> {incidentDetails.incidentType}</p>
            {incidentDetails.incidentSubtype && (
              <p><strong>Sub-incident Type:</strong> {incidentDetails.incidentSubtype}</p>
            )}
            <p><strong>Details:</strong> {incidentDetails.incidentDetails}</p>

            {victimDetails.hasScreenshots === 'yes' && victimDetails.screenshots && (
              <>
                <p><strong>Attached Screenshots:</strong> {victimDetails.screenshots.name}</p>
                <img
                  src={URL.createObjectURL(victimDetails.screenshots)}
                  alt="Screenshot Preview"
                  className="screenshot-preview"
                />
              </>
            )}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="form-section">
          <h3>Declaration</h3>
          <label>
            <input
              type="checkbox"
              checked={declarationAccepted}
              onChange={handleDeclarationChange}
            />
            I accept the terms and conditions
          </label>

          <button onClick={handleSubmit}>Submit</button>

          {submissionId && (
            <div className="submission-confirmation">
              <p>Your complaint has been submitted successfully!</p>
              <p>Your Unique ID is: {submissionId}</p>
            </div>
          )}
        </div>
      )}

      <div className="form-navigation">
        {step > 1 && <button onClick={handlePreviousStep}>Back</button>}
        {step < 4 && <button onClick={handleNextStep}>Next</button>}
      </div>
    </div>
  );
};

export default RegisterComplaint;
