import React, { useCallback } from "react";
import { Typography } from "./Typography";
import { View, Animated } from "react-native";

export const LottoNumberView = (props) => {
  const [viewHeight, setViewHeight] = useState(0);
  const [animatedValue] = useState(new Animated.Value(1));
  const getNumberBackgroundColor = useCallback(() => {
    const randomNumber = Math.floor(Math.random() * 10) % 6;
    if (randomNumber === 0) return "red";
    if (randomNumber === 1) return "blue";
    if (randomNumber === 2) return "green";
    if (randomNumber === 3) return "yellow";
    if (randomNumber === 4) return "purple";
    if (randomNumber === 5) return "orange";
  }, []);
  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-viewHeight * 0.6, 0],
  });

  useEffect(() => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
    }).start();
  }, [props.numbers]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
      onLayout={({ nativeEvent }) => {
        setViewHeight(nativeEvent.layout.height);
      }}
    >
      {props.numbers.map((item) => {
        return (
          <Animated.View
            style={{
              backgroundColor: getNumberBackgroundColor(),
              width: 60,
              height: 40,
              borderRadius: 20,
              justifyContent: "center",
              transform: [{ translateY: translateY }],
              alignItems: "center",
            }}
          >
            <Typography fontSize={20} color="white">
              {item}
            </Typography>
          </Animated.View>
        );
      })}
    </View>
  );
};
