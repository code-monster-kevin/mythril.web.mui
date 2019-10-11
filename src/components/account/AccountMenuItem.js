import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountMenu from './AccountMenu';

const AccountMenuItem = props => {
  const menuId = 'primary-account-menu-id';
  const { id, title, description, icon } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = event => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip
        id={id}
        title={title}
        placement={window.innerWidth > 959 ? 'top' : 'left'}
      >
        <IconButton
          edge="end"
          aria-controls={menuId}
          aria-label={description}
          aria-haspopup="true"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <AccountMenu
        anchorEl={anchorEl}
        menuId={menuId}
        open={isMenuOpen}
        handleMenuClose={handleProfileMenuClose}
      />
    </div>
  );
};

AccountMenuItem.defaultProps = {
  id: 'primary-account-menu-item',
  title: 'My Profile',
  description: 'account of current user',
  icon: <AccountCircle />
};

AccountMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default AccountMenuItem;
