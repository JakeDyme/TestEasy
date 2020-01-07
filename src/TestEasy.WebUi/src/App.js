import React from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import LeftSideBar from "./components/LeftSideBar";
import AppSectionContainer from "./components/AppSectionContainer";
const leftbarOpenSize = 245;
const leftbarClosedSize = 80;
const topbarheight = 69;

const App = () => {
  const [open, setOpen] = React.useState(true);
  const [leftbarwidth, setSize] = React.useState(leftbarOpenSize);

  const handleDrawerOpen = () => {
    setOpen(true);
    setSize(leftbarOpenSize);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSize(leftbarClosedSize);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
    setSize(
      leftbarwidth == leftbarOpenSize ? leftbarClosedSize : leftbarOpenSize
    );
  };

  return (
    <div className="App">
      <TopBar open={open} onDrawerToggle={handleDrawerToggle} />
      <LeftSideBar
        onDrawerOpen={handleDrawerOpen}
        onDrawerClose={handleDrawerClose}
        open={open}
      />
      <AppSectionContainer
        leftbarwidth={leftbarwidth}
        topbarheight={topbarheight}
      ></AppSectionContainer>
      <header className="App-header"></header>
    </div>
  );
};

export default App;
