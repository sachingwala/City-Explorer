import React from 'react';
import '../style/CategoryFilter.css';

const categories = ['All', 'Coffee', 'Hiking', 'Club', 'Date', 'Restaurants', 'hangouts'];

const CategoryFilter = ({ selectedCategory, onSelect }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${
            selectedCategory === category ? 'active' : ''
          }`}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
