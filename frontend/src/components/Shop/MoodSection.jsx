import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard.jsx";

const scrollContainerStyle = {
  display: "flex",
  gap: "1rem",
  overflowY: "hidden",
  overflowX: "auto",
  paddingBottom: "1rem",
  scrollSnapType: "x mandatory",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": { display: "none" },

};

const MoodSection = ({ title, products }) => {
  return (
    <Box sx={{ my: 5, px: 2, maxWidth: "1400px", justifyContent: "center", mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Box sx={scrollContainerStyle}>
        {products.map((product) => (
          <motion.div key={product.id} whileHover={{ scale: 1.03 }} style={{ scrollSnapAlign: "start" }}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default MoodSection;
