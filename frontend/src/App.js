import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompanyList from './components/CompanyList';
import Login from './components/Login'; 
import Home from './components/Home';
import CompanyDetail from './components/CompanyDetail'; // Ensure this import is correct
import NewInspection from './components/NewInspection'; // Import the new inspection component

function App() {
    return (
        <Router>
            <div className="App">
               
                <Routes>
                    <Route path="/" element={<Login />} />  {/* Route for the Login page */}
                    <Route path="/home" element={<Home />} /> {/* Change this path for Home */}
                    <Route path="/companies" element={<CompanyList />} />
                    <Route path="/company/:id" element={<CompanyDetail />} /> {/* This should match the ID */}
                    <Route path="/new-inspection" element={<NewInspection />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
