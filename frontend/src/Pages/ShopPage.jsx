import React, { useState, useMemo } from "react";
import { Box, Typography, Tabs, Tab, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import productsData from "../Data/productData"; 
import ProductCard from "../components/Shop/ProductCard";
import FilterSidebar from '../components/Shop/FilterSidebar';
import Footer from "../components/common/Footer"; 
import Navbar from "../components/common/Navbar";
// import MoodSection from "../components/Shop/MoodSection";

const categories = ["All", "Hiking", "Clubs", "Date", "Hangout", "Couple", "Home Decor"];

const ShopPage = () => {
  const [filters, setFilters] = useState({
    price: [0, 10000],
    brand: [],
    size: [],
    gender: [],
  });
 
  // const birthdayGifts = productsData.filter(p => p.tags?.includes("birthday"));
  // const adventureReady = productsData.filter(p => p.tags?.includes("adventure"));
  // const romanticNight = productsData.filter(p => p.tags?.includes("romantic"));
  const brands = useMemo(() => [...new Set(productsData.map((p) => p.brand))], []);
  const sizes = useMemo(() => [...new Set(productsData.flatMap((p) => p.sizes))], []);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryFilteredProducts = useMemo(() => {
    return selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    return categoryFilteredProducts.filter((product) => {
      const withinPrice = product.price >= filters.price[0] && product.price <= filters.price[1];
      const matchesBrand = filters.brand.length ? filters.brand.includes(product.brand) : true;
      const matchesSize = filters.size.length ? product.sizes.some((size) => filters.size.includes(size)) : true;
      const matchesGender = filters.gender.length ? filters.gender.includes(product.gender) : true;
      return withinPrice && matchesBrand && matchesSize && matchesGender;
    });
  }, [filters, categoryFilteredProducts]);

  return (
    <>

    <Navbar />
    <Box sx={{ display: "flex", maxWidth: "1400px", mx: "auto", px: 2, py: 4 }}>
    <Grid item xs={12} md={3}>
      <Box sx={{
        position: "sticky",
        top: 100,
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: "#f9f9f9",
        p: 2
      }}>
        <FilterSidebar filters={filters} setFilters={setFilters} brands={brands} sizes={sizes} />
      </Box>
    </Grid>

        {/* RIGHT CONTENT */}
        <Box sx={{ flex: 1, pl: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h4" fontWeight="bold">🛍️ Shop by Category</Typography>
            <Button
              component={Link}
              to="/wishlist"
              variant="outlined"
              color="secondary"
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              ❤️ Wishlist
            </Button>
          </Box>

          {/* Category Tabs */}
          <Tabs
            value={selectedCategory}
            onChange={(e, val) => setSelectedCategory(val)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              mb: 4,
              "& .MuiTab-root": {
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: "1rem",
                borderRadius: "20px",
                px: 2,
                py: 1,
              },
              "& .Mui-selected": {
                backgroundColor: "rgb(184, 182, 182)",
                color: "white !important",
              },
            }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat} value={cat} />
            ))}
          </Tabs>

          {/* Product Grid */}
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        </Box>
      {/* 
    <MoodSection title="🎉 Birthday Gifts" products={birthdayGifts} />
    <MoodSection title="🧗 Adventure Ready" products={adventureReady} />
    <MoodSection title="💖 Romantic Night" products={romanticNight} /> */}
    <Footer />
    </>
  );
};

export default ShopPage;
