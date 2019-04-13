import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Back, Heart, More, PinIcon, Share } from "../util/icons";
import UtilityNavButton from "./UtilityNavButton";

class Button extends Component {
  render() {
    const { icon, red, text } = this.props;
    let bgColor, textWeight, textColor;

    if (red) {
      bgColor = "red";
      textColor = "white";
    } else {
      bgColor = "#CECECE";
      textWeight = "bold";
      textColor = "black";
    }

    return (
      <View style={[styles.PinButton, { backgroundColor: bgColor }]}>
        {icon && <PinIcon />}
        <Text
          style={[
            styles.PinButtonText,
            { color: textColor, fontWeight: textWeight }
          ]}
        >
          {text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PinButtonContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  PinButton: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 6,
    justifyContent: "space-around",
    width: 65
  }
  // PinButtonText: {
  //   color: "white"
  // }
});
export default Button;
