import React, { useState } from 'react';
import axios from 'axios';

const NewInspection = () => {
  // State to hold the form data for inspection details
  const [inspectionData, setInspectionData] = useState({
    company: '',
    inspection_date: '',
    inspector_name: '',
    notes: '',
    authority: '',        // New fields for authority, introduction, and other sections
    introduction: '',
    previous_inspection: '',
    personnel: '',
    findings: '',
    active_substances: '', // Checkbox for the list of active substances
    conclusion: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInspectionData({ ...inspectionData, [name]: value });
  };

  // Save inspection data to backend
  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/inspections/', inspectionData);
      alert('Inspection data saved successfully!');
    } catch (error) {
      console.error('Error saving inspection data', error);
    }
  };

  // Download the report as DOCX
  const handleDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/generate-inspection-doc/', inspectionData, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'GMP_Inspektionsbericht.docx');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating report', error);
    }
  };

  return (
    <div>
      <h1>Create New GMP Inspection</h1>
      <form onSubmit={handleSave}>
        {/* Basic Information */}
        <div>
          <label>
            Company ID:
            <input
              type="text"
              name="company"
              value={inspectionData.company}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Inspection Date:
            <input
              type="date"
              name="inspection_date"
              value={inspectionData.inspection_date}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Inspector Name:
            <input
              type="text"
              name="inspector_name"
              value={inspectionData.inspector_name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Inspector and Authority Sections */}
        <div>
          <label>
            Authority:
            <textarea
              name="authority"
              value={inspectionData.authority}
              onChange={handleChange}
              placeholder="Bezeichnung der zuständigen Behörde"
            />
          </label>
        </div>

        {/* Introduction Section */}
        <div>
          <label>
            Introduction:
            <textarea
              name="introduction"
              value={inspectionData.introduction}
              onChange={handleChange}
              placeholder="Kurzbeschreibung des Unternehmens"
            />
          </label>
        </div>

        {/* Non-EU Inspection and Previous Inspection Sections */}
        <div>
          <label>
            Previous Inspection:
            <textarea
              name="previous_inspection"
              value={inspectionData.previous_inspection}
              onChange={handleChange}
              placeholder="Bericht über vorhergehende Inspektion"
            />
          </label>
        </div>

        {/* Active Substances Section */}
        <div>
          <label>
            Findings and Observations:
            <textarea
              name="findings"
              value={inspectionData.findings}
              onChange={handleChange}
              placeholder="Feststellungen und Beobachtungen des Inspektionsteams"
            />
          </label>
        </div>

        <div>
          <label>
            Active Substances (select applicable):
            <textarea
              name="active_substances"
              value={inspectionData.active_substances}
              onChange={handleChange}
              placeholder="chemisch synthetisierte Wirkstoffe, Wirkstoffe menschlicher Herkunft, etc."
            />
          </label>
        </div>

        {/* Conclusion Section */}
        <div>
          <label>
            Conclusion:
            <textarea
              name="conclusion"
              value={inspectionData.conclusion}
              onChange={handleChange}
              placeholder="Zusammenfassung und Schlussfolgerungen"
            />
          </label>
        </div>

        {/* Save and Download Buttons */}
        <button type="submit">Save Inspection</button>
        <button onClick={handleDownload}>Download Report</button>
      </form>
    </div>
  );
};

export default NewInspection;
