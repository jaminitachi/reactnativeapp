import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { useCallback } from "react";
import { LottoNumberView } from "../components/LottoNumberView";
import { useSelector } from "react-redux";

export const HistoryListScreen = (props) => {
  // const [history] = useState([
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  //   { date: new Date(), numbers: [1, 2, 3, 4, 5, 6] },
  // ]);

  const history = useSelector((state) => state.numbers.history);
  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) return "red";
    if (randomNumber === 1) return "blue";
    if (randomNumber === 2) return "green";
    if (randomNumber === 3) return "yellow";
    if (randomNumber === 4) return "purple";
    if (randomNumber === 5) return "orange";
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Title title="HISTORY LIST"></Header.Title>
      </Header>
      <FlatList
        style={{ flex: 1 }}
        data={history}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: 24,
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 12,
                marginHorizontal: 24,
                height: 120,
                backgroundColor: "white",
              }}
            >
              <Typography>{item.date.toDateString()}</Typography>
              <LottoNumberView numbers={item.numbers} />
            </View>
          );
        }}
      />
    </View>
  );
};
