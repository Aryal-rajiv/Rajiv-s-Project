import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Box sx={{ 
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(45deg, #4F46E5 30%, #10B981 90%)',
      color: 'white'
    }}>
      <Typography variant="h2" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" paragraph>
        Showcasing my best WordPress and frontend projects
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        View Projects
      </Button>
    </Box>
  );
};

export default Hero; // This makes it a module