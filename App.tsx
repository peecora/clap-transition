import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import BubbleHand from "./BubbleHand";

export default function App() {
  const [clap, setClap] = useState(0);
  const [clapArray, setClapArray] = useState(new Array());
  // const []

  const clapHand = () => {
    setClap((previous) => previous + 1);
    clapArray.push(clap);
  };
  const clappingImg =
    clap == 0 ? (
      <Image source={require("./assets/hands.png")} style={styles.clapimg} />
    ) : (
      <Image source={require("./assets/clapping.png")} style={styles.clapimg} />
    );

  const RenderBubble = () => {
    return clapArray.map((newCount: number) => (
      <BubbleHand
        key={newCount}
        number={newCount}
        AnimationCompleted={animationCompleted}
      />
    ));
  };

  const animationCompleted = (newCount: number) => {
    clapArray.splice(clapArray.indexOf(newCount), 1);
  };
  return (
    <View style={styles.container}>
      {RenderBubble()}
      <TouchableOpacity
        style={styles.clapbox}
        activeOpacity={0.8}
        onPress={clapHand}
      >
        {clappingImg}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  clapbox: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    bottom: 200,
    left: 150,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 15,
  },
  shadowView: {
    color: "#000",
    elevation: 1,
  },
  clapimg: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
