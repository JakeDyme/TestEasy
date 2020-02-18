import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditorActionArg from './EditorActionArg'

const useStyles = makeStyles(theme => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    argument: {
        margin: 10,
    }
  }));

const SectionEditor = props => {
    const classes = useStyles();
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    return (
        <div>
        <Dialog 
            open={props.open} 
            onClose={props.handleClose} 
            aria-labelledby="form-dialog-title"
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            <DialogTitle id="form-dialog-title">Test</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Add actions to create your test
            </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Test Name"
                    type="email"
                    fullWidth
                    value="My Test"
                />

                <div className={classes.argument}><EditorActionArg></EditorActionArg></div>
                <div className={classes.argument}><EditorActionArg></EditorActionArg></div>
                
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={props.handleClose} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default SectionEditor;