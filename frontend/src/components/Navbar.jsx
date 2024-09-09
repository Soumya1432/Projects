import React from 'react';

const Navbar = ({ setModalOpen }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-2xl">Notes App</h1>
      <button 
        onClick={() => setModalOpen(true)}
        className="bg-white text-blue-500 px-4 py-2 rounded-md"
      >
        Add Modal
      </button>
    </nav>
  );
};

export default Navbar;
