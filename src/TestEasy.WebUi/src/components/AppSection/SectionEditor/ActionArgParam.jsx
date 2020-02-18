import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      width: "90%"
    }
  }));

const ActionArgParam = props => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl} error>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={10}
                    onChange={() => {}}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Action Param 1</MenuItem>
                    <MenuItem value={20}>Action Param 2</MenuItem>
                    <MenuItem value={30}>Action Param 3</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ActionArgParam;