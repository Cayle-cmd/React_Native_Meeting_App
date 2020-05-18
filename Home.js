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
      <View style={styles.container}>
        <Logo />
        <Button
          title="Add a meeting"
          onPress={() => this.navigation.navigate("Add")}/>
        <Text>
        </Text>
        <Button
          title="List of meetings "
          onPress={() => this.navigation.navigate("List")}/>
        <Text style={{marginBottom:200}}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffd700',
    textDecorationColor:'#ffffff'
  }
});
