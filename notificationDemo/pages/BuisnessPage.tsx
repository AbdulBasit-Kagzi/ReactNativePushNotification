/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BuisnessCard from '../components/BuisnessCard'
import { buisnessType } from '../types/buissnesDetailTypes'
const barber1 = require('../assets/barder1.png');
const barber2 = require('../assets/barder2.png');
const barber3 = require('../assets/barber3.png');


export default function BuisnessPage() {

    const data:buisnessType[]=[{name:'Jaymene Fegbemi',image:barber1,profile: 'https://randomuser.me/api/portraits/men/36.jpg'},
    {name:'Minh Pham',image:barber2,profile: 'https://randomuser.me/api/portraits/men/35.jpg'},
    {name:'Simon Angler',image:barber3,profile: 'https://randomuser.me/api/portraits/men/36.jpg'},

]
  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20,color:'#191919'}}>Latest Posts</Text>
    </View>
    <ScrollView>
    {
        data?.map((data,index)=>(
    <View key={index} style={styles.buisnessCardContianer}>
        <BuisnessCard  data={data}/>
    </View>
        ))
    }
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:0,
    },
    buisnessCardContianer:{
        paddingTop:34
    }
})