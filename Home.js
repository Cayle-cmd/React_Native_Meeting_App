import React from "react";
import {
  StyleSheet, Text,
  View, Button } from 'react-native';
  import Logo from './src/Logo';


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View>
        <Text style={{marginBottom:50}}></Text>
        <Logo />
        <Text style={{marginBottom:100}}></Text>
        <Button
          title="Add a meeting"
          onPress={() => this.navigation.navigate("Add")}/>
        <Text>
        </Text>
        <Button
          title="List of meetings "
          onPress={() => this.navigation.navigate("List")}/>
      </View>
    );
  }
}
