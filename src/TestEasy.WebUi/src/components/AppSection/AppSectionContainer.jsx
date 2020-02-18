import React, { Component } from "react";
import AppSection from "./AppSection";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const AppSectionContainer = props => {
  const { height, width } = useWindowDimensions();

  const styles = {
    position: "fixed",
    top: props.topbarheight,
    left: props.leftbarwidth,
    width: width - props.leftbarwidth,
    height: height - props.topbarheight
  };

  return (
    <div style={styles}>
      <AppSection
        leftbarwidth={props.leftbarwidth}
        topbarheight={props.topbarheight}
      ></AppSection>
    </div>
  );
};

export default AppSectionContainer;
