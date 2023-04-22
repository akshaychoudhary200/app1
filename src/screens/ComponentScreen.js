import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = ({ route, navigation }) => {
  const names = "akshay";
  const newelement = <Text>this is created elem</Text>;
  const { name, age } = route.params;
  return (
    <View style={styles.viewBg}>
      <Text style={styles.textStyle}> This is Component Screen </Text>
      <Text> {names} </Text>
      {newelement}
      <Text>data coming from Home Screen</Text>
      <Text>
        {JSON.stringify(name)} {JSON.stringify(age)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
  },
  viewBg: {
    backgroundColor: "red",
  },
});

export default ComponentScreen;
