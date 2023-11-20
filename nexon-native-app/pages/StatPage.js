import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import MyContext from "../src/hooks/MyContext";
import InfoCards from "../src-statpage/screen/InfoCards";
import SenderDataList from "../src-statpage/screen/SenderDataList";
import ColumnStat from "../src-statpage/screen/ColumnStat";
import useFetch from "../src/hooks/useFetch";
import { useNavigation } from "@react-navigation/native";

function StatPage() {
  const { red, bgcolor, blue, updatedShelfData, myId } = useContext(MyContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const { error } = useFetch(updatedShelfData, setLoading, setData, myId);
  const navigation = useNavigation();
  const [count, setCount] = useState(3);

  const countDown = () => {
    setTimeout(() => {
      navigation.navigate("Index");
    }, 3000);

    let timerCount = 3;

    const myInterval = setInterval(() => {
      timerCount -= 1;
      setCount(timerCount);
    }, 1000);
    if (timerCount < 0) {
      clearInterval(myInterval);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bgcolor }]}>
      {loading ? (
        <View style={styles.loadPage}>
          <ActivityIndicator size={"auto"} color={blue} />
          <Text style={styles.text}>Kis türelmet...</Text>
        </View>
      ) : data[0].early && false ? (
        <View style={styles.loadPage} onLayout={countDown}>
          <Text style={styles.text}>
            Legalább 10 percet várjon a következő beküldésével, köszönjük.
          </Text>
          <Text style={styles.text}>Vissza irányítjuk:</Text>
          <Text style={styles.number}>{count}</Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Adatok</Text>
          <InfoCards data={data[1]} />
          <Text style={styles.subTitle}>Beküldők listája</Text>
          <SenderDataList data={data} setData={setData} />
          <ColumnStat data={data} />
        </>
      )}
    </SafeAreaView>
  );
}

export default StatPage;

const styles = StyleSheet.create({
  loadPage: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    margin: 10,
    textAlign: "center",
  },
  number: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "700",
    color: "white",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "center",
  },
  title: {
    margin: 10,
    fontWeight: "700",
    fontSize: 50,
  },
  subTitle: {
    margin: 10,
    fontWeight: "700",
    fontSize: 20,
  },
});
