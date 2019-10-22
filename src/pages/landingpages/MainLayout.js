import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrimaryHeader from 'components/header/PrimaryHeader';
import SimpleBottomNavigation from 'components/footer/SimpleBottomNavigation';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ApplicationRoutes from 'routes/ApplicationRoutes';
import PrimarySiteNavigation from 'components/navigation/PrimarySiteNavigation';
import { MenuItemService } from 'services/MenuItemService';

const MainLayout = () => {
  const brand = 'Mythril Web';
  const [menuItems, setMenuItems] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const resp = await MenuItemService();
      
      const menuItems = resp.data.map(item => {
        return {
          id: item.id,
          name: item.name,
          link: item.link,
          iconName: item.iconName
        };
      });
      setMenuItems(menuItems);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <PrimaryHeader brand={brand}>
        <PrimarySiteNavigation brand={brand} items={menuItems} />
      </PrimaryHeader>
      <Container maxWidth="md">
        <Typography component="div" style={{ minHeight: '80vh' }}>
          <ApplicationRoutes />
        </Typography>
      </Container>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
};

export default MainLayout;
