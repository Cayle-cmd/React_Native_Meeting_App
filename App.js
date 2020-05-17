import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddReunion from "./AddReunion";
import ListReunions from "./ListReunions";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          component={ListReunions}
          options={{ title: "Réunions" }}
        />
        <Stack.Screen
          name="Add"
          component={AddReunion}
          options={{ title: "Ajout réunion" }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
