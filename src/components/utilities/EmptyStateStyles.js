import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }
}));

export default useStyles;
