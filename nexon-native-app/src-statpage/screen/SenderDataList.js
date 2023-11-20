import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DataCard from "../components/DataCard";
import { FlashList } from "@shopify/flash-list";

export default function SenderDataList({ data, setData }) {
  const listData = [];

  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  for (let i = 3; i < data[1].length; i++) {
    listData.push({
      num: i - 2,
      sz: data[1][i][2],
      n: data[1][i][3],
      a: data[1][i][4],
      l: data[1][i][5],
      ip: data[1][i][0],
      date: new Date(data[1][i][1]).toLocaleDateString("hu-HU", options),
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.textField}>
        <Text style={styles.text}>#</Text>
        <Text style={styles.text}>Szen</Text>
        <Text style={styles.text}>Noé</Text>
        <Text style={styles.text}>Autiz</Text>
        <Text style={styles.text}>Lám</Text>
        <Text style={[styles.text, styles.alt]}>IP</Text>
        <Text style={[styles.text, styles.alt]}>Dátum</Text>
      </View>

      <FlashList
        data={listData}
        renderItem={(item) => (
          <DataCard item={item} setData={setData} data={data} />
        )}
        keyExtractor={(item) => `dataCard${item.num}q`}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  textField: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    marginHorizontal: 5,
    textAlign: "center",
    fontSize: 9,
  },
  alt: {
    flex: 4,
  },
});
