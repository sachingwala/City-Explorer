import React from 'react';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      elevation={3}
      sx={{
        p: '8px 16px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '40px',
        mb: 3,
      }}
    >
      <InputBase sx={{ flex: 1 }} placeholder="Where" />
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <InputBase sx={{ flex: 1 }} placeholder="Check in" />
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <InputBase sx={{ flex: 1 }} placeholder="Check out" />
      <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
      <InputBase sx={{ flex: 1 }} placeholder="Who" />
      <IconButton>
        {/* <SearchIcon /> */}
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
