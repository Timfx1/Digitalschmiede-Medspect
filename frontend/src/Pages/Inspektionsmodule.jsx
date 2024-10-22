import React, { useState } from 'react';
import Pdfgenerate from './Pdfgenerate';
import "../App.css";
import Navbar from "./navbar";
import Footer from "./Footers";
import { FaArrowRight } from 'react-icons/fa';



function Print() {
    const [formData, setFormData] = useState({
        companyAZ: '',
        companyName: '',
        address: '',
        Identificationnumber: '',
        SiteReferencenumber: '',
        additionalInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleNavigateUnternehmenDetailseite = () => {
        window.location.href = "/UnternehmenDetailseite";
    };
    return (
        <>
            <Navbar />
            <div className="AItopImage">
                <div className="AIlogoImgae">
                    <img src="./src/Image/Logo3.png" alt="Logo" />
                </div>
                <div className="AIsearchbuttondiv">
                    <button onClick={handleNavigateUnternehmenDetailseite} className="AIbutton">Leave Inspektion<FaArrowRight /></button>
                </div>
            </div>
            <div className='sidePicturePrint'>
                <div className='sidepicturePrintImage'>
                    <img src="./src/Image/Menu.png" alt="Logo" />
                </div>
                <div style={{ padding: '20px' }}>
                    <form style={{ marginBottom: '20px' }}>
                        <div>
                            <label>AZ:</label>

                            <input type="number" name="companyAZ" value={formData.companyAZ} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Firmenname:</label>
                            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Adresse:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Identification number:</label>
                            <input type="text" name="Identificationnumber" value={formData.Identificationnumber} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Site Reference number:</label>
                            <input type="number" name="SiteReferencenumber" value={formData.SiteReferencenumber} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Zusätzliche Informationen:</label>
                            <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
                        </div>
                    </form>

                    <Pdfgenerate formData={formData} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Print;
