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
import Loader from "./app/util/spinners/Loader";
import Header from "./app/components/Header";
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

const getFakerUsers = numberOfUsers =>
  Promise.resolve().then(v => {
    const users = [];
    for (let i = 0; i < numberOfUsers; i++) {
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
    return users;
  });

const getFakerUsersAsync = async numberOfUsers => {
  const users = [];

  for (let i = 0; i < numberOfUsers; i++) {
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
  await sleep(1000);

  return users;
};

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
    heartSelect: false,
    imageURL:
      "https://smhttp-ssl-50970.nexcesscdn.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/no_image_available_3.jpg",
    columns: 2
  };

  componentDidMount() {
    this.generateFakerUsers();
  }
  componentDidUpdate() {}

  generateFakerUsers = async () => {
    try {
      this.setState({ animating: true });

      // const users = await getFakerUsersFromAPI(10);
      // const users = await getFakerUsers(20);
      // console.log("async users", users);
      const users = await getFakerUsersAsync(10);

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
      animating = true
    } = this.state;

    if (!errorFetch && animating) return <Loader size={80} />;
    return (
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.pinContainer}
        data={users}
        renderItem={({ item, index }) => (
          <View style={styles.pincontainer}>
            <Pin
              noImage={imageURL}
              animating={animating}
              pinSource={item}
              columns={columns}
              key={item.userName}
              onHeartSelect={this.handleHeartSelect}
            />
          </View>
        )}
        keyExtractor={user => user.email}
        // ItemSeparatorComponent={this.renderSeparator}
        // ListHeaderComponent={this.renderHeader}
        // ListHeaderComponent={() => <Header />}
      />
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
