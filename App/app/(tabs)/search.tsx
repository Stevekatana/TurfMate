import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, Image } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'

export default function search() {
  return (
    <View>
      <View style={styles.searchSection}>
        <TextInput 
            placeholder='Enter Turf name, location or price range'
            style={styles.inputForm}
        />
        <Pressable style={styles.searchBtn}>
          <FontAwesome name="search" size={24} color="black" style={styles.searchBtnIcon}/>
        </Pressable>
      </View>
      <ScrollView style={styles.searchResContainer}>
        {/* card component */}
        <View style={styles.cardContainer}>
          <Image source={require('../../assets/images/placeholder.jpg')} style={styles.cardImage}/>
          <View>
            <Text style={styles.turfTitle}>777 turf</Text>
  
            <View style={styles.flexZone}>
              <View>
                <Text style={styles.location}>Location:</Text>
                <Text style={styles.locationVar}>Syokimau</Text>
              </View>
              <View>
                <Text style={styles.location}>Price:</Text>
                <Text style={styles.locationVar}>2000/=</Text>
              </View>
            </View>
            <View>
              <Text style={styles.descriptionTitle}>Description:</Text>
              <Text style={styles.description}>
                Its a really fun turf guys
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <Pressable style={styles.bookBtn}>
              <Text style={styles.btnText}>Book Now</Text>
            </Pressable>
          </View>
        </View>
    
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:8,
    backgroundColor:'#e2e2e2'
  },
  cardContainer:{
    height:'auto',
    borderRadius: 10,
    padding:15,
  },
  cardImage:{
    height:200,
    width:'100%',
    borderRadius:5,
    marginBottom:10
  },
  turfTitle:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize: 20
  },
  flexZone:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  location:{
    width:'auto',
    fontSize: 15,
    marginRight: 20,
    padding:1,
    fontWeight:'bold'

  },
  locationVar:{
    fontSize:15,
    width:'auto',
    padding:5
  },
  btnContainer:{
    alignItems:'center',
    marginTop:20
  },
  bookBtn:{ 
    backgroundColor:'#041d29',
    width:'120',
    padding:10,
    borderRadius:10,
  },
  btnText:{
    textAlign:'center',
    color:'#15E6CD'
  },
  description:{},
  descriptionTitle:{
    fontWeight:'bold'
  },
  searchResContainer:{
    padding:10
  },
  searchSection:{
    backgroundColor:'#041d29',
    flexDirection:"row",
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    gap:10
  },
  inputForm:{
    backgroundColor:'white',
    borderRadius:5,
    width:290
  },
  searchBtn:{ 
    backgroundColor:'#15E6CD',
    borderRadius:5,
    padding:6
  },
  searchBtnIcon:{}
})