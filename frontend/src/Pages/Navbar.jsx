import react, { useState } from 'react';
import { FaList, FaAngleLeft, FaAngleRight, FaSearch, FaMicrophone, FaCog } from 'react-icons/fa';
import { AiOutlineFolder } from 'react-icons/ai';
import { IoGridOutline, } from 'react-icons/io5';
import "../App.css";

export default function Navbar() {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const toggleSearch = () => {
        setShowSearchInput(!showSearchInput);
    };

    const handleVoiceRecord = () => {
        alert('Voice recording functionality would be triggered!');
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

                <div className='searchinput'>
                    <FaSearch className='search-icon icon ' title="Search" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="search-input"
                    />
                    <div className='icon-container'>
                        <FaMicrophone className='icon' title="Voice Recorder" onClick={handleVoiceRecord} />
                    </div>
                </div>
            </div>
        </div>
    );
}
