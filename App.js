import React from "react";
import {
  StyleSheet, Text,
  View, Button} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddReunion from "./AddReunion";
import MeetingsList from "./MeetingsList";
import Home from "./Home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="List"
          component={MeetingsList}
          options={{ title: "MEETING" }}
        />
        <Stack.Screen
          name="Add"
          component={AddReunion}
          options={{ title: "ADD A MEETING " }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
