import React from "react";
import { Typography, Box, Paper } from "@mui/material";

const ReviewsSection = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <Typography>No reviews yet.</Typography>;
  }

  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>⭐ Customer Reviews</Typography>
      {reviews.map((review, index) => (
        <Paper key={index} elevation={2} sx={{ padding: 2, marginTop: 2 }}>
          <Typography variant="h6" color="primary">
            ⭐ {review.rating} / 5
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            {review.comment}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default ReviewsSection;
