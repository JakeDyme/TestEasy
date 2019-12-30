import React from "react";
import Card from "@material-ui/core/Card";

function SectionItem(props) {
  return <Card>{props.item.name}</Card>;
}

export default SectionItem;
