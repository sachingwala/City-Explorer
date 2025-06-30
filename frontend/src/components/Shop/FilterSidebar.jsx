import React from 'react';
import { Box, Typography, Slider, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const FilterSidebar = ({ filters, setFilters, brands, sizes }) => {
  const handlePriceChange = (event, newValue) => {
    setFilters(prev => ({ ...prev, price: newValue }));
  };

  const handleCheckboxChange = (event, category) => {
    const { name, checked } = event.target;
    setFilters(prev => {
      const updatedCategory = checked
        ? [...prev[category], name]
        : prev[category].filter(item => item !== name);
      return { ...prev, [category]: updatedCategory };
    });
  };

  return (
    <Box sx={{ width: 220, p: 0 }}>
      <Typography variant="h6">Filters</Typography>

      {/* Price Range */}
      <Box sx={{ mt: 2}}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={filters.price}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={10000}
           step={100}
        />
      </Box>

      {/* Brand */}
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Brand</Typography>
        <FormGroup>
          {brands.map(brand => (
            <FormControlLabel
              key={brand}
              control={
                <Checkbox
                  checked={filters.brand.includes(brand)}
                  onChange={e => handleCheckboxChange(e, 'brand')}
                  name={brand}
                />
              }
              label={brand}
            />
          ))}
        </FormGroup>
      </Box>

      {/* Size */}
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Size</Typography>
        <FormGroup>
          {sizes.map(size => (
            <FormControlLabel
              key={size}
              control={
                <Checkbox
                  checked={filters.size.includes(size)}
                  onChange={e => handleCheckboxChange(e, 'size')}
                  name={size}
                />
              }
              label={size}
            />
          ))}
        </FormGroup>
      </Box>

      {/* Gender */}
      <Box sx={{ mt: 2 }}>
        <Typography gutterBottom>Gender</Typography>
        <FormGroup>
          {['Men', 'Women', 'Unisex'].map(gender => (
            <FormControlLabel
              key={gender}
              control={
                <Checkbox
                  checked={filters.gender.includes(gender)}
                  onChange={e => handleCheckboxChange(e, 'gender')}
                  name={gender}
                />
              }
              label={gender}
            />
          ))}
        </FormGroup>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
