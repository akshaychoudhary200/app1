import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetailComp = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
      <Image source={props.imgSrc} />
      <Text>{props.likes}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetailComp;
