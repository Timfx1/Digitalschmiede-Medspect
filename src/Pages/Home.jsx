import Navbar from "./navbar"
import Footer from "./Footers"
import "../App.css";
import { AiOutlinePlus, AiOutlineClockCircle } from 'react-icons/ai';
import { FaSignOutAlt } from 'react-icons/fa';

export default function home() {

    const RunninInspections = () => {
        window.location.href = "/AnstehendeInspektionen";
    };

    const CompanyDeatils = () => {
        window.location.href = "/UnternehmenDetailseite";
    };
    const handleNavigateLog = () => {
        window.location.href = "/";
    };

    return (
        <>
            <Navbar />
            <div className="homePageImage">
                <img src="./src/Image/Full Logo Medspect.png" alt="Logo" className="logoImgae" />

                <div className="newButtonAbsolute">
                    <button onClick={handleNavigateLog} className="AIbutton">Logout <FaSignOutAlt /></button>
                </div>


            </div>

            <div className=" homeIput borders" >

                <div className="searchInput">
                    <h1 className="inputHeadings">Unternehmen suchen</h1>
                    <div className="borders HomepageInput">
                        <input type="text" placeholder="Unternehmansbezeichnung" className="inputmainpages" />
                    </div>
                </div>
                <div className="searchbuttondiv">
                    <button className="searchButton" onClick={CompanyDeatils}>Suche</button>
                </div>
            </div>

            <div className="InspectionsArea ">

                <div className="clickableInspections ">
                    <div className="borders clickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Neue <p className="HomepageHeadingtextparagraph">Inspektion erstellen</p></h1>
                        <div className="homePageIcon">
                            <AiOutlinePlus className="homeicon" />
                        </div>
                    </div>
                    <div className="borders clickableInspectionsdiv">
                        <h1 className="HomepageHeadingtext">Anstehende  <p className="HomepageHeadingtextparagraph">Inspektionen</p></h1>
                        <div className="homePageIcon">
                            <AiOutlineClockCircle className="homeicon" onClick={RunninInspections} />
                        </div>
                    </div>
                </div>

                <div className=" borders Entryshower">

                    <h1>Meine laufendeninspektionen</h1>
                    {/* Make into component that loads face data  */}
                    <div className="seeableInspectionsOnHomepagae">
                        <h2 className="showEntries">MediMock AG 24</h2>
                        <h2 className="showEntries">MediMock AG 24 Germany</h2>
                        <h2 className="showEntries">MediMock AG 24 China</h2>
                        <h2 className="showEntries">MediMock AG 24 India</h2>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}