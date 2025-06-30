import React from 'react';
import { useState } from 'react';
import NearbyToggle from './NearbyToggle';
import ExploreCard from './ExploreCard';
import placesData from '/src/Data/placesData.js';
import CategoryFilter from './CategoryFilter';
import MapView from './MapView';
import HeaderSearchBar from './HeaderSearchBar';
// import SearchBar from '../common/SearchBar';


const ExploreSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPlaces = Object.entries(placesData)
    .map(([category, places]) => {
      const matchSearch = places.filter(place =>
        place.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (selectedCategory !== 'All' && selectedCategory.toLowerCase() !== category.toLowerCase()) {
        return null;
      }

      return matchSearch.length > 0 ? [category, matchSearch] : null;
    })
    .filter(Boolean); 

  return (
    <>
      {/* <SearchBar /> */}  
{/*       
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10vh',
          // backgroundColor: '#fdf6e3', // cream background
          padding: '1rem',
          // position: 'sticky',
        }}
      >  
      <input
        type="text"
        placeholder="Search coffee shops, hikes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '0.8rem 1.5rem',
          width: '100%',
          maxWidth: '650px',
          borderRadius: '30px',
          position: 'sticky',
          border: '1px solid #d7ccc8', // soft chocolate border
          backgroundColor: 'rgb(252, 251, 251)', // vanilla-like input
          boxShadow: '0 4px 12px rgba(146, 74, 22, 0.15)', // chocolate tint shadow
          fontSize: '1rem',
          fontFamily: 'Helvetica, sans-serif',
          color: '#4E342E', // deep chocolate text
          transition: 'box-shadow 0.3s ease, border 0.3s ease',

        }}
        onFocus={(e) => {
          e.target.style.boxShadow = '0 0 0 4px rgba(228, 166, 86, 0.3)';
          e.target.style.border = '1px solidrgb(184, 139, 122)';
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.15)';
          e.target.style.border = '1px solid #d7ccc8';
        }}
      />
    </div> */}

      <HeaderSearchBar
        searchTerm={searchTerm}
        locationTerm={locationTerm}
        setSearchTerm={setSearchTerm}
        setLocationTerm={setLocationTerm}
        // onSearch={handleSearch}
      />

    <div style={{ display: 'flex', minHeight: '100vh' }}>
    <div style={{ flex: 1, padding: '2rem', overflowY: 'scroll', height: '100vh' }}>
      {/* Filters */}
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
        <CategoryFilter selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
        <NearbyToggle />
      </div>

      {/* If no data */}
      {filteredPlaces.length === 0 ? (
        <div style={{ color: '#4E342E', fontSize: '1.2rem' }}>
          No places found. Try a different category or search term.
        </div>
      ) : (
        filteredPlaces.map(([category, places]) => (
          <div key={category} style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#4E342E', fontSize: '1.5rem', marginBottom: '1rem' }}>
              {category}
            </h2>
            <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
              {places.map((place, index) => (
                // <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
                 <div key={place.id || index} style={{ marginBottom: '1.5rem' }}>
                  <ExploreCard place={place}  index={index + 1} />
                </div>
              ))}
            </div>
          </div>
         )) 
       )}
      </div>
      <div style={{ width: '40%', height: '100vh', position: 'sticky', top: 0 }}>
          <MapView places={filteredPlaces} />
      </div>
    </div>
    </>

  );
};
export default ExploreSection;
