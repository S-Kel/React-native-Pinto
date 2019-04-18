import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = ({ size }) => {
  return (
    <View style={[styles.loader, styles.activityIndicator]}>
      <ActivityIndicator
        hidesWhenStopped
        animating={true}
        color="#bc2b78"
        size={size}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  activityIndicator: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
export default Loader;
