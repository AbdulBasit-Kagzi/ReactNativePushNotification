/* eslint-disable prettier/prettier */
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const exampleImage = require('../assets/Frame.png');

export default function ForgotPassword() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:24,color:'#181818'}}>ForgotPassword?</Text>
    </View>
    <View style={styles.imageContainer}>
        <Image 
        source={exampleImage}
       style={{width: '100%,', height: '100%'}}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:50,
        position:'relative'
    },

    imageContainer:{
        width:330,
        height:318,
        position:'absolute',
        top:300,
        left:200,
    }
})