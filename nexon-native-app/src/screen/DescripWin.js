import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DescripWin() {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <Text>Lorem Ipsum</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    backgroundColor: "#0A4169",
  },
});
