import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import Footer from './Footers';
import logo from './image/Logo1.png';  //  the logo 
import '../App.css';

export default function Login() {
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const navigate = useNavigate(); // Initialize useNavigate

    const handleNavigate = () => {
        // Navigate to the home page
        if (username && password) {
            navigate('/Home');
        } else {
            alert('Please enter your username and password.'); // Optional alert for empty fields
        }
    };

    return (
        <>
            <Navbar />

    


            <div className="Loginpage">
            <img src={logo} alt="Logo" className="logoImage" />
                <div className="Logindetails borders">
                    <div className="Logininput Logindetails">
                        <div className="Logininputdivs">
                            <p className="Logininputdivs inputHeadings">Benutzername</p>
                            <div className="borders">
                                <input 
                                    type="text" 
                                    placeholder="Benutzername" 
                                    className="inputmainpages" 
                                    value={username} 
                                    onChange={(e) => setUsername(e.target.value)} // Update username state
                                />
                            </div>
                        </div>
                        <div className="Logininputdivs login">
                            <p className="Logininputdivs inputHeadings">Passwort</p>
                            <div className="borders">
                                <input 
                                    className="inputmainpages" 
                                    type="password" // Changed to password type
                                    placeholder="Passwort" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttondiv Logininputdivs">
                        <button className="Loginbutton" onClick={handleNavigate}>Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
