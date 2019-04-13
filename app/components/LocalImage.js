import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

const LocalImage = ({ source, originalWidth, originalHeight, columns }) => {
  let windowWidth = Dimensions.get("window").width;
  if (columns) {
    windowWidth = Dimensions.get("window").width / columns;
  }
  const widthChange = (windowWidth - 16) / originalWidth;

  const newWidth = originalWidth * widthChange;
  const newHeight = originalHeight * widthChange;
  return (
    <Image
      source={source}
      style={{ width: newWidth, height: newHeight, borderRadius: 10 }}
    />
  );
};

export default LocalImage;
