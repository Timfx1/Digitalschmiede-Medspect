import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyList = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        // Fetch companies from the backend
        axios.get('http://127.0.0.1:8000/api/companies/')
            .then((response) => {
                setCompanies(response.data); // Set the data from the backend
            })
            .catch((error) => {
                console.error("There was an error fetching the companies!", error);
            });
    }, []); // Empty dependency array means this effect runs once after the component mounts

    return (
        <div>
            <h2>Company List</h2>
            <ul>
                {companies.length > 0 ? (
                    companies.map((company) => (
                        <li key={company.id}>
                            {company.name}, {company.address}
                        </li>
                    ))
                ) : (
                    <p>No companies available.</p>
                )}
            </ul>
        </div>
    );
};

export default CompanyList;
