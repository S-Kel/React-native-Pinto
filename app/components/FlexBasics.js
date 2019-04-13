import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Heart, More, Share } from "../util/icons";

class FlexBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxOne]}>
          <Heart />
          <Share />
          <More />
        </View>
        <View style={[styles.boxContainer, styles.boxTwo]}>
          <Share />
        </View>
        <View style={[styles.boxContainer, styles.boxThree]}>
          <More />
          <More />
          <More />
          <More />
          <More />
          <More />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20
  },
  boxOne: {
    flex: 3, // 3:6
    width: 420,
    justifyContent: "space-around",
    backgroundColor: "#FFEEE4"
    // alignItems: "flex-end",
    // alignItems: "flex-start",
    // justifyContent: "space-between",
  },
  boxTwo: {
    // flex: 1, // 1:6
    backgroundColor: "#F17F42"
  },
  boxThree: {
    flex: 2, // 2:6
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "#CE6039"
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row-reverse"
//   },
//   boxContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   boxOne: {
//     flex: 3, // 3:6
//     width: 700,
//     alignSelf: "stretch",
//     backgroundColor: "#FFEEE4"
//   },
//   boxTwo: {
//     // flex: 1, // 1:6
//     backgroundColor: "#F17F42"
//   },
//   boxThree: {
//     flex: 2, // 2:6
//     backgroundColor: "#CE6039"
//   }
// });
export default FlexBasics;
