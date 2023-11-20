import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import React, { useContext } from "react";
import MyContext from "../../src/hooks/MyContext";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import useFetchDel from "../hooks/useFetchDel";

export default function DataCard({ item, setData, data }) {
  const {
    transGrey,
    updatedShelfData,
    setUpdatedShelfData,
    updatedSweaterData,
    setUpdatedSweaterData,
    myId,
  } = useContext(MyContext);

  //gesture handling

  const offsetX = useSharedValue(0);
  const win = Dimensions.get("window");
  const trigg = useSharedValue(false);

  const vibration = () => {
    trigg.value = true;
    Vibration.vibrate(50);
  };

  const pan = Gesture.Pan()
    .onBegin(() => {
      trigg.value = false;
      console.log("touched");
    })
    .activeOffsetX([-20, 5])
    .onChange((e) => {
      if (e.translationX < 0 && e.translationX > -win.width / 4) {
        offsetX.value = e.translationX;
      }
      if (e.translationX <= -win.width / 4 && !trigg.value) {
        offsetX.value = -win.width / 4;
        runOnJS(vibration)();
      }
    })
    .onFinalize(() => {
      if (!trigg.value) {
        offsetX.value = withSpring(0);
      }
    });

  const animatedstyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }],
  }));

  //We are handling the deletion of the item here

  const pressHandler = () => {
    const dataToDel = item.item.num + 3;
    useFetchDel(dataToDel, myId);
    const updatedData = [...data];
    //sum all senders handler
    updatedData[1][1][0] -= 1;
    //sum all Szent
    updatedData[1][1][2] -= updatedData[1][item.item.num + 2][2];

    //sum all Noé
    updatedData[1][1][3] -= updatedData[1][item.item.num + 2][3];

    //sum all Aut
    updatedData[1][1][4] -= updatedData[1][item.item.num + 2][4];

    //sum all Lámp
    updatedData[1][1][5] -= updatedData[1][item.item.num + 2][5];
    // and then we remove the item
    updatedData[1].splice(item.item.num + 2, 1);
    setData(updatedData);
    offsetX.value = 0;
  };

  return (
    <>
      <View style={styles.delContainer}>
        <TouchableOpacity style={styles.delItem} onPress={pressHandler}>
          <Ionicons
            name="trash"
            size={24}
            color="white"
            style={{ paddingEnd: win.width / 10 }}
          />
        </TouchableOpacity>
      </View>
      <GestureDetector gesture={pan} activeOffsetX={[-400, 400]}>
        <Animated.View
          style={[
            animatedstyles,
            styles.container,
            { backgroundColor: transGrey },
          ]}
        >
          <View
            style={[
              styles.txtContainer,
              {
                backgroundColor: "rgba(255, 255, 255, 0.50)",
                paddingVertical: 3,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: "black",
                  fontSize: item.item.num > 999 ? 7 : 10,
                },
              ]}
            >
              {item.item.num}
            </Text>
          </View>

          <View style={styles.txtContainer}>
            <Text style={styles.text}>{item.item.sz}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.text}>{item.item.n}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.text}>{item.item.a}</Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.text}>{item.item.l}</Text>
          </View>
          <View style={[styles.txtContainer, styles.alt]}>
            <Text style={[styles.text, { fontSize: 10 }]}>{item.item.ip}</Text>
          </View>
          <View style={[styles.txtContainer, styles.alt]}>
            <Text style={[styles.text, { fontSize: 10 }]}>
              {item.item.date}
            </Text>
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    marginVertical: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
  },
  delContainer: {
    position: "absolute",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  delItem: {
    borderRadius: 10,
    height: "90%",
    width: "50%",
    backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  txtContainer: {
    flex: 1,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: "rgba(143, 143, 143, 0.7)",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  alt: {
    flex: 4,
    paddingVertical: 3,
  },
});
