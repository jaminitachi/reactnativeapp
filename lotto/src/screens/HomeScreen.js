import React from "react";
import { View } from "react-native";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { Button } from "../components/Button";
import { Spacer } from "../components/Spacer";
import { useCallback, useState } from "react";
import { LottoNumberView } from "../components/LottoNumberView";
import { getRandomSixNumber } from "../utils/Utils";
import { useDispatch } from "react-redux";
import { createNewNumbers } from "../actions/lottoNumbers";
import { useSelector } from "react-redux";

export const HomeScreen = (props) => {
  const numbers = useSelector((state) => state.numbers.currentNumber);

  const dispatch = useDispatch();

  const onPressGetNumber = useCallback(() => {
    // const randomNumbers = getRandomSixNumber();
    // setNumbers(randomNumbers);
    dispatch(createNewNumbers());
  }, []);

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
        <Header.Title title="HOME"></Header.Title>
      </Header>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 12,
        }}
      >
        <View
          style={{
            height: 250,
            flexDirection: "column",
            paddingHorizaontal: 24,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        >
          {numbers.length === 6 && <LottoNumberView numbers={numbers} />}
        </View>
        <Spacer space={20} />
        <Button onPress={onPressGetNumber}>
          <View style={{ backgroundColor: "black", paddingVertical: 24 }}>
            <Typography color="white" fontSize={18}>
              로또 번호 추출하기
            </Typography>
          </View>
        </Button>
      </View>
    </View>
  );
};
