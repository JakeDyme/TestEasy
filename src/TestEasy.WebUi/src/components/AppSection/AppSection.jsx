import React, { Component } from "react";
import SectionHeader from "./SectionHeader";
import SectionItemsContainer from "./SectionItemsContainer";
import Card from "@material-ui/core/Card";
import sectionTypeEnum from '../../enums/SectionTypeEnum';
import { useSelector, useDispatch, connect } from "react-redux";
//import { getAllEntities } from '../../actions/commonEntityActions';

const AppSection = props => {
  const currentSectionType = useSelector(state => state.sectionType);
  //const currentEntityList = useSelector(state => state.currentEntityList);
  //const dispatch = useDispatch();
  //const sectionItems = useSelector(state => state.sectionItems);

  // useEffect(() => {
  //   dispatch(getAllEntities(currentSectionType));
  // },[getAllEntities, currentSectionType]);

  const dataTableStyles = {
    marginTop: 5
  };

  return (
    <React.Fragment>
      <SectionHeader sectionType={currentSectionType}/>
      <Card style={dataTableStyles}>
        <SectionItemsContainer sectionType={currentSectionType}/>;
      </Card>
    </React.Fragment>
  );
};

export default AppSection;
