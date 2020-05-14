import React from 'react';
import { StyleSheet,
  Text,
  View,
  Image, } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Image
          style={{width:105, height:105, borderRadius:50}}
          source={require('./logoM.jpg')}
        />
        <Text style={styles.logoText}>MEETING</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  logoText: {
    marginVertical:15,
    fontSize:20,
    color:'#ffffff',
  },
});
