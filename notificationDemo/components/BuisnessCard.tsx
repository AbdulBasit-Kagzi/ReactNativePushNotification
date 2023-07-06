/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'
import { icons } from '../assets/icons'
import { buisnessType } from '../types/buissnesDetailTypes';
const barber1 = require('../assets/barder1.png');


interface buisnessCardProps{
    data:buisnessType
}
export default function BuisnessCard({data}:buisnessCardProps) {
  return (
    <SafeAreaView style={{backgroundColor:'#FFFFFF',padding:20}}>
    <View>
<View style={styles.cardHeaderContainer}>   
 <View style={styles.cardHeader}>     
  <Avatar
    size={32}
    rounded
    source={{ uri:data.profile }}
  />
    <Text style={{color:'black',display:'inline-block'}}>{data.name}</Text>
</View>

<View style={styles.dotsContainer}>
    {/* dots */}
    <View style={styles.dots}></View>
    <View style={styles.dots}></View>
    <View style={styles.dots}></View>

</View>
</View>

<View>
    <Text style={{fontSize:14,color:'#181818'}}>
        Our new barber Obi started with us last week & has open slots today!{' '}
        <Text style={{color:'#ED6C50',fontWeight:500}}>Cuts & Shaves Barbers</Text>
    </Text>
</View>
<View style={{width:335,marginBottom:40}}>
    <Image source={barber1}/>
</View>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    cardHeaderContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        gap:123,
        marginBottom:23
    },
    cardHeader:{
        flex:0,
        flexDirection: "row",
        alignItems: "center",
        gap:13
    },
    dotsContainer:{
        flex:1,
        flexDirection:'row',
        gap:5
    },
    dots:{
        width: 8,
        height: 8,
        backgroundColor:'#C4C4C4',
        borderRadius:50
    },
})