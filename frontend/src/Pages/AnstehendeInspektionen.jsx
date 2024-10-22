import Navbar from "./navbar"
import Footer from "./Footers"
import "../App.css";
import { FaArrowRight  } from 'react-icons/fa';
import { AiOutlineFilter } from 'react-icons/ai';


export default function AnstehendeInspectionen() {

    const handleNavigate = () => {
        window.location.href = "/Home";
    };

    return (
        <>
            <Navbar />
            <div className="AItopImage">
                <div className="AIlogoImgae">
                <img src="./src/Image/Logo2.png" alt="Logo"  /></div>
                <div className="AIsearchbuttondiv"><button onClick={handleNavigate} className="AIbutton">Back Home    <FaArrowRight /> </button></div>
            </div>

            <div className="borders AIhomeIput">
                <h1 className="AIpageHeadingtext">Anstehende Inspektionen</h1>

                <div className="AIInputMain">


                    <div className="Logininputdivs login DominateinputHeadings">
                        <p className="Logininputdivs inputHeadings ">Unternehmensbezeichnung</p>
                        <div className="borders">
                            <input className="inputmainpages" type="text" placeholder="Nach  Unternehmen suchen" />
                        </div>
                    </div>

                  

                    <div className="Logininputdivs login">
                        <p className="Logininputdivs inputHeadings">Datum</p>
                        <div className="borders">
                            <input className="inputmainpages" type="date" placeholder="D" />
                        </div>
                       
                    </div>

                    <div className="Logininputdivs login">
                        <p className="Logininputdivs inputHeadings ">Filter</p>
                        <div className="borders">
                            <div className="AIinputContainer">
                            <AiOutlineFilter className="AIinputIcon"/>
                            <input className="inputmainpages" type="text" placeholder="" />
                            </div>
                        </div>
                    </div>


                </div>

                <div className="  AIEntryshower">
                    <h1>Meine laufendeninspektionen</h1>
                    {/* Make into component that loads face data  */}
                    <div className="seeableInspectionsOnHomepagae">
                        <h2 className="showEntries">MediMock AG 24  - 10.2.2025 - Hektor Inspector </h2>
                        <h2 className="showEntries">MediMock AG 24 Germany - 10.2.2025 - Hektor Inspector</h2>
                        <h2 className="showEntries">MediMock AG 24 China - 10.2.2025 - Hektor Inspector</h2>
                        <h2 className="showEntries">MediMock AG 24 India - 10.2.2025 - Hektor Inspector</h2>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    )
}