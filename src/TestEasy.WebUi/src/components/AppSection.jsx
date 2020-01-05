import React, { Component } from "react";
import SectionItemsContainer from "./SectionItemsContainer";
import SectionHeader from "./SectionHeader";
import SectionItemsTable from "./SectionItemsTable";
import Card from "@material-ui/core/Card";

function AppSection() {
  const sectionItems = [
    { id: 1, name: "alice" },
    { id: 2, name: "bob" },
    { id: 3, name: "catherine" }
  ];

  const styles = {
    position: "fixed",
    marginTop: 70,
    marginLeft: 80,
    marginRight: 5,
    marginBottom: 5
  };

  return (
    <React.Fragment>
      <SectionHeader />
      <Card style={styles}>
        <SectionItemsTable items={sectionItems} />;
      </Card>
    </React.Fragment>
  );
}

export default AppSection;
