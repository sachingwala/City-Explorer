// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/common/HeroSection';
import SuggestedPlaces from '../components/common/SuggestedPlaces';
import ProductPreview from '../components/common/ProductPreview';
import Footer from '../components/common/Footer';
import BlogHighlights from '../components/common/BlogHighlights';
// import placesData from '../data/placesData'; 

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SuggestedPlaces  />
      <BlogHighlights />
      <ProductPreview />
      <Footer />
    </>
  );
};

export default HomePage;
