import { StyleSheet } from "react-native";
import React from "react";
import CoatHanger from "./CoatHanger";
import Shelves from "./Shelves";
import Button from "../components/Button";

export default function MainComp() {
  return (
    <>
      <CoatHanger />
      <Shelves />
      <Button />
    </>
  );
}

const styles = StyleSheet.create({});
