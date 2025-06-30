import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Stack,  Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const ExploreCard = ({ place }) => {
  

  const navigate = useNavigate();
  return (
    <Card
    onClick={() => navigate(`/place/${place.id}`)}
    sx={{
       width: 280,
        minWidth: 250,
        cursor: 'pointer',
        boxShadow: 3,
        borderRadius: '12px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
    }}
  >
    <CardMedia
      component="img"
      height="160"
      image={place.image}
      alt={place.name}
      sx={{

        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        objectFit: 'cover',
      }}
        
    />
    {/* <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#4E342E' }}>
          {place.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ⭐ {place.rating} / 5
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {place.category}
        </Typography>
      </CardContent> */}

      <CardContent>
        {/* Title */}
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#4E342E' }}>
          {place.name}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <StarIcon sx={{ color: '#FFD700', fontSize: 18, mr: 0.5 }} />
          <Typography variant="body2" color="text.secondary">
            {place.rating} / 5
          </Typography>
        </Box>

        {/* Category */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {place.category}
        </Typography>

        {/* Tags */}
        {place.tags && (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {place.tags.slice(0, 3).map((tag, i) => (
              <Chip
                key={i}
                label={tag}
                size="small"
                sx={{
                  fontSize: '0.75rem',
                  backgroundColor: '#f3e5f5',
                  color: '#4E342E',
                }}
              />
            ))}
          </Stack>
        )}
      </CardContent>
  </Card>
  );
};

export default ExploreCard;
