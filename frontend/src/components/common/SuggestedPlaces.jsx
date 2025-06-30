import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import '../style/SuggestedPlaces.css'; 

const categories = [ 'All', 'Coffee Shops', 'Hiking Trails', 'Clubs', 'Date', 'Hangouts', 'Home Decor'];

const places = [
  {
    id: 1,
    name: "Coffee Shops",
    image: "/src/assets/coffee-1.jpg",
    categories: ["Coffee Shops"],
    description: "Relax at cozy coffee shops with great brews.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Coffee Shops",
    image: "/src/assets/coffee-1.jpg",
    categories: ["Coffee Shops"],
    description: "Relax at cozy coffee shops with great brews.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Hiking Trails",
    image: "/src/assets/hiking-1.webp",
    categories: ["Hiking Trails"],
    description: "Explore beautiful and adventurous trails.",
    rating: 4.7
  },
  {
    id: 4,
    name: "Hiking Trails",
    image: "/src/assets/hiking-1.webp",
    categories: ["Hiking Trails"],
    description: "Explore beautiful and adventurous trails.",
    rating: 4.7
  },

  {
    id: 5,
    name: "Clubs",
    image: "/src/assets/club-1.webp",
    categories: ["Clubs"],
    description: "Party the night away at popular clubs.",
    rating: 4.2
  },
  {
    id: 6,
    name: "Clubs",
    image: "/src/assets/club-1.webp",
    categories: ["Clubs"],
    description: "Party the night away at popular clubs.",
    rating: 4.2
  },
  {
    id: 7,
    name: "Date Night",
    image: "/src/assets/meduim-1.webp",
    categories: ["Date"],
    description: "Perfect spots for romantic date nights.",
    rating: 4.8
  },
  {
    id: 8,
    name: "Date Night",
    image: "/src/assets/meduim-1.webp",
    categories: ["Date"],
    description: "Perfect spots for romantic date nights.",
    rating: 4.8
  },
  {
    id: 9,
    name: "Hangouts",
    image: "/src/assets/Lake.jfif",
    categories: ["Hangouts"],
    description: "Casual hangout places with friends.",
    rating: 4.3
  },
  {
    id: 10,
    name: "Hangouts",
    image: "/src/assets/Lake.jfif",
    categories: ["Hangouts"],
    description: "Casual hangout places with friends.",
    rating: 4.3
  },
  {
    id: 11,
    name: "Home Decor",
    image: "/src/assets/meduim-2.avif",
    categories: ["Home Decor"],
    description: "Discover elegant home decor ideas.",
    rating: 4.6
  },
  {
    id: 12,
    name: "Home Decor",
    image: "/src/assets/meduim-2.avif",
    categories: ["Home Decor"],
    description: "Discover elegant home decor ideas.",
    rating: 4.6
  },
];

const SuggestedSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPlaces, setFilteredPlaces] = useState(places); // Show all by default

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredPlaces(places);
    } else {
      const filtered = places.filter((place) =>
        place.categories.includes(selectedCategory)
      );
      setFilteredPlaces(filtered);
    }
  }, [selectedCategory]);

  return (
    <section className="suggested-section" >
      <h2 className="suggested-title">🌟 Suggested Places 🌟</h2>

      <div className="category-buttons" style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="place-cards-scroll">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place, index) => (
              <motion.div
                key={place.id}
                className="place-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <h3>{place.name}</h3>
                <img src={place.image} alt={place.name} className="place-image" />
                <p>{place.description}</p>
                <p>Rating: {place.rating}</p>
                <button className="explore" onClick={() => navigate("/explore")} > Explore-Now </button>
              </motion.div>
            ))
          ) : (
            <p>No places found for this category.</p>
          )}
      </div>

      <div className="see-more-container">
        <button className="see-more-btn" onClick={() => navigate('/explore')}>
          See More Places
        </button>
      </div>
    </section>
  );
};

export default SuggestedSection;
