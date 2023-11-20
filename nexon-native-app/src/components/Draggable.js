import { Dimensions, StyleSheet, Vibration, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import MyContext from "../hooks/MyContext";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import ShelfData from "../utilites/ShelfData";

const win = Dimensions.get("window");
const ratio = win.width / 577;

export default function Draggable({ source }) {
  const {
    setSelectedShelf,
    selectedShelf,
    updatedShelfData,
    setUpdatedShelfData,
    updatedSweaterData,
    setUpdatedSweaterData,
    shelfPositions,
    sweaterCounter,
    setSweaterCounter,
  } = useContext(MyContext);

  const pressed = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const selectedSweater = useSharedValue(null);
  const pointer = useSharedValue({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(false);

  const myJsFunction = (i) => {
    for (let i = 0; i < 4; i++) {
      if (
        pointer.value.x - shelfPositions[i].x > -(shelfPositions[i].w / 2) &&
        pointer.value.y - shelfPositions[i].y > -(shelfPositions[i].h * 2) &&
        pointer.value.y - shelfPositions[i].y < shelfPositions[i].h
      ) {
        setSelectedShelf(i);
        //checking which shelf the sweater is dropped on
        //first we push two data from the sweater array, the folded sweater's image source and the id to it,
        Vibration.vibrate(50);
        const sweaterPopped = source;
        if (source.src.length !== 0) {
          setOpacity(true);

          updatedSweaterData[source.num] = {
            id: `gone${source.id}q`,
            src: [],
          };

          setUpdatedSweaterData(updatedSweaterData);

          updatedShelfData[i].items.push({
            source: sweaterPopped.altSrc,
            id: sweaterPopped.id,
          });

          setSweaterCounter(sweaterCounter + 1);

          //Then we pop the sweater data that will be removed from the coathanger to the removed items' array so we can call it back later if needed.
          updatedShelfData[i].itemToRemove.push(sweaterPopped);
        }
      } else {
        offsetX.value = withSpring(0);
        offsetY.value = withSpring(0);
      }
    }
  };

  //This code handles the size of the pullover when pressed

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
      selectedSweater.value = source.num;
    })
    .onChange((event) => {
      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
      pointer.value = { x: event.absoluteX, y: event.absoluteY };
    })
    .onFinalize(() => {
      pressed.value = false;

      if (!(source.src.length === 0)) {
        runOnJS(myJsFunction)();
      }
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform:
      source.src.length === 0
        ? []
        : [
            { translateX: offsetX.value },
            { translateY: offsetY.value },
            { scale: withTiming(pressed.value ? 2 : 1) },
          ],
    width:
      source.num !== 1 && source.num !== 8 ? win.width * 0.1 : win.width * 0.1,
    height: source.num !== 1 && source.num !== 8 ? 490 * ratio * 0.1 : 40,
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.Image source={source.src} style={[animatedStyles]} />
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
