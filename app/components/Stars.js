import React, { Component } from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Stars = ({ rating }) => {
  const stars = [...Array(Math.ceil(rating))];

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {stars.map((x, i) => {
        const name = Math.floor(rating) > i ? "star" : "star-half";
        return <Icon key={i} name={name} size={30} color="#FFD64C" />;
      })}
      <Text style={{ fontSize: 18, fontWeight: "600" }}>
        {` ${rating.toFixed(1)}`}
      </Text>
    </View>
  );
};

export default Stars;
