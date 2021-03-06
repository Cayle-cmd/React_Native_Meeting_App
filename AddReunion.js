


import React from 'react';
import {
  StyleSheet, Text,
  View, TextInput,
  Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import  moment from "moment";

var width = Dimensions.get('window').width; //full width

export default class ListReunions extends React.Component {

  constructor() {
    super();
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
       <Text style={styles.titreTextInput}>
        Location
       </Text>
        <TextInput
          placeholder='ex: Dakar, Plateau ...'
          multiline = {false}
          value={this.name}
          style={styles.simpleInput}
          />
        <TouchableOpacity
          style={styles.buttonDate}
          onPress = {this.showPicker}>
          <Text style={styles.textButtonDate}>Date & Time</Text>
        </TouchableOpacity>
        <Text style={styles.choosenDate}>
            {this.state.choosenDate}
        </Text>

        <Text style={styles.titreTextInput}>
         Topic
        </Text>
        <TextInput
          style={styles.simpleInput}
          />

        <DateTimePickerModal
          isVisible={this.state.isVisible}
          mode="datetime"
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          is24Hour ={false}
        />


        <Text style={styles.titreTextInput}>
         Participants
        </Text>
        <TextInput
          placeholder='Email / Adresse '
          multiline = {true}
          numberOfLines = {10}
          style={styles.textAreaInput}
          />
        <TouchableOpacity
          style={styles.buttonSave}>
          <Text style={styles.textButtonSave}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ButtonCancel}>
          <Text style={styles.textButtonCancel}>Cancel</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd700',
    alignItems: 'center'
  },



  titreTextInput: {
    marginTop:30,
    fontSize:20
  },

  simpleInput: {
    width: width - 40,
    height: 30,
    borderColor: '#c0c0c0',
    backgroundColor:'#fffaf0',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius:10,
  },

  buttonDate: {
    marginTop:10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor:'#000000',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtonDate: {
    color:'#ffd700'
  },
  choosenDate:{
    color:'#00b0ff' ,
    fontSize:20
  },

  textAreaInput: {
    width: width - 40,
    height: 120,
    borderColor: '#c0c0c0',
    backgroundColor:'#fffaf0',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius:10,
    marginBottom: 10
  },

  buttonSave: {
    marginTop:10,
    backgroundColor: '#000000',
    borderRadius: 20,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonSave: {
    color:'#ffd700',
  },

  textButtonCancel :{
    color:'#ffd700',
  },

  ButtonCancel: {
    marginTop:10,
    backgroundColor: '#000000',
    borderRadius: 20,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:5,
  },

});
