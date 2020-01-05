import React, { Component } from "react";
import AppSection from "./AppSection";

function AppSectionContainer() {
  const styles = {
    position: "fixed",
    marginTop: 70,
    marginLeft: 80,
    marginRight: 5,
    marginBottom: 5
  };

  return (
    <div style={styles}>
      <AppSection></AppSection>
    </div>
  );
}

export default AppSectionContainer;
