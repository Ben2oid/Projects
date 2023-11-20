import React, { useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppIndex from "./pages/AppIndex";
import StatPage from "./pages/StatPage";
import MyContex from "./src/hooks/MyContext";
import ShelfData from "./src/utilites/ShelfData";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MY_API_KEY } from "@env";
// import "react-native-highlight-updates";

export default function App() {
  const myId = MY_API_KEY;
  const [selectedShelf, setSelectedShelf] = useState(null);
  const [updatedSweaterData, setUpdatedSweaterData] = useState([
    ...SweaterData,
  ]);
  const [updatedShelfData, setUpdatedShelfData] = useState([...ShelfData]);
  const [sweaterCounter, setSweaterCounter] = useState(0);
  const [shelfPositions, setShelfPositions] = useState([]);
  const bgcolor = "#bde0f6";
  const blue = "#0A4169";
  const red = "#E53935";
  const transGrey = "rgba(194, 194, 194, 1)";

  const values = {
    myId,
    setSelectedShelf,
    selectedShelf,
    updatedShelfData,
    setUpdatedShelfData,
    updatedSweaterData,
    setUpdatedSweaterData,
    shelfPositions,
    setShelfPositions,
    sweaterCounter,
    setSweaterCounter,
    red,
    bgcolor,
    blue,
    transGrey,
  };

  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyContex.Provider value={values}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Index"
              component={AppIndex}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Statpage"
              component={StatPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MyContex.Provider>
    </GestureHandlerRootView>
  );
}
