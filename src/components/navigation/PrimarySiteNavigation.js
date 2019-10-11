import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

const PrimarySiteNavigation = props => {
  const { brand } = props;
  return (
    <List subheader={<ListSubheader component="div">{brand}</ListSubheader>}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Subscription" />
      </ListItem>
    </List>
  );
};

PrimarySiteNavigation.propTypes = {
  brand: PropTypes.string.isRequired
};

export default PrimarySiteNavigation;
