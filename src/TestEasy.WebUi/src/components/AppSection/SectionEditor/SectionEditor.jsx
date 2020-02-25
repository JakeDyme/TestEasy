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
import { useSelector, useDispatch, connect } from "react-redux";
import { saveCurrentEntity } from "../../../actions/commonEntityActions"


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
    const dispatch = useDispatch();
    const classes = useStyles();
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    //const [currentEntity, setCurrentEntity] = React.useState(null);
    
    //const currentEditorEntity = useSelector(state => state.currentEditorEntity);
    const currentSectionType = useSelector(state => state.currentSectionType);

    const currentEditorEntity = {
        id: 1,
        name: "Launc google click search",
        fields: [
            {
                name: "Selenium.Host",
                params: [
                    {
                        name: "Selenium host name",
                        value:"",
                        options: [
                            { name: "local machine", value: "http://localhost:3000"  }
                        ]
                    }
                ]
            },
            {
                name: "Website",
                params: [
                    {
                        name: "Website name",
                        value:"",
                    }
                ]
            }
        ],
        actions: [
            {
                name: "Launch Url", 
                params: [
                    {
                        name: "Url", 
                        value: "", 
                        options: [
                            { name: "google", value: "https://www.google.com" },
                            { name: "facebook", value: "https://www.facebook.com" },
                            { name: "ebay", value: "https://www.ebay.com" },
                        ]
                    }
                ]
            },
            {
                name: "ClickOnElement", 
                params: [
                    {
                        name: "selectionType", 
                        value: "", 
                        options: [
                            { name: "By Element DOM Id", value: "elementId" },
                            { name: "By Classname", value: "className" },
                            { name: "By XPath", value: "xpath" },
                        ]
                    },
                    {
                        name: "Value", 
                        value: "", 
                        options: []
                    }
                ]
            }
        ]

    }

    const handleSave = () => {
        dispatch(saveCurrentEntity());
    }

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

                { currentEditorEntity.fields.map((field) => {
                    return (<div className={ classes.argument }><EditorActionArg argument={field}></EditorActionArg></div>)
                })}

                { currentEditorEntity.actions.map((action) => {
                    return (<div className={ classes.argument }><EditorActionArg argument={action}></EditorActionArg></div>)
                })}

                {/* <div className={ classes.argument }><EditorActionArg></EditorActionArg></div>
                <div className={ classes.argument }><EditorActionArg></EditorActionArg></div> */}
                
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleSave} color="primary">
                Save
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    )
}

export default SectionEditor;