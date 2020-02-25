import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SectionEditor from "./SectionEditor/SectionEditor"
import sectionTypeEnum from "../../enums/sectionTypeEnum"
import { useSelector } from "react-redux"

const useStyles = makeStyles({
  card: {
    minWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const SectionHeader = props => {
  const selectedSectionType = useSelector(state => state.currentSectionType);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //const [sectionTitle, setSectionTitle] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  function getSectionTitle(inputSectionTypeEnum){
    switch (inputSectionTypeEnum){
      case sectionTypeEnum.TESTS: return "TESTS"
      case sectionTypeEnum.SETUPS: return "SETUPS"
      case sectionTypeEnum.ROUTINES: return "ROUTINES"
      case sectionTypeEnum.ACTIONS: return "ACTIONS" 
      default: return "error"
    }
  }

  // useEffect(() => {
  //   //let sectionTitle = 
  //   setSectionTitle(getSectionTitle(selectedSectionType))
  // }, [selectedSectionType]);

  return (
    <React.Fragment>
    <SectionEditor handleClose={ handleClose } open={open}></SectionEditor>
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {getSectionTitle(selectedSectionType)}
        </Typography>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Create New
        </Button>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions></CardActions>
    </Card>
    </React.Fragment>
  );
};

export default SectionHeader;
