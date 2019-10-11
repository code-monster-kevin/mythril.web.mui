import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const AccountMenu = props => {
  const { anchorEl, menuId, open, handleMenuClose } = props;
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

AccountMenu.propTypes = {
  anchorEl: PropTypes.string.isRequired,
  menuId: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleMenuClose: PropTypes.func.isRequired
};

export default AccountMenu;
