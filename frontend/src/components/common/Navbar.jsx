import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        
        // backgroundColor: " #4B2E2E",
        backgroundColor: " #1c1b18",
        color: "rgb(253, 242, 212)",
        boxShadow: "none",
       
        borderBottom: "1px solid rgb(151, 132, 78)",
        }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Typography variant="h6" component={RouterLink} to="/" sx={{ color: "rgb(187, 180, 161)", textDecoration: "none" }}>
          VibeFinder
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Link component={RouterLink} to="/" sx={navLinkStyle}>
            Home
          </Link>
          <Link component={RouterLink} to="/explore" sx={navLinkStyle}>
            Explore
          </Link>
          <Link component={RouterLink} to="/blog" sx={navLinkStyle}>
            Blog
          </Link>
          <Link component={RouterLink} to="/shop" sx={navLinkStyle}>
            Shop
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(238, 234, 230)",
            color: "rgb(43, 33, 33)",
            textTransform: "none",
            "&:hover": { backgroundColor: "#c98f60" },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  color: "rgb(238, 234, 231)",
  fontWeight: "500",
  fontSize: "1.4rem",
  "&:hover": {
    color: "#D4A373",
  },
};

export default Navbar;
