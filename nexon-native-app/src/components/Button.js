import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import MyContext from "../hooks/MyContext";
import SweaterData from "../utilites/SweaterData";
import ShelfData from "../utilites/ShelfData";

export default function Button() {
  const {
    sweaterCounter,
    setSweaterCounter,
    setUpdatedSweaterData,
    updatedSweaterData,
    setUpdatedShelfData,
  } = useContext(MyContext);

  const pressHandler = () => {
    if (sweaterCounter > 0) {
      setUpdatedShelfData([
        {
          id: "shelf01q",
          num: 0,
          items: [],
          itemToRemove: [],
          descrip: "Lámpás ’92 Közhasznú Alapítvány",
          link: "https://lampas92.hu",
        },
        {
          id: "shelf02q",
          num: 1,
          items: [],
          itemToRemove: [],
          descrip: "Autizmus Alapítvány",
          link: "https://www.autizmus.hu",
        },
        {
          id: "shelf03q",
          num: 2,
          items: [],
          itemToRemove: [],
          descrip: "NOÉ Állatotthon Közhasznú Alapítvány",
          link: "http://www.noeallatotthon.hu/",
        },
        {
          id: "shelf04q",
          num: 3,
          items: [],
          itemToRemove: [],
          descrip: "Szent István Király Zenei Alapítvány",
          link: "https://www.szentistvanzene.hu/szent-istvan-kiraly-zenei-alapitvany/",
        },
      ]);
      setUpdatedSweaterData([...SweaterData]);
      setSweaterCounter(0);
    }
  };

  return (
    <View style={sweaterCounter > 0 ? styles.container : { opacity: 0 }}>
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.text}>Visszaállítás</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
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
