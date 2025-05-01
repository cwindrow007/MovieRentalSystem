import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ProfilePicture from "../components/profile-picture.png";

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const clearSearch = () => {
        setSearchText('');
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gray-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">Movie Rental System</h1>
            </div>
            <div className="flex-1 flex justify-center">
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link to="/Home" className="hover:underline font-bold">Home</Link>
                    </li>
                    <li>
                        <Link to="/my-rentals" className="hover:underline font-bold">My Rentals</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-3 py-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    {searchText && (
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
                            onClick={clearSearch}
                        >
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                <div className="relative" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none">
                        <img src={ProfilePicture} alt="Profile" className="w-8 h-8 rounded-full"/>
                    </button>
                    {dropdownVisible && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
                            <Link to="/Register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
