import { Dimensions, Image, StyleSheet, View } from "react-native";
import React, { useContext } from "react";
import Draggable from "../components/Draggable";
import MyContext from "../hooks/MyContext";
import LinkButton from "../components/LinkButton";

const win = Dimensions.get("window");
const ratio = win.width / 3831;

export default function CoatHanger() {
  const { updatedSweaterData } = useContext(MyContext);

  console.log("go");

  return (
    <View style={styles.container}>
      <LinkButton />
      <Image
        style={styles.image}
        source={require("../../assets/coathanger.png")}
      />
      <View style={styles.imageWrapper}>
        {updatedSweaterData.map((sweater) => {
          return (
            <View style={styles.sweaterContainer} key={`view${sweater.id}qr`}>
              <Image
                key={`hanger${sweater.id}q`}
                source={require("../../assets/coathanger-piece.png")}
                style={styles.coathanger}
              />
              <Draggable source={sweater} key={`sweater${sweater.id}q`} />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    marginTop: 25,
    width: win.width,
    height: 971 * ratio,
    zIndex: -10,
  },
  imageWrapper: {
    zIndex: 100,
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    width: "100%",
    top: 50,
    left: 20,
  },
  sweaterContainer: {
    margin: -5,
  },
  coathanger: {
    position: "absolute",
    width: win.width * 0.08,
    marginLeft: win.width * 0.02,
    height: 30,
    top: -12,
    left: -3.9,
    zIndex: -10,
  },
});
