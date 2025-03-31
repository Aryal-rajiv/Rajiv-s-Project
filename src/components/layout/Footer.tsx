import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} My Portfolio
      </Typography>
    </Box>
  );
};

export default Footer; // This makes it a module