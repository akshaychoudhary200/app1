import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ModifyColorRGB from "./src/screens/ModifyColorRGB";
import ModifyColorReducer from "./src/screens/ModifyColorReducer";
import TextScreen from "./src/screens/TextScreen";
export default function App() {
  const navigate = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <navigate.Navigator initialRouteName="Home">
        <navigate.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: "Home Screen" }}
        />
        <navigate.Screen name="List" component={ListScreen} />
        <navigate.Screen name="Comp" component={ComponentScreen} />
        <navigate.Screen name="ImgScrn" component={ImageScreen} />
        <navigate.Screen name="CountScrn" component={CounterScreen} />
        <navigate.Screen name="ColorScrn" component={ColorScreen} />
        <navigate.Screen name="ModifyColorRGB" component={ModifyColorRGB} />
        <navigate.Screen name="TextScreen" component={TextScreen} />
        <navigate.Screen
          name="ModifyColorReducer"
          component={ModifyColorReducer}
        />
      </navigate.Navigator>
      {/* <View style={styles.container}>
        <HomeScreen />
        <ComponentScreen />
        <ListScreen style={styles.listStyle} />
        <StatusBar style="auto" />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    margin: 50,
  },
  listStyle: {
    backgroundColor: "black",
    color: "black",
  },
});
