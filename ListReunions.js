import React from "react";
import {
  StyleSheet, Text,
  View, Button } from 'react-native';

export default class ListReunions extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View>
        <Button
          title="Ajouter reunion"
          onPress={() => this.navigation.navigate("Add")}/>
        <Text>
        </Text>
        <Button
          title="Home "
          onPress={() => this.navigation.navigate("Home")}/>
      </View>
    );
  }
}
