/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
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

const sleep = milliseconds =>
  new Promise(resolve => setTimeout(resolve, milliseconds));

const getFakerUsersFromAPI = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const getUsers = getFakerUsersFromFakerAPI(num);
      !getUsers.errorFetching
        ? resolve(getUsers.users)
        : reject(getUsers.error);
    }, 1000);
  });

const getFakerUsersFromFakerAPI = (numOfUsers = 5) => {
  let users = [];
  try {
    for (let i = 0; i < numOfUsers; i++) {
      const user = {
        name: Faker.name.findName(),
        email: Faker.internet.email(),
        bio: Faker.lorem.sentences(),
        userName: Faker.internet.userName(),
        imageSource: Faker.internet.avatar(),
        rating: (Math.random() * (50 - 0)) / 10,
        originalWidth: 800 + Math.random() * (1000 - 800),
        originalHeight: 667 + Math.random() * (1199 - 667)
        // imageSource: Faker.image.avatar(),
      };
      users.push(user);
    }
    return { users, errorFetching: false };
  } catch (error) {
    return { user: null, error: error, errorFetching: true };
  }
};

export default class App extends Component {
  state = {
    animating: null,
    users: [],
    errorFetch: false,
    imageURL:
      "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_available_3.jpg",
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

  componentDidMount() {
    this.generateFakerUsers();
  }
  componentDidUpdate() {}

  generateFakerUsers = async () => {
    try {
      this.setState({ animating: true });

      const users = await getFakerUsersFromAPI(10);

      this.setState(prevState => ({
        animating: false,
        errorFetch: false,
        users: [...prevState.users, ...users]
      }));
    } catch (eror) {
      console.log("Error fetching data", error);
      this.setState({ errorFetch: true });
    }
  };

  // Get all pins
  // Loop over them based on index
  // assign a key
  // two arrays, one for each column
  // %2==0 that will dictate which array the pine lives in
  // render the arrays into columns that scorllview utilize

  render() {
    const {
      columns,
      users,
      imageURL,
      errorFetch = false,
      animating = true,
      pin: { ange, harley }
    } = this.state;

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.pinContainer}
      >
        {!errorFetch && animating && (
          <View style={[styles.loader, styles.activityIndicator]}>
            <ActivityIndicator
              hidesWhenStopped
              animating={true}
              color="#bc2b78"
              size={80}
              // size="large"
              // style={styles.activityIndicator}
            />
          </View>
        )}
        {users.map((user, i) => (
          <Pin
            noImage={imageURL}
            animating={animating}
            pinSource={user}
            columns={columns}
            key={i}
          />
        ))}
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
    // aspectRatio: 1.5,
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10
  },
  loader: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  isLoadingText: {
    color: "#999",
    fontSize: 38
  },
  activityIndicator: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
