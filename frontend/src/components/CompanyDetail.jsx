

import Navbar from "./Navbar";
import Footer from './Footers'; 
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import { FaArrowRight } from 'react-icons/fa';
import logo from './image/Logo.png'; 
import { AiOutlinePlus } from 'react-icons/ai';
import { BiCube } from 'react-icons/bi';
import { FiArrowUpRight } from 'react-icons/fi'; // Import for FiArrowUpRight

const handleNavigate = () => {
    window.location.href = "/Home";
};

const CompanyDetail = () => {
    const { id } = useParams();
    const [company, setCompany] = useState(null);
    const [checklists, setChecklists] = useState([
        {
            name: 'Herstellung von Fertigarzneimitteln',
            humanArzneimittel: false,
            prüfpräparate: false,
            tierarzneimittel: false,
            subcategories: [
                { name: 'Sterile Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
                { name: 'Nicht sterile Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
                { name: 'Biologische Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
            ]
        },
        { name: 'Sterilisation von Hilfsstoffen', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Primärverpacken', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Sekundärverpacken', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Qualitätskontrolluntersuchungen (Labor)', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Einfuhr', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        {
            name: 'Sonstige',
            humanArzneimittel: false,
            prüfpräparate: false,
            tierarzneimittel: false,
            hasTextInput: true // Custom field for "Sonstige"
        },
    ]);
    
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/companies/${id}/`)
            .then(response => {
                setCompany(response.data);
            })
            .catch(error => {
                console.error('Error fetching company details:', error);
            });
    }, [id]);

    // const handleCreateInspection = (companyId) => {
    //     navigate(`/new-inspection?companyId=${companyId}`); // Pass the company ID as a query parameter
    // };

    // Function to handle creating a new inspection
    const handleCreateInspection = () => {
        if (company && company.aktenzeichen) {
            // Navigate to the new inspection page with the company aktenzeichen
            navigate(`/new-inspection?aktenzeichen=${company.aktenzeichen}`);
        } else {
            console.error('Aktenzeichen is not available');
        }
    };


    const handleCheckboxChange = (index, field, subIndex = null) => {
        const newChecklists = [...checklists];
        if (subIndex !== null) {
            // For subcategories
            newChecklists[index].subcategories[subIndex][field] = !newChecklists[index].subcategories[subIndex][field];
        } else {
            // For main categories
            newChecklists[index][field] = !newChecklists[index][field];
        }
        setChecklists(newChecklists);
    };

    if (!company) {
        return <div>Loading...</div>;
    }
    return (
        <>
          <Navbar />

         

          <div className="AItopImage">
                <div className="AIlogoImgae">
                <img src={logo} alt="Logo" className="logoImage" />
                <div><h1 className="grey">{company.name}</h1></div>
                </div>

               



                <div className="AIsearchbuttondiv">
  <button onClick={handleNavigate} className="AIbutton">
    Back Home <FaArrowRight className="AIarrowIcon" />
  </button>
</div>



                </div>

               
                <div class="flex-container">
                    <div className="right_screen">

                <div className="DatenLogininput">
    {/* Company Name */}
    {/* <h1 className="Logininputdivs">{company.name}</h1> */}
    {/* Company Details */}
    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Aktenzeichen</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.aktenzeichen} 
                readOnly 
            />
        </div>
    </div>

    {/* <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Benutzername</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.benutzername} 
                readOnly 
            />
        </div>
    </div> */}

    <div className="DataLogininputdivs DataStreetdiv">
        <div className="DataStreetdiv1">
            <p className="Logininputdivs inputHeadings">Straße</p>
            <div className="borders">
                <input 
                    className="inputmainpages" 
                    type="text" 
                    value={company.strasse} 
                    readOnly 
                />
            </div>
        </div>
        <div className="DataStreetdiv2">
            <p className="Logininputdivs inputHeadings">Nummer</p>
            <div className="borders">
                <input 
                    className="inputmainpages" 
                    type="text" 
                    value={company.nummer} 
                    readOnly 
                />
            </div>
        </div>
    </div>

    <div className="DataLogininputdivs DataPostzahlLand">
    <div className="DataPostzahldiv">
        <p className="Logininputdivs inputHeadings">Postzahl</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.postzahl} 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLanddiv">
        <p className="Logininputdivs inputHeadings">Land</p>
        <div className="borders">
            <select className="inputmainpages">
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Italy">Italy</option>
                <option value="Spain">Spain</option>
                <option value="Netherlands">Netherlands</option>
                {/* Add more options as needed */}
            </select>
        </div>
    </div>
    </div>





    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Identifikationsnummer</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.duns_nr} 
                placeholder="DUNS Nr." 
                readOnly 
            />
        </div>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.gps_koordinaten} 
                placeholder="GPS Koordinaten" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">EudraGMDP Site Reference Number</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.eudra_reference_number} 
                placeholder="Referenznummer" 
                readOnly 
            />
        </div>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.org_id} 
                placeholder="ORG-ID" 
                readOnly 
            />
        </div>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.loc_id} 
                placeholder="LOC-ID" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Betriebsstätte</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.betriebstaette} 
                placeholder="Betriebstätte" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Kontaktperson</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.kontaktperson} 
                placeholder="Kontaktperson" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Telephon</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.telefon} 
                placeholder="000000000" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Fax</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.fax} 
                placeholder="0000000000" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Email</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="email" 
                value={company.email} 
                placeholder="firma@firma.com" 
                readOnly 
            />
        </div>
    </div>

    <div className="DataLogininputdivs">
        <p className="Logininputdivs inputHeadings">Notfallnummer</p>
        <div className="borders">
            <input 
                className="inputmainpages" 
                type="text" 
                value={company.notfallnummer} 
                placeholder="Notfallnummer" 
                readOnly 
            />
        </div>
    </div>
    </div>

{/* <div className="right-half"> Right content wrapper */}


    <h2>Betriebliche Aktivitäten</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Aktivitäten</th>
                            <th>Humanarzneimittel</th>
                            <th>Prüfpräparate</th>
                            <th>Tierarzneimittel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {checklists.map((item, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={item.humanArzneimittel}
                                            onChange={() => handleCheckboxChange(index, 'humanArzneimittel')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={item.prüfpräparate}
                                            onChange={() => handleCheckboxChange(index, 'prüfpräparate')}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={item.tierarzneimittel}
                                            onChange={() => handleCheckboxChange(index, 'tierarzneimittel')}
                                        />
                                    </td>
                                </tr>

                                {/* Render subcategories with checkboxes */}
                                {item.subcategories && item.subcategories.map((sub, subIndex) => (
                                    <tr key={subIndex} className="subcategory">
                                        <td>-- {sub.name}</td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={sub.humanArzneimittel}
                                                onChange={() => handleCheckboxChange(index, 'humanArzneimittel', subIndex)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={sub.prüfpräparate}
                                                onChange={() => handleCheckboxChange(index, 'prüfpräparate', subIndex)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={sub.tierarzneimittel}
                                                onChange={() => handleCheckboxChange(index, 'tierarzneimittel', subIndex)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
              


                </div >


                <div className="space_create">

                <div 
    className="borders clickableInspectionsdiv" 
    onClick={handleCreateInspection} 
    style={{ cursor: 'pointer' }} // Add cursor style to indicate it's clickable
>
    <h1 className="HomepageHeadingtext">
        Neue <p className="HomepageHeadingtextparagraph">Inspektion erstellen</p>
    </h1>
    <div className="homePageIcon">
        <AiOutlinePlus className="homeicon" />
    </div>
</div>

    <div className="borders clickableInspectionsdiv">
        <h1 className="HomepageHeadingtext">Aktive <p className="HomepageHeadingtextparagraph">Inspektion öffnen</p></h1>
        <div className="homePageIcon">
            <FiArrowUpRight className="homeicon" />
        </div>
    </div>

    <div className="borders DataclickableInspectionsdiv">
        <h1 className="HomepageHeadingtext">Inspektionsberichte </h1>
        <div className="homeIput">
            <div className="searchInput">
                <p className="Logininputdivs inputHeadings"></p>
                <div className="borders HomepageInput">
                    <input type="text" placeholder="Bericht wählen" className="inputmainpages" />
                </div>
            </div>
            <div className="searchbuttondiv">
                <button className="searchButton">Öffnen</button>
            </div>
        </div>
    </div>










    <div className="borders clickableInspectionsdiv">
        <h1 className="HomepageHeadingtext">Räume <p className="HomepageHeadingtextparagraph">mangen</p></h1>
        <div className="homePageIcon">
            <BiCube className="homeicon" />
        </div>
    </div>




    
   

   

</div>
</div>





       

            
      
        <Footer />
        </>
    );
};

export default CompanyDetail;
