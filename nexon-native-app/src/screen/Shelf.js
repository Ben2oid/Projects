import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  Vibration,
} from "react-native";
import React, { useContext, useRef, memo } from "react";
import MyContext from "../hooks/MyContext";

const win = Dimensions.get("window");
const ratio = win.width / 1127;

const Shelf = ({ shelf }) => {
  const {
    updatedShelfData,
    setUpdatedShelfData,
    updatedSweaterData,
    setUpdatedSweaterData,
    shelfPositions,
    setShelfPositions,
    sweaterCounter,
    setSweaterCounter,
  } = useContext(MyContext);
  const shelfRef = useRef(null);

  const {
    container,
    descripContainer,
    descrip,
    icons,
    icon,
    bigNum,
    shelfImage,
  } = styles;

  //handleLayout will calculate the position of the shelves

  const handleLayout = () => {
    if (shelfRef.current) {
      currentShelfPos = [...shelfPositions];
      shelfRef.current.measure((x, y, width, height, pageX, pageY) => {
        for (let i = 0; i < 4; i++) {
          if (i === shelf.num) {
            currentShelfPos.push({
              num: shelf.num,
              x: pageX + width / 2,
              y: pageY + height / 2,
              w: width,
              h: height,
            });
          }
        }
        setShelfPositions([...currentShelfPos]);
        if (shelfPositions.length === 4) {
          reorderShelves();
        }
      });
    }
  };

  const reorderShelves = () => {
    let reoderedArray = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (i === shelfPositions[j].num) {
          if (shelfPositions.length <= 4) reoderedArray.push(shelfPositions[j]);
        }
      }
    }
    setShelfPositions(reoderedArray);
  };

  //When pressing the shelf it should pop an item off of the shelf and back to the coathanger

  const pressHandler = () => {
    if (updatedShelfData[shelf.num].items.length > 0) {
      Vibration.vibrate(50);
      setSweaterCounter(sweaterCounter - 1);
      updatedShelfData[shelf.num].items.pop();
      const poppedSweater = updatedShelfData[shelf.num].itemToRemove.pop();

      updatedSweaterData[poppedSweater.num] = poppedSweater;
    }
  };

  //handling links

  const openLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <View style={[container, { zIndex: -10 }]}>
      <View style={descripContainer}>
        <Text style={descrip}>{shelf.descrip}</Text>
        <View style={icons}>
          <TouchableOpacity>
            <Image style={icon} source={require("../../assets/infoIcon.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink(shelf.link)}>
            <Image style={icon} source={require("../../assets/linkIcon.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={bigNum}>{shelf.items.length}</Text>
      <TouchableOpacity style={styles.shelfContainer} onPress={pressHandler}>
        {shelf.items
          .slice()
          .reverse()
          .map((foldedSweater) => {
            return (
              <Image
                key={`foldedSweater${foldedSweater.id}q`}
                source={foldedSweater.source}
                style={styles.sweaterImage}
              />
            );
          })}
        <Image
          onLayout={handleLayout}
          ref={shelfRef}
          style={shelfImage}
          source={require("../../assets/shelf.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Shelf);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    height: "100%",
    gap: 10,
  },
  descripContainer: {
    flex: 3,
    alignItems: "center",
    marginVertical: 10,
    marginTop: 25,
  },
  descrip: {
    flex: 2,
    color: "brown",
    textAlign: "center",
    fontWeight: "700",
  },
  icons: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  icon: {
    width: 35,
    height: 35,
  },
  bigNum: {
    flex: 1,
    color: "white",
    fontSize: 50,
    justifyContent: "center",
    textAlign: "center",
  },
  shelfContainer: {
    alignItems: "center",
  },
  sweaterImage: {
    width: win.width * 0.3,
    height: 100 * ratio * 0.4,
    marginBottom: -8,
    bottom: -25,
  },
  shelfImage: {
    width: win.width * 0.4,
    height: 260 * ratio * 0.4,
    marginTop: 30,
  },
});
