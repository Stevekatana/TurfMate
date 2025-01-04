import { View, Text, ScrollView, Pressable, StyleSheet} from 'react-native'
import React from 'react'

export default function feed() {
  return (
    <ScrollView style={styles.listContainer}>
      <Pressable style={styles.listItem}>
        <Text style={styles.listItemText}>User 0 has sent you a message</Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  listContainer:{
  },
  listItem:{
    marginTop:10,
    padding:13,
    borderBottomColor:'#9c9c9c',
    borderBottomWidth:2
  },
  listItemText:{
    
  }
})