import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage.jsx";
import { ExplorePage } from "./Pages/ExplorePage.jsx";
import  PlaceDetails from "./Pages/PlaceDetails.jsx";
import  BlogPage  from "./Pages/BlogPage.jsx";
import ShopPage from "./Pages/ShopPage.jsx";
import WishlistPage from "./Pages/WishlistPage.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />        
        <Route path="/place/:placeId" element={<PlaceDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
      </Routes>
    </>
  )
}

export default App
