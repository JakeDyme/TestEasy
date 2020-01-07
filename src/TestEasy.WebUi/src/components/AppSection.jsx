import React, { Component } from "react";
import SectionItemsContainer from "./SectionItemsContainer";
import SectionHeader from "./SectionHeader";
import SectionItemsTable from "./SectionItemsTable";
import Card from "@material-ui/core/Card";

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
        <SectionItemsTable items={sectionItems} />;
      </Card>
    </React.Fragment>
  );
};

export default AppSection;
