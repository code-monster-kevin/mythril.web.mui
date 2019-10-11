import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import GradeIcon from '@material-ui/icons/Grade';

const HeaderMenuItem = props => {
  const { id, title, description, link, badgeCounter, icon } = props;

  return (
    <Tooltip
      id={id}
      title={title}
      placement={window.innerWidth > 959 ? 'top' : 'left'}
    >
      <IconButton aria-label={description} color="inherit" href={link}>
        <Badge
          badgeContent={badgeCounter}
          color="secondary"
          invisible={badgeCounter === 0}
        >
          {icon}
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

HeaderMenuItem.defaultProps = {
  id: 'untitled',
  title: 'untitled',
  description: 'untitled item',
  badgeCounter: 0,
  icon: <GradeIcon />
};

HeaderMenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  badgeCounter: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired
};

export default HeaderMenuItem;
