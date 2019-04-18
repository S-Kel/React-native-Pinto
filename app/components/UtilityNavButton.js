import React, { Component } from "react";
import { View, Text } from "react-native";
import { Back, Heart, Share, More } from "../util/icons";

class UtilityNavButton extends Component {
  render() {
    const { icon, color } = this.props;
    switch (icon) {
      case "Back":
        return <Back />;
        break;
      case "Heart":
        return <Heart color={color} />;
        break;
      case "Share":
        return <Share />;
        break;
      case "More":
        return <More />;
        break;
      default:
        return "No Icon";
    }
  }
}

export default UtilityNavButton;
