import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const ColorCounter = (props) => {
  const [color, setColor] = useState(`rgb(25, 25, 25)`);
  return (
    <View>
      <Text>{props.color}</Text>
      <Button
        title={`more ${props.color}`}
        onPress={() => props.onIncrease()}
      />
      <Button
        title={`less ${props.color}`}
        onPress={() => props.onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
