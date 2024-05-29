import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../components/Header/Header";

export const NewsDetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title={"News_Detail"}></Header.Title>
      </Header>
    </View>
  );
};
