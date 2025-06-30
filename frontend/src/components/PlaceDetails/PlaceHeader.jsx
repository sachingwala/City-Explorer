import React from "react";
import { Box, Typography, Chip } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";

const PlaceHeader = ({ place }) => {
  return (
    <Box sx={{ position: "relative", height: "400px" }}>
      <img
        src={place.image}
        alt={place.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: 30,
          color: "white",
          background: "rgba(0,0,0,0.5)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          {place.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          {/* <StarIcon sx={{ color: "#ffb400" }} /> */}
          <Typography variant="h6" sx={{ ml: 0.5 }}>
            {place.rating} ({place.numReviews} reviews)
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {place.category} • {place.isClaimed ? "Claimed" : "Unclaimed"}
        </Typography>
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          {place.openTime} - {place.closeTime}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlaceHeader;
