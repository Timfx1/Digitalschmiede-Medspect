import  { useState } from 'react';
import { FaList, FaAngleLeft, FaAngleRight, FaSearch, FaMicrophone, FaCog } from 'react-icons/fa';
import { AiOutlineFolder } from 'react-icons/ai';
import { IoGridOutline, } from 'react-icons/io5';
import "../App.css";

export default function Navbar() {
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSearch = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleVoiceRecord = () => {
        alert('Voice recording functionality would be triggered!');
        
    };

     // Handle the search action
     const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log('Searching for:', searchTerm);
            // You can implement the search functionality here
            // For example, fetching search results from an API
        }
    };


    return (
        <div className='contentContainer'>
            <div className='leftnavbarcontent'>
                <div className='navbarItem'>
                    <FaList title="Menu" />
                </div>
                <div className='navbarItem'>
                    <FaAngleLeft title="Back" />
                </div>
                <div className='navbarItem'>
                    <FaAngleRight title="Forward" />
                </div>
            </div>

            <div className='rightnavbarcontent'>
                <div className='navbarItem'>
                    <AiOutlineFolder title="Files" />
                </div>
                <div className='navbarItem'>
                    <IoGridOutline title="Grid Menu" />
                </div>
                <div className='navbarItem'>
                    <FaCog title="Settings" />
                </div>

                {/* Search input toggle button */}
                <div className='navbarItem'>
                    <FaSearch className='search-icon icon' title="Search" onClick={toggleSearch} />
                </div>

                {/* Conditional rendering of the search input */}
                {showSearchInput && (
                    <div className='searchinput'>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch} // Trigger search on Enter
                        />
                        <div className='icon-container'>
                            <FaMicrophone className='icon' title="Voice Recorder" onClick={handleVoiceRecord} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}