import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";

const win = Dimensions.get("window");
const ratio = win.width / 1836;

const Header = () => {
  return (
    <View style={{ zIndex: -10 }}>
      <Image
        source={require("../../assets/headerImage2022_small.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  image: {
    width: win.width,
    height: 864 * ratio,
  },
});
