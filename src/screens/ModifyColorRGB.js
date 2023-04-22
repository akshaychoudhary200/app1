import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const ModifyColorRGB = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const CHANGE_VALUE = 30;

  console.log(red + " " + green + " " + blue);

  /*   const setColor = (color, change) => {
    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return;
      } else {
        setRed(red + change);
      }
    }
  }; */

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
    }
  };

  return (
    // validations setColor so that value cant go below 0 or above 255
    <View>
      <ColorCounter
        color="red"
        onIncrease={() => setColor("red", CHANGE_VALUE)}
        onDecrease={() => setColor("red", -1 * CHANGE_VALUE)}
      />
      <ColorCounter
        color="green"
        onIncrease={() => setColor("green", CHANGE_VALUE)}
        onDecrease={() => setColor("green", -1 * CHANGE_VALUE)}
      />
      <ColorCounter
        color="blue"
        // onIncrease={() => setBlue(blue + CHANGE_VALUE)}
        // onDecrease={() => setBlue(blue - CHANGE_VALUE)}
        onIncrease={() => setColor("blue", CHANGE_VALUE)}
        onDecrease={() => setColor("blue", -1 * CHANGE_VALUE)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ModifyColorRGB;
