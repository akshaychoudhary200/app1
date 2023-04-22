import { Button, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => console.log("button clicked")} title="click me" />
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button
        title="Go to ImageScreen"
        onPress={() => navigation.navigate("ImgScrn")}
      />
      <Button
        title="Go to CounterScreen"
        onPress={() => navigation.navigate("CountScrn")}
      />
      <Button
        title="Go to ColorScreen"
        onPress={() => navigation.navigate("ColorScrn")}
      />
      <Button
        title="Go to ModifyColorScreen"
        onPress={() => navigation.navigate("ModifyColorRGB")}
      />
      <Button
        title="Go to ModifyColorScreenReducer"
        onPress={() => navigation.navigate("ModifyColorReducer")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="pass data from home to component"
        onPress={() => {
          navigation.navigate("Comp", {
            name: "akshay",
            age: 27,
          });
        }}
      />
      <TouchableOpacity onPress={() => console.log("opacity")}>
        <Text>opacity click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
