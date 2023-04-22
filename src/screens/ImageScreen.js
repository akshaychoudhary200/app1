import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetailComp from "../components/ImageDetailComp";

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <Text>Image Detail Component</Text>
      <ImageDetailComp
        title="image1"
        imgSrc={require("../../assets/images/beach.jpg")}
        likes="9"
      />
      <ImageDetailComp
        title="image2"
        imgSrc={require("../../assets/images/forest.jpg")}
        likes="9"
      />
      <ImageDetailComp
        title="image2"
        imgSrc={require("../../assets/images/mountain.jpg")}
        likes="9"
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
