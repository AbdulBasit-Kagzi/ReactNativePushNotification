/* eslint-disable prettier/prettier */
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Button } from '@rneui/themed';

interface CreateProfileProps{
    navigation:any
}

export default function CreatePRofile({navigation}:CreateProfileProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar
          containerStyle={{position:"relative"}}
          size={120}
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
        
        >
          <Avatar.Accessory size={27}  style={{position:'absolute',top:0,left:80}}/>
          </Avatar>
      </View>
      <View style={{alignItems:'center'}}>
         <Text style={{textAlign:'center',fontSize:10,width:217}}>
            We recommend to use a photo that helps contacts find you
          </Text>
      </View>
      <View >
         <Button
       
            title="Create Account"
            color="#ED6C50"
            containerStyle={{
                width:'100%',
                borderRadius:4
                }}
              onPress={()=>navigation.navigate('Forgotpassword')}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
    paddingLeft:20,
        paddingRight:20
    },
    profileContainer:{
        alignItems:'center',
        paddingTop:22,
        paddingBottom:22
    },
    
})