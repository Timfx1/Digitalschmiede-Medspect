import "../App.css";
import Navbar from "./navbar";
import Footer from "./Footers";


export default function Login() {

    const handleNavigate = () => {
        window.location.href = "/Home";
    };

    return (

        <>

            <Navbar />


            <div className="Loginpage ">

                <img src="./src/Image/Full Logo Medspect.png" alt="Logo" className="logoImgae" />

                <div className="Logindetails borders" >
                    <div className="Logininput Logindetails">
                        <div className="Logininputdivs">
                            <p className="Logininputdivs inputHeadings">Benutzername</p>
                            <div className="borders">
                                <input type="text" placeholder="Benutzername" className="inputmainpages"/>
                            </div>
                            </div>
                        <div className="Logininputdivs login">
                            <p className="Logininputdivs inputHeadings">Passwort</p>
                            <div className="borders">
                                <input className="inputmainpages" type="text" placeholder="Passwort" />
                            </div>
                        </div>
                    </div >
                    <div className="buttondiv Logininputdivs">
                        <button className="Loginbutton" onClick={handleNavigate}>Login</button>
                    </div>

                </div>

            </div>

            <Footer />


          
        </>
    );
}