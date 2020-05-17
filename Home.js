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
      </View>
    )
  }
}

const styles = 0;
