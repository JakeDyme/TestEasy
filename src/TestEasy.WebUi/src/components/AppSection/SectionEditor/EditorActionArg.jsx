import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import ActionArgName from './ActionArgName'
import ActionArgParamList from './ActionArgParamList'

const useStyles = makeStyles(theme => ({
    namePart: {
        width:"50%"
    },
    argumentsPart: {
        width:"50%"
    },
    argument: {
        padding: 5
    }
  }));

const EditorActionArg = props => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.argument} elevation={5}>
                <Grid container> 
                    <Grid item className={classes.namePart}> 
                        <ActionArgName></ActionArgName>
                    </Grid>
                    <Grid item className={classes.namePart}>
                        <ActionArgParamList></ActionArgParamList>
                        {/* <TextField id="standard-basic" label="Standard" /> */}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default EditorActionArg;