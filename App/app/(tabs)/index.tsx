import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <Image source={require('../../assets/images/placeholder.jpg')} style={styles.cardImage}/>
        <View>
          <Text style={styles.turfTitle}>777 turf</Text>

          <View style={styles.flexZone}>
            <Text style={styles.location}>Location:</Text>
            <Text style={styles.locationVar}>Syokimau</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Pressable style={styles.bookBtn}>
            <Text>Book Now</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
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
    padding:10,
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
    
  },
  location:{},
  locationVar:{},
  btnContainer:{},
  bookBtn:{}
})