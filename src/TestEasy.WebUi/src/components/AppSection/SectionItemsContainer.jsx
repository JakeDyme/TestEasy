import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import SectionItem from "./SectionItem";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/MoreHoriz";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useSelector, useDispatch, connect } from "react-redux";

import { getAllEntities } from '../../actions/commonEntityActions';
import { LOAD_TESTS, LOAD_SETUPS, LOAD_ROUTINES, LOAD_ACTIONS } from '../../actions/commonEntityActions';
import sectionTypeEnum from '../../enums/sectionTypeEnum';


const columnsHeaders = [
  {
    id: "name",
    label: "Name",
    minWidth: 10,
    align: "left",
    format: value => value.toLocaleString()
  }
  // {
  //   id: "population",
  //   label: "Population",
  //   minWidth: 170,
  //   align: "right",
  //   format: value => value.toLocaleString()
  // },
  // {
  //   id: "size",
  //   label: "Size\u00a0(km\u00b2)",
  //   minWidth: 170,
  //   align: "right",
  //   format: value => value.toLocaleString()
  // },
  // {
  //   id: "density",
  //   label: "Density",
  //   minWidth: 170,
  //   align: "right",
  //   format: value => value.toFixed(2)
  // }
];

const ExpansionPanel = withStyles({
  root: {
    border: "0px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "0px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 0,
    maxHeight: 0,
    "&$expanded": {
      minHeight: 0
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles({
  expanableRow: {
    padding: 0
  },
  root: {
    width: "100%",
  },
  container: {
    //maxHeight: 440
  }
});


//===========================================================================================

const SectionItemsTable = props => {
  // Local redefinitions...
  const dispatch = useDispatch();
  const classes = useStyles();
  
  // Global state...
  const testActions = useSelector(state => state.testActions);
  const currentSection = useSelector(state => state.currentSection);

  // Local state...
  const [expanded, setExpanded] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [isCtxMenuOpen, setCtxMenuOpen] = React.useState(null);

  // Local handlers...
  const handleCtxMenuClick = event => {
    setCtxMenuOpen(event.currentTarget);
  };

  const handleCtxMenuClose = () => {
    setCtxMenuOpen(null);
  };
  const handleExpandRow = panel => {
    setExpanded(expanded == panel ? false : panel);
  };

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Data Formatters...
  function toEditable(sectionItem) {
    return {
      id: sectionItem.id,
      name: sectionItem.name
    };
  }

  // Initializers...
  useEffect(() => {
    dispatch(getAllEntities(props.sectionType));
  },[getAllEntities]);

  // Renders...
  if (testActions.loading) {
    return <div>Loading</div>
  }

  if (testActions.error) {
      return <div style={{ color: 'red' }}>ERROR: {testActions.error}</div>
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              { columnsHeaders.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            { testActions.items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <React.Fragment key={'frag-' + row.id}>
                    <TableRow hover role="checkbox" tabIndex={-1} key={'tr-' + row.id}>
                      <TableCell style={{ width:30, padding:5, margin:5 }} key={'tc-' + row.id + ':1'}>
                        <IconButton
                          onClick={event =>
                            handleExpandRow("panel" + row.id, event)
                          }
                          color="inherit"
                        >
                          {expanded === "panel" + row.id ? (
                            <ExpandLessIcon />
                          ) : (
                            <ExpandMoreIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell style={{ width:30, padding:5, margin:5 }} key={'tc-' + row.id + ':1'}>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleCtxMenuClick}>
                          <MenuIcon/>
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={isCtxMenuOpen}
                          keepMounted
                          open={Boolean(isCtxMenuOpen)}
                          onClose={handleCtxMenuClose}
                        >
                          <MenuItem onClick={handleCtxMenuClose}><EditIcon/>Edit</MenuItem>
                          <MenuItem onClick={handleCtxMenuClose}><DeleteIcon/>Delete</MenuItem>
                          
                        </Menu>


                      </TableCell>

                      {columnsHeaders.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={'header' + row.id + ':' + column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                    <TableRow key={'tr-expand-' + row.id}>
                      <TableCell className={classes.expanableRow} colSpan={6}>
                        <ExpansionPanel
                          key={"exp" + row.id}
                          square
                          expanded={expanded === "panel" + row.id}
                          onChange={handleChange}
                        >
                          <ExpansionPanelSummary
                            key={"exps" + row.id}
                            aria-controls="panel1d-content"
                            id="panel1d-header"
                          ></ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <SectionItem key={row.id} item={row}></SectionItem>
                          </ExpansionPanelDetails>
                        </ExpansionPanel>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={testActions.items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

// const mapStateToProps = state => ({
//   data: state.reduxThunk.data,
//   loading: state.reduxThunk.loading,
//   error: state.reduxThunk.error,
// });
// const mapDispatchToProps = {
//   loadUsers
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SectionItemsTable);

export default SectionItemsTable;
