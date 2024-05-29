import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";

export const NewsListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"News_List"}></Header.Title>
      </Header>
    </View>
  );
};
