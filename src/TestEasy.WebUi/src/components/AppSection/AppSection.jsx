import React, { Component } from "react";
import SectionHeader from "./SectionHeader";
import SectionItemsContainer from "./SectionItemsContainer";
import Card from "@material-ui/core/Card";
import sectionTypeEnum from '../../enums/sectionTypeEnum';

const AppSection = props => {
  const sectionItems = [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
    { id: 3, name: "catherine" }
  ];

  const dataTableStyles = {
    marginTop: 5
  };

  return (
    <React.Fragment>
      <SectionHeader />
      <Card style={dataTableStyles}>
        <SectionItemsContainer items={sectionItems} sectionType={sectionTypeEnum.ACTIONS}/>;
      </Card>
    </React.Fragment>
  );
};

export default AppSection;
