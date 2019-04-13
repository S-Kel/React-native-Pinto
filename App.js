/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  Button
} from "react-native";

import FastImage from "react-native-fast-image";
import Faker from "faker";

import Pin from "./app/components/Pin";
import UtilityNavButton from "./app/components/UtilityNavButton";
// import FlexBasics from "./app/components/FlexBasics";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      imageURL:
        "https://reactnativecode.com/wp-content/uploads/2018/02/motorcycle.jpg",
      columns: 2,
      pin: {
        ange: {
          imageSource: require("./app/assets/images/ange.png"),
          originalWidth: 1000,
          originalHeight: 667
        },
        harley: {
          imageSource: require("./app/assets/images/harley.jpg"),
          originalWidth: 800,
          originalHeight: 1199
        }
      }
    };
  }

  componentDidMount() {
    // this.generateFakerUsers;
    this.generateFakerUsers(10);
    console.log("this.state.users======>>>>>>>>>>>>");
    // console.log(this.state.users);
  }
  generateFakerUsers = numUsers => {
    for (let i = 0; i < numUsers; i++) {
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        imageSource: Faker.internet.avatar(),
        // originalWidth: 800,
        // originalHeight: 1199
        originalWidth: 800 + Math.random() * (1000 - 800),
        originalHeight: 667 + Math.random() * (1199 - 667)
      };

      this.setState(prevState => ({
        users: [...prevState.users, user]
        // pin: [ ...prevState.users, user]
      }));
    }
  };
  // Get all pins
  // Loop over them based on index
  // assign a key
  // two arrays, one for each column
  // %2==0 that will dictate which array the pine lives in
  // render the arrays into co,umns that scorllview utilize

  render() {
    const {
      columns,
      users,
      pin: { ange, harley }
    } = this.state;
    if (!users) return;

    const pins = users.map((user, i) => (
      <Pin pinSource={user} columns={columns} key={i} />
    ));

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.pinContainer}
      >
        {pins}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
    // flexDirection: "row",
  },

  pinContainer: {
    // flex: 1,
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10

    // alignSelf: "flex-start",
    // alignItems: "flex-start"
  }
});
