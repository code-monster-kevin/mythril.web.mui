import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import FindIcon from '@material-ui/icons/FindInPage';
import HomeIcon from '@material-ui/icons/Home';
import EmptyState from 'components/utilities/EmptyState';
import useStyles from './PageNotFoundStyles';

const PageNotFound = props => {
  const classes = useStyles();
  const title = 'Page Not Found';
  const description = 'The requested URL was not found on this server';
  const homelabel = 'Go To Home Page';

  return (
    <EmptyState
      icon={<FindIcon className={classes.emptyStateIcon} color="action" />}
      title={title}
      description={description}
      button={
        <Fab
          className={classes.button}
          color="secondary"
          component={Link}
          to="/"
          variant="extended"
        >
          <HomeIcon className={classes.buttonIcon} /> {homelabel}
        </Fab>
      }
    />
  );
};

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default PageNotFound;
