import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-lg font-bold hover:text-blue-300 transition">Micro Donations</a>
                <div className="space-x-4">
                    <a href="/" className="text-white hover:text-blue-300 transition">Home</a>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
