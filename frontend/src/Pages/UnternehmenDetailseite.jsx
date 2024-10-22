import Navbar from "./navbar";
import Footer from "./Footers";
import "../App.css";
import { FaArrowRight } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { MdShowChart } from 'react-icons/md';
import { FiArrowUpRight } from 'react-icons/fi';
import { BiCube } from 'react-icons/bi';
import React, { useState } from 'react';

export default function UnternehmenDetailseite() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newActivity, setNewActivity] = useState("");

    const handleNavigate = () => {
        window.location.href = "/Home";
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleNavigateInspektionsmodule = () => {
        window.location.href = "/Inspektionsmodule";
    };

    // Define the initial state for checklists
    const [checklists, setChecklists] = useState([
        { name: 'Herstellung von Fertigarzneimitteln', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Sterile Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Nicht sterile Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Biologische Produkte', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Sterilisation von Hilfsstoffen', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Primärverpacken', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Sekundärverpacken', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Qualitätskontrolluntersuchungen (Labor)', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Einfuhr', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Einfuhr', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Einfuhr', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        { name: 'Einfuhr', humanArzneimittel: false, prüfpräparate: false, tierarzneimittel: false },
        // Add more rows as necessary
    ]);

    // Handle checkbox change
    const handleCheckboxChange = (index, field) => {
        const newChecklists = [...checklists];
        newChecklists[index][field] = !newChecklists[index][field];
        setChecklists(newChecklists);
    };

    const addActivity = () => {
        if (newActivity) {
            const newChecklist = {
                name: newActivity,
                humanArzneimittel: false,
                prüfpräparate: false,
                tierarzneimittel: false
            };
            setChecklists([...checklists, newChecklist]);
            setNewActivity(""); // Reset input field after adding
        }
    };

    return (
        <>
            <Navbar />
            <div className="AItopImage">
                <div className="AIlogoImgae">
                    <img src="./src/Image/Logo2.png" alt="Logo" />
                </div>
                <div className="AIsearchbuttondiv">
                    <button onClick={handleNavigate} className="AIbutton">Back Home <FaArrowRight /></button>
                </div>
            </div>

            <div className="Datenmain ">
                <div className="Datenbigdiv borders ">
                    <h1>Stammdaten</h1>

                    <div className="DatenLogininput ">
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Aktenzeichen</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Aktenzeichen" />
                            </div>
                        </div>

                        <div className="DataLogininputdivs">
                            <p className="Logininputdivs inputHeadings">Firmennamen</p>
                            <div className="borders">
                                <input type="text" placeholder="Benutzername" className="inputmainpages" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs DataStreetdiv ">
                            <div className="DataStreetdiv1">
                                <p className="Logininputdivs inputHeadings">Strße</p>
                                <div className="borders">
                                    <input className="inputmainpages" type="text" placeholder="Strße" />
                                </div>
                            </div>
                            <div className="DataStreetdiv2">
                                <p className="Logininputdivs inputHeadings">Nummer</p>
                                <div className="borders">
                                    <input className="inputmainpages" type="text" placeholder="986075" />
                                </div>
                            </div>
                        </div>

                        <div className="DataLogininputdivs DataStreetdiv ">
                            <div className="DataStreetdiv2">
                                <p className="Logininputdivs inputHeadings">Postzahl</p>
                                <div className="borders">
                                    <input className="inputmainpages" type="text" placeholder="0000" />
                                </div>
                            </div>
                            <div className="DataStreetdiv1">
                                <p className="Logininputdivs inputHeadings">Land</p>
                                <div className="borders">
                                    <input className="inputmainpages" type="text" placeholder="Land" />
                                </div>
                            </div>
                        </div>

                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Identifikationsnummer</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Identifikationsnummer" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">ELUDRAGMDP Site Reference Number</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Referenznummer" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Betriebstätte</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Betriebstätte" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Kontaktperson</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Kontaktperson" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Telephon</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="000000000" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Fax</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="0000000000" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Email</p>
                            <div className="borders">
                                <input className="inputmainpages" type="email" placeholder="firma@firma.com" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Notfallnummer</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="00000000" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Zulassungsnummer</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Zulassungsnummer" />
                            </div>
                        </div>
                        <div className="DataLogininputdivs ">
                            <p className="Logininputdivs inputHeadings">Herstellungserlaubnis</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Herstellungserlaubnis" />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="DatenclickableInspections">
                    <div className="borders clickableInspectionsdiv" onClick={toggleModal}>
                        <h1 className="HomepageHeadingtext">Betriebliche <p className="HomepageHeadingtextparagraph">Aktivitäten</p></h1>
                        <div className="homePageIcon">
                            <MdShowChart className="homeicon" />
                        </div>
                    </div>
                    <div className="borders clickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Neue <p className="HomepageHeadingtextparagraph">Inspektion erstellen</p></h1>
                        <div className="homePageIcon">
                            <AiOutlinePlus className="homeicon" />
                        </div>
                    </div>
                    <div className="borders clickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Aktive <p className="HomepageHeadingtextparagraph">Inspektion öffnen</p></h1>
                        <div className="homePageIcon">
                            <FiArrowUpRight className="homeicon"   onClick={handleNavigateInspektionsmodule} 
                            />
                        </div>
                    </div>
                    <div className="borders DataclickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Inspektionsbericht </h1>
                        <div className="homeIput">
                            <div className="searchInput">
                                <p className="Logininputdivs inputHeadings">Benutzername</p>
                                <div className="borders HomepageInput">
                                    <input type="text" placeholder="Bericht wählen" className="inputmainpages" />
                                </div>
                            </div>
                            <div className="searchbuttondiv">
                                <button className="searchButton">Suche</button>
                            </div>
                        </div>
                    </div>
                    <div className="borders clickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Räume <p className="HomepageHeadingtextparagraph">mangel</p></h1>
                        <div className="homePageIcon">
                            <BiCube className="homeicon" />
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h1>Betriebliche Aktivitäten</h1>
                            <AiOutlineClose onClick={toggleModal} className="close-modal" />
                        </div>
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
                                    <tr key={index}>
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
                                ))}
                            </tbody>
                        </table>
                        <div className="add-activity">
                            <input
                                type="text"
                                placeholder="Neue Aktivität"
                                value={newActivity}
                                onChange={(e) => setNewActivity(e.target.value)}
                            />
                            <button onClick={addActivity}>Hinzufügen</button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}
