import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  emptyStateIcon: {
    fontSize: theme.spacing(12)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default useStyles;
