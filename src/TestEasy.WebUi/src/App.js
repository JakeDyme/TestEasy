import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import LeftSideBar from "./components/LeftSideBar";
import AppSectionContainer from "./components/AppSectionContainer";

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <LeftSideBar
        onDrawerOpen={handleDrawerOpen}
        onDrawerClose={handleDrawerClose}
        open={open}
      />
      <TopBar open={open} onDrawerToggle={handleDrawerToggle} />

      <AppSectionContainer></AppSectionContainer>
      <header className="App-header"></header>
    </div>
  );
};

export default App;
