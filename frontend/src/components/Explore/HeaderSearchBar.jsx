import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeaderSearchBar = ({ searchTerm, locationTerm, setSearchTerm, setLocationTerm, onSearch }) => {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#fff',
        padding: '1rem 2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <input
        type="text"
        placeholder="Find: Coffee, restaurants, hikes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 2,
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <input
        type="text"
        placeholder="Location: San Francisco, CA"
        value={locationTerm}
        onChange={(e) => setLocationTerm(e.target.value)}
        style={{
          flex: 1.5,
          padding: '0.75rem 1rem',
          borderRadius: '10px',
          border: '1px solid #ccc',
          fontSize: '1rem',
        }}
      />
      <button
        onClick={onSearch}
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#d32f2f',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <FaSearch /> Search
      </button>
    </div>
  );
};

export default HeaderSearchBar;
