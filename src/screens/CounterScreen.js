import { useReducer, useState } from "react";
import { View, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "incr":
      // with payload
      return { ...state, count: state.count + action.payload };
    case "decr":
      // with payload
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  // react will detect a change and will re render the component for us
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  count = 0;
  return (
    <View>
      <Text>Counter Screen</Text>
      <Button
        title="increment"
        onPress={() => {
          count++;
          console.log("increment" + count);
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          count--;
          console.log("decrement" + count);
        }}
      />
      <Text>{count}</Text>
      <Text>Using state</Text>

      <Button
        title="increment"
        onPress={() => {
          setCounter(counter + 1);
          //console.log("increment" + count);
        }}
      />
      <Button
        title="decrement"
        onPress={() => {
          setCounter(counter - 1);
          //console.log("decrement" + count);
        }}
      />
      <Text>{counter}</Text>
      <Text>Using reducer</Text>
      <Button
        title="increment"
        onPress={() => dispatch({ type: "incr", payload: 1 })}
      />
      <Button
        title="decrement"
        onPress={() => dispatch({ type: "decr", payload: 1 })}
      />
      <Text>{state.count}</Text>
    </View>
  );
};

export default CounterScreen;
