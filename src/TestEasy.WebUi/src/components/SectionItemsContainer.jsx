import React, { Component } from "react";
import SectionItemsTable from "./SectionItemsTable";
import Card from "@material-ui/core/Card";

function SectionItemsContainer(props) {
  const styles = {
    margin: 10
  };

  return (
    <Card style={styles}>
      <SectionItemsTable items={props.items} />;
    </Card>
  );
}

export default SectionItemsContainer;
