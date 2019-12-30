import React, { Component } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import LeftSideBar from "./components/LeftSideBar";
import AppSectionContainer from "./components/AppSectionContainer";

class App extends Component {
  state = {
    open: false,
    setOpen: false
  };
  //const [open, setOpen] = React.useState(false);

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    const newState = !this.state.open;
    this.setState({ open: newState });
  };

  render() {
    return (
      <div className="App">
        <LeftSideBar
          onDrawerOpen={this.handleDrawerOpen}
          onDrawerClose={this.handleDrawerClose}
          open={this.state.open}
        />
        <TopBar
          open={this.state.open}
          onDrawerToggle={this.handleDrawerToggle}
        />

        <AppSectionContainer></AppSectionContainer>
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
