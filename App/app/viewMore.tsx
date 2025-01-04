import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function viewMore() {
  return (
    <ScrollView style={styles.container}>
        <View>
            <Image source={require('../assets/images/placeholder.jpg')} style={styles.viewMoreImg}/>            
        </View>
        <View>
            <Text style={styles.viewMoreTitle}>777 Recreational Center</Text>
            <View style={styles.viewMoreDetailsContainer}>
                <View style={styles.locationCont}>
                    <Ionicons name="location" size={20} color="gray" style={styles.locationIcon}/>
                    <Text  style={styles.viewMoreLocation}>: Syokimau</Text>
                </View>
                <View style={styles.priceCont}>
                    <Text style={styles.viewMorePrice}>Price:</Text>
                    <Text style={styles.viewMorePriceVar}> 2000/=</Text>
                </View>
            </View>
            <View  style={styles.descContainer}>
                <Text style={styles.viewMoreDescTitle}>Description</Text>
                <Text style={styles.viewMoreDesc}>It's a really fun place guys</Text>
            </View>
        </View>

        {/* avaiability calendar */}
        <View  style={styles.availableContainer}>
            <Text style={styles.availableText}>Available:</Text>
            <View  style={styles.available}>

            </View>
        </View>

        <View style={styles.bookNowContainer}>
            <Link href='/bookingPage' asChild>
                <Pressable  style={styles.bookNowbtn}>
                    <Text style={styles.btnText}>Book Now</Text>
                </Pressable>
            </Link>
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },
    viewMoreImg:{
        height:250,
        width:'100%'
    },
    viewMoreTitle:{
        fontSize:20,
        textAlign:'center',
        marginTop:20,
        marginBottom:10
    },
    viewMoreDetailsContainer:{
        flexDirection:'row',
        padding:15,
        marginTop:10
    },
    viewMoreLocation:{},
    priceCont:{
        flexDirection:'row',
        textAlign:'center'
    },
    locationCont:{
        flexDirection:'row',
        textAlign:'center',
        width:'50%'
    },
    locationIcon:{
        marginLeft:30
    },
    viewMorePrice:{
        fontWeight:'bold',
        marginLeft:30
    },
    viewMorePriceVar:{},
    descContainer:{
        marginTop:10
    },
    viewMoreDescTitle:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:15
    },
    viewMoreDesc:{
        textAlign:'center'
    },
    availableContainer:{
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    availableText:{
        fontWeight:'bold',
        marginLeft:30
    },
    available:{
        height:30,
        width:30,
        backgroundColor:'green',
        borderRadius:99,
        marginLeft:10
    },
    bookNowContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    bookNowbtn:{
        backgroundColor:'#041d29',
        width:120,
        padding:10,
        borderRadius:10,
        marginTop:150
    },
    btnText:{
        textAlign:'center',
        color:'#15E6CD'
    }
})