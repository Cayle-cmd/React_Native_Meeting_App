import React from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  Dimensions, TouchableOpacity } from 'react-native';
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import  moment from "moment";

import Logo from './src/Logo';

var width = Dimensions.get('window').width; //full width


export default class AjoutRuinion extends React.Component {

  constructor() {
    super()
    this.state = {
      isVisible : false,
      choosenDate:''
    }
  }

  handlePicker= (datetime) => {
    this.setState({
      isVisible : false,
      choosenDate:moment(datetime).format('MMMM, YYYY Do,  -->  HH:mm a')
    })
  }

  hidePicker= () => {
    this.setState({
      isVisible : false,

    })
  }

  showPicker =() =>{
    this.setState({
      isVisible : true
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Logo />

        <Text
       style={styles.titre}>Add a meeting</Text>

        <TextInput
          placeholder='Location'
          placeholderTextColor="#a4a4a4"
          color='#ffffff'
          value={this.name}
          style={styles.simpleInput}
          />
        <TouchableOpacity
          style={styles.buttonDate}
          onPress = {this.showPicker} >
          <Text style={styles.clickHere}>Click here</Text>
          <Text style={styles.dateTime}> Date & Time </Text>
        </TouchableOpacity>
        <Text style={{ color:'#00b0ff' , fontSize:20}}>
            {this.state.choosenDate}
        </Text>
        <TextInput
          placeholder='Subject of the meeting'
          placeholderTextColor="#a4a4a4"
          color='#ffffff'
          style={styles.simpleInput}
          />

        <DateTimePickerModal
          isVisible={this.state.isVisible}
          mode="datetime"
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          is24Hour ={false}
        />

        <TextInput
          placeholder='list of participants: email & address'
          placeholderTextColor="#a4a4a4"
          multiline = {true}
          numberOfLines = {4}
          color='#ffffff'
          style={styles.textAreaInput}
          />
        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={{color:'#ffff00'}}>Save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#546e7a',
    alignItems: 'center',
  },



  simpleInput: {
    marginTop: 15,
    height: 50,
    borderColor: 'gold',
    borderWidth: 1,
    width:300,
    backgroundColor:'#bdbdbd',
    color:'white',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    marginVertical:10,
    paddingVertical:5,
  },



  buttonSave: {
    marginTop:20,
    marginBottom:10,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDate: {
    marginTop:10,
    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAreaInput: {
    width: 350,
    marginTop: 30,
    height: 100,
    borderColor: 'gold',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius:25,

  },
  titre: {
    fontSize:20
  },

  dateTime : {
    fontSize : 18,
    marginBottom:10,
    width: 104,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    color:'gold',

  },

  clickHere : {
    color:'#ffff00',
    alignItems: 'flex-end',
    marginTop:10,
  }

});
