import React from 'react';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingScreen = () => {
  return (
    <Box position="absolute" top="50%" left="50%">
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen;
