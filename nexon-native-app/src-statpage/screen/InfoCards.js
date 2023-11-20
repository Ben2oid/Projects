import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "../components/Card";

export default function InfoCards({ data, counter }) {
  var options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const cardData = [
    {
      num: 0,
      id: "20202222t",
      value: data[1][0],
      name: "Küldők száma: ",
    },
    {
      num: 1,
      id: "20202221r",
      value: data[1][2],
      name: "Szent István Király Zenei Alapítvány: ",
    },
    {
      num: 2,
      id: "20202220e",
      value: data[1][3],
      name: "Noé Állatotthon Közhasznú Alapítvány: ",
    },
    {
      num: 3,
      id: "2020221w",
      value: data[1][4],
      name: "Autizmus Alapítvány: ",
    },
    {
      num: 4,
      id: "2020222q",
      value: data[1][5],
      name: "Lámpás '92 Közhasznú Alapítvány: ",
    },
    {
      num: 5,
      id: "2020232q",
      value: new Date(data[data.length - 1][1]).toLocaleDateString(
        "hu-HU",
        options
      ),
      name: "Utolsó adat beküldve:",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardData.map((card) => {
          return (
            <View style={styles.card} key={card.id}>
              <Card
                name={card.name}
                value={card.value}
                num={card.num}
                data={data}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  card: {
    marginVertical: 0,
    marginHorizontal: 5,
  },
});
