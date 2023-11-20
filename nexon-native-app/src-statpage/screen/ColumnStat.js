import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import useCounter from "../hooks/useCounter";

export default function ColumnStat({ data }) {
  const cardData = [
    {
      num: 0,
      id: "20202222tr",
      value: data[1][1][0],
      name: "Küldők száma",
    },
    {
      num: 1,
      id: "20202221rr",
      value: data[1][1][2],
      name: "Szent István",
    },
    {
      num: 2,
      id: "20202220er",
      value: data[1][1][3],
      name: "Noé",
    },
    {
      num: 3,
      id: "2020221wr",
      value: data[1][1][4],
      name: "Aut. Alapítvány",
    },
    {
      num: 4,
      id: "2020222qr",
      value: data[1][1][5],
      name: "Lámpás '92",
    },
  ];

  let value;
  let bigValue = 0;

  const checkValue = () => {
    cardData.map((data) => {
      if (data.value > bigValue) {
        bigValue = data.value;
      }
    });
    value = bigValue / 4;
  };
  checkValue();

  const { counter } = useCounter();

  return (
    <View style={styles.container}>
      {cardData.map((data) => {
        return (
          <TouchableOpacity
            style={styles.dataContainer}
            key={`column${data.id}`}
          >
            <Text
              style={[
                styles.text,
                {
                  color: "rgba(82, 122, 255, 0.7)",
                  fontWeight: "700",
                  fontSize: 20,
                  padding: 0,
                  margin: -10,
                },
              ]}
            >
              {parseInt(data.value * counter)}
            </Text>
            <View
              style={[
                styles.column,
                {
                  height: ((50 * data.value) / value) * counter,
                },
              ]}
            ></View>
            <Text style={styles.text}>{data.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flex: 1,
    margin: 5,
  },
  dataContainer: {
    flex: 1,
    flexDirection: "column",
  },
  column: {
    borderRadius: 10,
    backgroundColor: "rgba(82, 122, 255, 0.7)",
    margin: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 8,
    color: "black",
    fontWeight: "700",
  },
});
