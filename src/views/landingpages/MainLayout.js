import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrimaryHeader from 'components/header/PrimaryHeader';
import SimpleBottomNavigation from 'components/footer/SimpleBottomNavigation';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HomePage from 'views/home/HomePage';

const MainLayout = props => {
  return (
    <BrowserRouter>
      <PrimaryHeader />
      <Container maxWidth="md">
        <Typography component="div" style={{ minHeight: '80vh' }}>
          <HomePage />
        </Typography>
      </Container>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default MainLayout;
