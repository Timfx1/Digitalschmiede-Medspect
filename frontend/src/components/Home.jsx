// src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Footer from './Footers';  // Importing Footer component
import logo from './image/Logo1.png';  //  the logo 

import '../App.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all company data
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/companies/');
        setCompanies(response.data);
      } catch (error) {
        console.error('There was an error fetching companies!', error);
      }
    };

    fetchCompanies();
  }, []);

  // When input changes, update suggestions
  const onSuggestionsFetchRequested = ({ value }) => {
    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  // Clear suggestions when input is cleared
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When a suggestion is selected
  const onSuggestionSelected = (event, { suggestion }) => {
    setQuery(suggestion.name); // Update the input with the selected suggestion
    navigate(`/company/${suggestion.id}`); // Navigate to the detail page
  };

  // Input change handler
  const onChange = (event, { newValue }) => {
    setQuery(newValue);
  };

  // Define how the input should display each suggestion
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Render suggestions
  const renderSuggestion = (suggestion) => (
    <div>
      {suggestion.name} ({suggestion.aktenzeichen}) {suggestion.address}
    </div>
  );

  return (
    <>

     <Navbar />

          
            <div className="homePageImage">
            <img src={logo} alt="Logo" className="logoImage" />
            </div>

   
    <div className="homeInput borders">
        <div className="searchInput">
          <h1 className="inputHeadings">Unternehmen suchen</h1>
          <div className="borders HomepageInput">
      
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "Search for a company",
          value: query,
          onChange: onChange
        }}
        onSuggestionSelected={onSuggestionSelected} // Make sure this line is included
        />
        </div>
      </div>



      <div className="searchbuttondiv">

      <button 
            className="searchButton" 
            onClick={() => {
                // Navigate to the first suggestion if it exists
                if (suggestions.length > 0) {
                    navigate(`/company/${suggestions[0]?.id}`);
                }
            }}
        >
            Suche
        </button>
          {/* <button className="searchButton" onClick={() => navigate(`/company/${suggestions[0]?.id}`)}>Suche</button> */}
        </div>
      </div>

      {/* Inspections Area */}
      <div className="InspectionsArea">
        {/* Neue Inspektion erstellen */}
        <div className="clickableInspections">
          <div className="borders clickableInspectionsdiv">
            <h1 className="HomepageHeadingtext">
              Neue <p className="HomepageHeadingtextparagraph">Inspektion erstellen</p>
            </h1>
            <div className="homePageIcon">
              <span className="homeicon">+</span>
            </div>
          </div>

          {/* Anstehende Inspektionen */}
          <div className="borders clickableInspectionsdiv">
            <h1 className="HomepageHeadingtext">
              Anstehende <p className="HomepageHeadingtextparagraph">Inspektionen</p>
            </h1>
            <div className="homePageIcon">
              <span className="homeicon">🕒</span>
            </div>
          </div>
        </div>

        {/* Meine laufenden Inspektionen */}
        <div className="borders Entryshower">
          <h1>Meine laufenden Inspektionen</h1>
          <div className="seeableInspectionsOnHomepagae">
            <h2 className="showEntries">MediMock AG 24</h2>
            <h2 className="showEntries">MediMock AG 24 Germany</h2>
            <h2 className="showEntries">MediMock AG 24 China</h2>
            <h2 className="showEntries">MediMock AG 24 India</h2>
          </div>
        </div>
      </div>
      <Footer /> {/* Adding the Footer component here */}
    </>
    
  );
};

export default Home;

