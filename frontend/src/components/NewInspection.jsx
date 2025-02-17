
import  { useState, useEffect } from 'react';

import axios from 'axios';
import Navbar from './Navbar'; 
import Footer from './Footers';
import logo from './image/Logo.png'; 
//import { Document, Packer, Paragraph, TextRun } from 'docx'; // Import necessary classes from docx
import { Document, Packer, Paragraph, HeadingLevel } from 'docx';

import { useLocation } from 'react-router-dom';



const NewInspection = () => {
  const location = useLocation(); // Get the location object
  const queryParams = new URLSearchParams(location.search);
  const aktenzeichen = queryParams.get('aktenzeichen'); // Get the aktenzeichen from the URL

  // State to hold company details
  const [companyName, setCompanyName] = useState(''); // Company name from the previous page
  
  // State to hold the form data for inspection details
  const [inspectionData, setInspectionData] = useState({
    inspection_date: '',
    inspector_name: '',
    team_lead: '',
    additional_inspectors: '',
    authority: '',
    reference_number: '',
    introduction: '',
    smf_info: '',
    previous_inspection: '',
    findings: '',
    active_substances: '',
    conclusions: '',
    quality_management: '',
    personnel: '',
    equipment: '',
    documentation: '',
    production: '',
    quality_control: '',
    contract_testing: '',
    complaints: '',
    self_inspection: '',
    storage: '',
    other_aspects: '',
    site_description: '',
    samples_taken: '',
    critical_errors: '',
    serious_errors: '',
    other_errors: '',
    remarks: '',
  });

  const [isVisible, setIsVisible] = useState(false);
  // Fetch the company details using the Aktenzeichen
  useEffect(() => {
    
    if (aktenzeichen) {
      axios.get(`http://localhost:8000/api/companies?aktenzeichen=${aktenzeichen}`) // Adjust API endpoint as needed
        .then(response => {
          const company = response.data;
          setCompanyName(company.company_name); // Assuming company data includes company_name
        })
        .catch(error => {
          console.error('Error fetching company details:', error);
        });
    }
  }, [aktenzeichen]);

  // Toggle button visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form field change for inspection data
  const handleChange = (e) => {
    setInspectionData({
      ...inspectionData,
      [e.target.name]: e.target.value
    });
  };

  

  // Handle form submission to create a new inspection
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Include the Aktenzeichen with the inspection data
    const newInspection = {
      ...inspectionData,
      aktenzeichen // Pass the Aktenzeichen to link the inspection to the company
    };

    // Submit the inspection data to the backend
    axios.post('http://localhost:8000/api/inspections/', newInspection)
      .then(response => {
        console.log('Inspection created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating inspection:', error);
      });
  };

  // Function to download inspection details as a DOCX file
  const downloadDocx = () => {
    // Create a new Document instance
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: `Inspection Report for: ${companyName}`,
            heading: HeadingLevel.HEADING_1
          }),
          new Paragraph({
            text: `Aktenzeichen: ${aktenzeichen}`,
          }),
          // Add other inspection data to the document
          ...Object.entries(inspectionData).map(([key, value]) =>
            new Paragraph(`${key}: ${value}`)
          ),
        ],
      }],
    });
  
    // Generate the blob and trigger the download
    Packer.toBlob(doc).then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Inspection_Report.docx';
      a.click();
      window.URL.revokeObjectURL(url);
    }).catch(error => {
      console.error('Error generating the document:', error);
    });
  };
  



  return (
    
    <div>
        <Navbar />
        <div className="AItopImage">
                <div className="AIlogoImgae">
                <img src={logo} alt="Logo" className="logoImage" />
                <div><h1 className="grey">betriebsübersicht</h1></div>
                </div>
             </div>


             <form onSubmit={handleSubmit}>
      {/* Display the company name and Aktenzeichen directly */}
      <h2>{companyName}</h2>
      <p>Aktenzeichen: {aktenzeichen}</p>
      
    



     
     

{/* Inspector Name */}
<div className="findings-section">
  <label>
    Inspector Name:
    <input
      type="text"
      name="inspector_name"
      value={inspectionData.inspector_name}
      onChange={handleChange}
      required
      className="findings-input" // Optional: Add a class for consistent styling
    />
  </label>
</div>


         {/* Team and Authority Info */}
<div className="findings-section">
  <h2>Inspector Team and Authority Info</h2>

  {/* Team Lead Name */}
  <label>
    Team Lead Name:
    <input
      type="text"
      name="team_lead"
      value={inspectionData.team_lead}
      onChange={handleChange}
      className="findings-input" // Optional: Add a class for consistent styling
    />
  </label>

  {/* Additional Inspectors */}
  <div className="findings-section">
    <label>
      Additional Inspectors:
      <textarea
        name="additional_inspectors"
        value={inspectionData.additional_inspectors}
        onChange={handleChange}
        placeholder="List of other inspectors involved"
        className="findings-textarea" // Ensures consistent textarea styling
      />
    </label>
  </div>
</div>

           {/* Authority Name */}
<div className="findings-section">
  <label>
    Authority Name:
    <textarea
      name="authority"
      value={inspectionData.authority}
      onChange={handleChange}
      placeholder="Bezeichnung der zuständigen Behörde"
      className="findings-textarea" // Ensures consistent textarea styling
    />
  </label>
</div>


         {/* Reference Number */}
<div className="findings-section">
  <label>
    Reference Number:
    <input
      type="text"
      name="reference_number"
      value={inspectionData.reference_number}
      onChange={handleChange}
      placeholder="Zulassungsnummer or Herstellungserlaubnis"
      className="findings-input" // Ensures consistent input styling
    />
  </label>
</div>


        {/* Introduction */}
<div className="findings-section">
  <h2>Introduction</h2>
  <label>
    Introduction Text:
    <textarea
      name="introduction"
      value={inspectionData.introduction}
      onChange={(e) =>
        setInspectionData({
          ...inspectionData,
          introduction: e.target.value,
        })
      }
      placeholder="Short company introduction"
      className="findings-textarea"
    />
  </label>
</div>


        <div className="findings-section">
  <label className="findings-label">SMF Information:</label>
  <textarea
    name="smf_info"
    value={inspectionData.smf_info}
    onChange={handleChange}
    placeholder="SMF info, version and approval date"
    className="findings-textarea"
  />
</div>


<div className="findings-section">
  <label>
    Quality Management:
    <textarea
      name="quality_management"
      value={inspectionData.quality_management}
      onChange={handleChange}
      placeholder="Details about quality management"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Personnel:
    <textarea
      name="personnel"
      value={inspectionData.personnel}
      onChange={handleChange}
      placeholder="Details about personnel"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Equipment:
    <textarea
      name="equipment"
      value={inspectionData.equipment}
      onChange={handleChange}
      placeholder="Details about equipment"
      className="findings-textarea"
    />
  </label>
</div>


<div className="findings-section">
  <label>
    Documentation:
    <textarea
      name="documentation"
      value={inspectionData.documentation}
      onChange={handleChange}
      placeholder="Details about documentation"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Production:
    <textarea
      name="production"
      value={inspectionData.production}
      onChange={handleChange}
      placeholder="Details about production"
      className="findings-textarea"
    />
  </label>
</div>







<div className="findings-section">
  <label>
    Quality Control:
    <textarea
      name="quality_control"
      value={inspectionData.quality_control}
      onChange={handleChange}
      placeholder="Details about quality control"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Contract Testing:
    <textarea
      name="contract_testing"
      value={inspectionData.contract_testing}
      onChange={handleChange}
      placeholder="Details about contract testing"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Complaints:
    <textarea
      name="complaints"
      value={inspectionData.complaints}
      onChange={handleChange}
      placeholder="Details about complaints"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Self Inspection:
    <textarea
      name="self_inspection"
      value={inspectionData.self_inspection}
      onChange={handleChange}
      placeholder="Details about self inspection"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Storage:
    <textarea
      name="storage"
      value={inspectionData.storage}
      onChange={handleChange}
      placeholder="Details about storage"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Other Aspects:
    <textarea
      name="other_aspects"
      value={inspectionData.other_aspects}
      onChange={handleChange}
      placeholder="Other relevant aspects"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Site Description:
    <textarea
      name="site_description"
      value={inspectionData.site_description}
      onChange={handleChange}
      placeholder="Description of the site"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Samples Taken:
    <textarea
      name="samples_taken"
      value={inspectionData.samples_taken}
      onChange={handleChange}
      placeholder="Details of samples taken during the inspection"
      className="findings-textarea"
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Previous Inspection:
    <textarea
      name="previous_inspection"
      value={inspectionData.previous_inspection}
      onChange={handleChange}
      placeholder="Details about previous inspection"
      className="findings-textarea"
    />
  </label>
</div>







  {/* Active Substances Section */}
  <div className="findings-section">
  <label>
    Findings and Observations:
    <textarea
      name="findings"
      value={inspectionData.findings}
      onChange={handleChange}
      placeholder="Feststellungen und Beobachtungen des Inspektionsteams"
      className="findings-textarea" // Ensures consistent textarea styling
    />
  </label>
</div>

<div className="findings-section">
  <label>
    Active Substances (select applicable):
    <textarea
      name="active_substances"
      value={inspectionData.active_substances}
      onChange={handleChange}
      placeholder="chemisch synthetisierte Wirkstoffe, Wirkstoffe menschlicher Herkunft, etc."
      className="findings-textarea" // Ensures consistent textarea styling
    />
  </label>
</div>


       

{/* Conclusion Section */}
<div className="findings-section">
  <label>
    Conclusions:
    <textarea
      name="conclusion"
      value={inspectionData.conclusion}
      onChange={handleChange}
      placeholder="Zusammenfassung und Schlussfolgerungen"
      className="findings-textarea" // Ensures consistent textarea styling
    />
  </label>
</div>
          

{/* Critical Errors */}
<div className="findings-section">
    <label className="findings-label">Critical Errors:</label>
    <textarea
      name="critical_errors"
      value={inspectionData.critical_errors}
      onChange={handleChange}
      placeholder="Details of critical errors"
      className="findings-textarea"
    />
  </div>
  
  {/* Serious Errors */}
  <div className="findings-section">
    <label className="findings-label">Serious Errors:</label>
    <textarea
      name="serious_errors"
      value={inspectionData.serious_errors}
      onChange={handleChange}
      placeholder="Details of serious errors"
      className="findings-textarea"
    />
  </div>

          
{/* Other Errors */}
<div className="findings-section">
    <label className="findings-label">Other Errors:</label>
    <textarea
      name="other_errors"
      value={inspectionData.other_errors}
      onChange={handleChange}
      placeholder="Details of other errors"
      className="findings-textarea"
    />
  </div>


{/* Remarks */}
<div className="findings-section">
    <label className="findings-label">Remarks:</label>
    <textarea
      name="remarks"
      value={inspectionData.remarks}
      onChange={handleChange}
      placeholder="Additional remarks"
      className="findings-textarea"
    />
  </div>



        
{/* Submit button */}
<div className={`sticky-button-container ${isVisible ? 'visible' : ''}`}>
      <button className="action-button" type="submit">Save Inspection</button>
      <button className="action-button" type="button" onClick={downloadDocx}>Download DOCX</button>
    </div>
      </form>
      <Footer />
    </div>
    
  );
};

export default NewInspection;
