import React, { useContext } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../src/screen/Header";
import MainComp from "../src/screen/MainComp";
import MyContex from "../src/hooks/MyContext";

export default function AppIndex() {
  const { bgcolor } = useContext(MyContex);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgcolor }]}>
      <Header />
      <MainComp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
