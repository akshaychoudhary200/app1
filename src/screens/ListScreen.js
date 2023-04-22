import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const arr = [1,2,3,4];
  const user = [
    {name: "user1", key: "1"},
    {name: "user2", key: "2"},
    {name: "user3", key: "3"},
  ];
  const people = [
    {name: "user1"},
    {name: "user2"},
    {name: "user3"},
  ];

  const freind = [
    {name: 'friend1', age: 24},
    {name: 'friend2', age: 28},
    {name: 'friend3', age: 27},
    {name: 'friend4', age: 26},
    {name: 'friend5', age: 25}
  ];

  return (
    <View>
      <Text style = {styles.text}>This is list screen</Text>
      <FlatList
       data={arr}
       renderItem={({item}) => {
        return <Text>{item}</Text>
       }}
      />

      <FlatList
      data={freind}
      keyExtractor={friend => friend.name}
      renderItem={({item}) => {
        return <Text>{item.name} Age:{item.age}</Text>
      }}
      />

      <FlatList
       data={user}
       renderItem={({item}) => {
        return <Text>{item.name}</Text>
       }}
      />

      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={user => people.name}
       data={people}
       renderItem={({item}) => {
        return <Text>{item.name}</Text>
       }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    color: "blue"
  }
})

export default ListScreen;