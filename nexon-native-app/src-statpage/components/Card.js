import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import MyContext from "../../src/hooks/MyContext";
import useCounter from "../hooks/useCounter";

export default function Card({ name, value, num }) {
  const { transGrey } = useContext(MyContext);

  const { counter } = useCounter();

  return num < 5 ? (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: transGrey }]}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.nametxt}>{name}</Text>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataTxtContainer}>
          <Text style={styles.datatxt}>{parseInt(value * counter)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: transGrey }]}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.nametxt}>{name}</Text>
      </View>
      <View style={styles.dateContainer}>
        <View style={[styles.dataTxtContainer, { marginRight: 0, width: 160 }]}>
          <Text style={styles.datetxt}>{value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: 180,
    height: 100,
    borderRadius: 15,
  },
  nameContainer: {
    flex: 2,
  },
  nametxt: {
    flex: 1,
    fontWeight: "700",
    fontSize: 13,
    margin: 10,
  },
  dataContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 8,
  },
  dataTxtContainer: {
    marginBottom: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    width: "auto",
    backgroundColor: "rgba(143, 143, 143, 0.7)",
    borderRadius: 10,
  },
  datatxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  dateContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  datetxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
});
