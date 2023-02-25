import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ranking from "./src/widgets/Ranking";
import LoginPage from "./src/widgets/LoginPage/LoginPage";
import { getAllDrivers } from "./src/api";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    getAllDrivers().then(({ data }) => {
      console.log(data);
    }).catch(e => console.log(e));
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
