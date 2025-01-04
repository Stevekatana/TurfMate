import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function profile() {
  return (
    <View>
      <View style={styles.picContainer}>
        <Image source={require('../../assets/images/placeholder.jpg')} style={styles.profilePic}/>
      </View>
      <View  style={styles.actionTab}>
        <Pressable style={styles.actionItem}>
          <FontAwesome name="heart" size={20} color="black"/>
          <Text style={styles.settingsItemText}>Favourites</Text>
        </Pressable>
        <Pressable style={styles.actionItem}>
          <MaterialIcons name="message" size={20} color="black" />
          <Text style={styles.settingsItemText}>Messages</Text>
        </Pressable>
        <Pressable style={styles.actionItem}>
          <FontAwesome name="archive" size={20} color="black"/>
          <Text style={styles.settingsItemText}>Archives</Text>
        </Pressable>
        <Pressable style={styles.actionItem}>
          <FontAwesome name="cog" size={20} color="black"/>
          <Text style={styles.settingsItemText}>Settings</Text>
        </Pressable>
      </View>
      <View  style={styles.logoutBtnSection}>
        <Pressable style={styles.logOutBtn}>
          <Ionicons name="exit" size={22} color="black"  style={styles.logoutBtnIcon}/>
          <Text style={styles.logoutBtnText}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  picContainer:{
    alignItems:'center',
    justifyContent:'center',
    padding:10,
  },
  profilePic:{
    marginTop:10,
    height:150,
    width:150,
    borderRadius:99
  },
  actionTab:{
    marginTop:90
  },
  actionItem:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#d8dee1",
    gap:10,
    marginTop:20
  },
  settingsItemText:{
    fontSize:20
  },
  logoutBtnSection:{
  },
  logOutBtn:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#d8dee1",
    gap:10,
    position:'relative',
    top:90
  }
})