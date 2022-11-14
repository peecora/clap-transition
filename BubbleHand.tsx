import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function BubbleHand({ number, AnimationCompleted }: any) {
  const [bubbleAnimation, setBubbleAnimation] = useState(new Animated.Value(0));
  const [bubbleOpacity, setBubbleOpacity] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(bubbleAnimation, {
        toValue: -550,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(bubbleOpacity, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      AnimationCompleted(number);
    });
  }, []);

  const bubbleTransform = {
    transform: [{ translateY: bubbleAnimation }],
    opacity: bubbleOpacity,
  };

  return (
    <Animated.View style={[styles.bubble, bubbleTransform]}>
      <View>
        <Text>{number}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    bottom: 200,
    left: 150,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
});
