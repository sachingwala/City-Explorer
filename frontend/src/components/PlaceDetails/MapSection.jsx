import React from "react";
import { Typography, Box } from "@mui/material";

const MapSection = ({ place }) => {
  const mapQuery = encodeURIComponent(place.address || place.name);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${mapQuery}`;

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>📍 Location</Typography>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          height: "400px",
        }}
      >
        <iframe
          title="map"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};

export default MapSection;
