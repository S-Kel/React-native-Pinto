import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

const LocalImage = props => {
  const { source, columns, originalWidth, originalHeight } = props;

  let windowWidth = Dimensions.get("window").width;

  if (columns) windowWidth = Dimensions.get("window").width / columns;

  const widthChange = (windowWidth - 16) / originalWidth;

  const newWidth = originalWidth * widthChange;
  const newHeight = originalHeight * widthChange;

  // console.log(source.width, source.height);

  return (
    <Image
      source={source}
      style={{
        width: newWidth,
        height: newHeight,
        borderRadius: 10
        // flex: 1
      }}
      // resizeMode="contain"
    />
  );
};

export default LocalImage;
