import React, { useEffect, useState } from "react";
import axios from "axios";
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
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const SECTION_ITEMS_ENDPOINT = "https://localhost:5001/view/actions";

const columnsHeaders = [
  {
    id: "name",
    label: "Name",
    minWidth: 170,
    align: "right",
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
    width: "100%"
  },
  container: {
    
    //maxHeight: 440
  }
});

const SectionItemsTable = props => {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [data, setData] = useState({ items: [], isFetching: false });

  function toEditable(sectionItem) {
    return {
      id: sectionItem.id,
      name: sectionItem.name
    };
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setData({ items: data.items, isFetching: false });
        const response = await axios.get(SECTION_ITEMS_ENDPOINT);
        setData({
          items: response.data.map(d => toEditable(d)),
          isFetching: false
        });
      } catch (e) {
        console.log(e);
        setData({ items: data.items, isFetching: false });
      }
    };
    fetchUsers();
  }, []);

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

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {columnsHeaders.map(column => (
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
            {data.items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <React.Fragment>
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell key={0}>
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

                      {columnsHeaders.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                    <TableRow>
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
        count={data.items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SectionItemsTable;
