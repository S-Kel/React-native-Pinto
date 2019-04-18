import React from "react";
import { StyleSheet, View } from "react-native";

import UtilityNavButton from "./UtilityNavButton";
import Button from "./Button";

const Header = () => {
  return (
    <View style={styles.PinHeader}>
      <View style={styles.UtilityNav}>
        <UtilityNavButton icon="Back" />
        <UtilityNavButton icon="Heart" />
        <UtilityNavButton icon="Share" />
        <UtilityNavButton icon="More" />
      </View>
      <View style={styles.PinButtonContainer}>
        <Button red icon text="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  PinHeader: {
    flex: 1,
    minHeight: 60,
    padding: 10,
    backgroundColor: "teal",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  UtilityNav: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: "flex-end"
  }
});
export default Header;
