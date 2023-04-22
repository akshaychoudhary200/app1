import { View, Text } from "react-native";
import { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return { ...state, green: state.green + action.amount };
    case "blue":
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const ModifyColorReducer = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 });
  const { red, blue, green } = state;

  const CHANGE_VALUE = 30;
  return (
    <View>
      <ColorCounter
        color="red"
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * CHANGE_VALUE })
        }
      />
      <ColorCounter
        color="blue"
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * CHANGE_VALUE })
        }
      />
      <ColorCounter
        color="green"
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: CHANGE_VALUE })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * CHANGE_VALUE })
        }
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      >
        <Text>Hello</Text>
      </View>
    </View>
  );
};

export default ModifyColorReducer;
