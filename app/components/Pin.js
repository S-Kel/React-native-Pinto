import React, { Component } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image
} from "react-native";
import Stars from "./Stars";

import UtilityNavButton from "./UtilityNavButton";
import Button from "./Button";
import LocalImage from "./LocalImage";

const windowWidth = Dimensions.get("window").width;

class Pin extends Component {
  state = { heart: false };

  toggleOnHeartPressed = () => {
    console.log("heart clicked");
    this.setState({ heart: !this.state.heart });
  };

  render() {
    const { pinSource, columns } = this.props;
    const { heart } = this.state;

    // console.log("Pin Source data===>", pinSource);
    return (
      <View
        style={styles.PinContainer}
        // style={[styles.PinContainer, { width: windowWidth / columns }]}
      >
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <UtilityNavButton icon="Back" />
            <TouchableOpacity onPress={this.toggleOnHeartPressed}>
              <UtilityNavButton
                icon="Heart"
                color={heart ? "red" : "#f2f2f2"}
              />
            </TouchableOpacity>

            <UtilityNavButton icon="Share" />
            <UtilityNavButton icon="More" />
          </View>
          <View style={styles.PinButtonContainer}>
            <Button red icon text="Save" />
          </View>
        </View>

        <View style={styles.PinContent}>
          <LocalImage
            source={{
              uri: pinSource.imageSource
            }}
            originalWidth={parseInt(pinSource.originalWidth)}
            originalHeight={parseInt(pinSource.originalHeight)}
            columns={columns}
          />
          <View style={styles.stars}>
            <Stars rating={pinSource.rating} />
          </View>
          <Text style={{ letterSpacing: 1, fontSize: 18 }}>
            {pinSource.name}
          </Text>
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Saved from</Text>
            <Text
              style={[
                styles.PinMetaText,
                styles.TextBold,
                { color: "#0303ad" }
              ]}
            >
              website.com
            </Text>
          </View>
          <View style={styles.PinButtonContainer}>
            <Button text="Visit" />
          </View>
        </View>

        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>
            <Image
              source={require("../assets/images/user.png")}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>{pinSource.userName} </Text>
              saved to
              <Text style={styles.TextBold}> Space</Text>
            </Text>
            <Text style={styles.PinUserText}>{pinSource.bio}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const getName = username => username.split(".")[0] || username.split("_")[0];
const styles = StyleSheet.create({
  imageStyle: {
    width: 60,
    height: 60,
    resizeMode: "center"
  },
  PinContainer: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "red",
    marginTop: 20
    // paddingLeft: 20,
    // paddingRight: 20
  },
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
  },
  PinButton: {
    flexDirection: "row",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 6,
    justifyContent: "space-between",
    width: 65
  },
  PinButtonText: {
    color: "white"
  },
  PinContent: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    paddingLeft: 8,
    paddingRight: 8
  },
  // ImagePlaceholder: {
  //   flex: 1,
  //   alignSelf: "stretch",
  //   backgroundColor: "#1e1e1e",
  //   borderRadius: 6
  // },

  PinMeta: {
    flex: 1,
    minHeight: 80,
    flexDirection: "row",
    paddingTop: 16,
    paddingRight: 10,
    paddingBottom: 16,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "#f1f1f1"
  },

  UtilityButton: {
    backgroundColor: "#cecece",
    alignItems: "center",
    justifyContent: "center"
  },
  UtilityButtonText: {
    color: "black",
    fontWeight: "bold"
  },
  TextBold: {
    fontWeight: "bold"
  },
  // PinMetaTextContainer: {},
  PinMetaText: {
    // paddingRight: 20
  },
  PinUser: {
    flex: 4,
    flexDirection: "row",
    // paddingLeft: 10,
    // paddingRight: 10,
    marginBottom: 30
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    backgroundColor: "#1492A1",
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 10
  },
  // avatarImage: {},
  PinUserContainer: {
    width: "100%",
    paddingRight: 55
    // paddingLeft: 50
  },
  PinUserText: {
    fontSize: 18
    // letterSpacing: 2
    // width: "95%"
    // backgroundColor: "#f4f4f4"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  stars: {}
});
export default Pin;
