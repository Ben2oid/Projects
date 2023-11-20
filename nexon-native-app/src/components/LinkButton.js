import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, memo } from "react";
import MyContext from "../hooks/MyContext";
import { useNavigation } from "@react-navigation/native";

const LinkButton = () => {
  const win = Dimensions.get("window");
  const navigation = useNavigation();
  const numForFunction = 1;
  const { blue, sweaterCounter } = useContext(MyContext);

  const pressHandler = () => {
    if (sweaterCounter > numForFunction) {
      navigation.navigate("Statpage");
    }
  };

  return (
    <View
      style={
        sweaterCounter > numForFunction
          ? [styles.containerAct, { zIndex: 100, top: win.height / 19 }]
          : styles.containerDeact
      }
    >
      <TouchableOpacity
        style={[styles.button, { backgroundColor: blue }]}
        onPress={pressHandler}
      >
        <Text style={styles.text}>Elküldöm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(LinkButton);

const styles = StyleSheet.create({
  containerAct: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
  },
  containerDeact: {
    opacity: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    width: "100%",
  },
  button: {
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 25,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 25,
  },
});
