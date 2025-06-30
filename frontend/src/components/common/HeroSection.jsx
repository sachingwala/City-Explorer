import React from "react";
import { Box, Typography, InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: { xs: "90vh", md: "100vh" },
        backgroundImage: "url('/src/assets/restaurants-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 2,
        color: "white",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Discover the Best Spots in Your City
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
          Coffee Shops, Hiking Trails, Clubs, Hangouts & More
        </Typography>

        {/* Search Bar */}
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "100%", sm: 500 },
            mx: "auto",
            borderRadius: "30px",
            overflow: "hidden",
            px: 2,
            py: 1,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for places..."
            inputProps={{ "aria-label": "search places" }}
          />
          <IconButton type="submit" sx={{ p: 1 }} aria-label="search" onClick={() => navigate('/explore')}>
            <SearchIcon />
          </IconButton>
        </Paper>

        {/* Category Icons */}
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
          <IconButton color="inherit" size="large">
            <LocalCafeIcon fontSize="inherit"  />
          </IconButton>
          <IconButton color="inherit" size="large">
            <DirectionsWalkIcon fontSize="inherit" onClick={() => navigate('/explore')} />
          </IconButton>
          <IconButton color="inherit" size="large">
            <NightlifeIcon fontSize="inherit" />
          </IconButton>
          <IconButton color="inherit" size="large">
            <FavoriteIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default HeroSection;
