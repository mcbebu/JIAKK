import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import InputBox from "./src/components/InputBox";
import CenteredText from "./src/components/CenteredText";
import RoundedImage from "./src/components/RoundedImage";
import Ranking from "./src/widgets/Ranking";

export default function App() {
  return (
    <NavigationContainer>
      <View className="flex-1 items-center justify-center bg-white">
        <Ranking
          placement={"2nd"}
          imgSrc={require("./assets/icon.png")}
          driverName={"Jack Black"}
          deliveryRate={"90%"}
          reviewScore={"97%"}
          overallScore={93.5}
        />
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
