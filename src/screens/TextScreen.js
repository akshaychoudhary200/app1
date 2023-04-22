import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <View>
      <Text>Text Screen</Text>
      <TextInput
        style={styles.text_inp}
        placeholder="enter name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newName) => setName(newName)}
      />
      <Text>{name}</Text>
      <TextInput
        style={styles.text_inp}
        placeholder="enter password"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Text>{password.length < 4 ? <Text>Too Short</Text> : null}</Text>
      <TextInput
        style={styles.notes_inp}
        placeholder=""
        autoCapitalize="none"
        autoCorrect={false}
        value={notes}
        onChangeText={(notes) => setNotes(notes)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text_inp: {
    height: 25,
    fontSize: 20,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 20,
    padding: 30,
  },
  notes_inp: {
    height: 200,
    width: 200,
    fontSize: 30,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 20,
    padding: 1,
  },
});

export default TextScreen;
