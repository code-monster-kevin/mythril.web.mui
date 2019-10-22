import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import MoreIcon from '@material-ui/icons/MoreVert';
import HeaderMenuItem from 'components/header/HeaderMenuItem';
import AccountMenuItem from 'components/account/AccountMenuItem';
import useStyles from './PrimaryHeaderStyles';

const PrimaryHeader = props => {
  const classes = useStyles();
  const [leftMenuOpen, setLeftMenuOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const mobileMenuId = 'primary-header-menu-mobile';

  const handleDrawerToggle = () => {
    setLeftMenuOpen(!leftMenuOpen);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <HeaderMenuItem
          id="check-messages-button"
          title="Messages"
          badgeCounter={8}
          icon={<MailIcon />}
          link="/messages"
        />
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <HeaderMenuItem
          id="check-notifications-button"
          title="Notifications"
          badgeCounter={17}
          icon={<NotificationsIcon />}
          link="/notifications"
        />
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <AccountMenuItem
          id="user-account-menu-item"
          title="My Account"
          description="current user account options"
        />
        <p>My Account</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.brand}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <HeaderMenuItem
              id="check-messages-button"
              title="Messages"
              badgeCounter={8}
              icon={<MailIcon />}
              link="/messages"
            />
            <HeaderMenuItem
              id="check-notifications-button"
              title="Notifications"
              badgeCounter={17}
              icon={<NotificationsIcon />}
              link="/notifications"
            />
            <AccountMenuItem
              id="user-account-menu-item"
              title="My Account"
              description="current user account options"
            />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        <Hidden implementation="js">
          <Drawer
            variant="temporary"
            anchor={'left'}
            open={leftMenuOpen}
            onClose={handleDrawerToggle}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={props.handleLeftMenuClick}
              onKeyDown={props.handleLeftMenuClick}
            >
              {props.children}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default PrimaryHeader;
