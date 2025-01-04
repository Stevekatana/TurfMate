import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

export default function bookingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>Your Name:</Text>
        <TextInput 
            placeholder='Enter your name'
            style={styles.nameTI}
        />
      </View>
      <View style={styles.squadContainer}>
        <Text style={styles.squadText}>Squad Name :</Text>
        <TextInput 
            placeholder='Enter your team name'
            style={styles.squadTI}/>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateTitle}>Date and Time:</Text>
        <TextInput 
            style={styles.dateTI}/>
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    padding:20
  },
  nameContainer:{
    padding:10,
    marginBottom:15
  },
  nameText:{
    fontWeight:'bold',
    marginLeft:5
  },
  nameTI:{
    backgroundColor:'#f2f2f2',
    marginTop:5,
    borderRadius:10
  },
  squadContainer:{
    padding:10,
    marginBottom:15
  },
  squadText:{
    fontWeight:'bold',
    marginLeft:5
  },
  squadTI:{
    backgroundColor:'#f2f2f2',
    marginTop:5,
    borderRadius:10
  },
  dateContainer:{
    padding:10,
    marginBottom:15
  },
  dateTitle:{
    fontWeight:'bold',
    marginLeft:5
  },
  dateTI:{
    backgroundColor:'#f2f2f2',
    marginTop:5,
    borderRadius:10
  },
  btnContainer:{
    padding:10,
    alignItems:'center',
    justifyContent:'center'
  },
  btn:{
    backgroundColor:'#041d29',
    width:100,
    padding:10,
    borderRadius:10
  },
  btnText:{
    color:'#15E6CD',
    textAlign:'center'
  }

})