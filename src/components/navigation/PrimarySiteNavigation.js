import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const PrimarySiteNavigation = props => {
  const { brand, items } = props;
  if (items.length === 0) return null;

  return (
    <List subheader={<ListSubheader component="div">{brand}</ListSubheader>}>
      {items.map(item => (
        <ListItem id={item.id} button component="a" href={item.link}>
          <ListItemIcon>
            <Icon>{item.iconName}</Icon>
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );
};

PrimarySiteNavigation.propTypes = {
  brand: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
};

export default PrimarySiteNavigation;
