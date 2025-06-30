import React, { useEffect, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ProductCard from "../components/Shop/ProductCard";
import productsData from "../Data/productData";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const filtered = productsData.filter(product => stored.includes(product.id));
    setWishlistItems(filtered);
  }, []);

  return (
    <>
      <Navbar />
      <Box sx={{ p: 3, maxWidth: "1300px", mx: "auto" }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
          ❤️ Your Wishlist
        </Typography>

        {wishlistItems.length === 0 ? (
          <Typography>No items in wishlist yet.</Typography>
        ) : (
          <Grid container spacing={3}>
            {wishlistItems.map(product => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default WishlistPage;
