import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './EmptyStateStyles';

const EmptyState = props => {
  const classes = useStyles();
  const { icon, title, description, button } = props;

  return (
    <div className={classes.center}>
      {icon}
      {title && (
        <Typography color="textSecondary" variant="h4">
          {title}
        </Typography>
      )}
      {description && (
        <Typography color="textSecondary" variant="subtitle1">
          {description}
        </Typography>
      )}
      {button}
    </div>
  );
};

EmptyState.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.element
};

export default EmptyState;
