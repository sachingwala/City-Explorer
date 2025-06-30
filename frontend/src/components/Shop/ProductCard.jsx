import React, { useState, useEffect } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  const isWished = wishlist.includes(product.id);

  const toggleWishlist = () => {
    let updatedList;
    if (isWished) {
      updatedList = wishlist.filter(id => id !== product.id);
    } else {
      updatedList = [...wishlist, product.id];
    }
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };
  return (
    // <Card sx={{ maxWidth: 300, m: 2, position: 'relative' }}>
    
    <motion.div whileHover={{ scale: 1.03 }}>
       <Card sx={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
        <IconButton
          onClick={toggleWishlist}
          sx={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}
          color={isWished ? "error" : "default"}
        >
          {isWished ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{ height: 200 }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ₹{product.price}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href={product.buyLink}
            target="_blank"
            fullWidth
          >
            Buy Now
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  // </Card>
  );
};

export default ProductCard;
