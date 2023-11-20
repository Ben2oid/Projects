import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import Shelf from "../screen/Shelf";
import MyContext from "../hooks/MyContext";

const Shelves = () => {
  const { updatedShelfData } = useContext(MyContext);

  return (
    <>
      {updatedShelfData.map((shelf) => {
        return <Shelf shelf={shelf} key={`shelf${shelf.id}q`} />;
      })}
    </>
  );
};

export default Shelves;

const styles = StyleSheet.create({});
