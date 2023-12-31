/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TextInput,View,SafeAreaView } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base'

interface SiginProps{
    navigation:any
}

export default function Signup({navigation}:SiginProps) {
  
  return (
    <SafeAreaView style={styles.container}> 
    <View >
        <View style={styles.elevation}>
            <TextInput style={styles.textField}
            placeholder='E-mail'
              placeholderTextColor={'#0A0A0A'}/>
      </View>
       <View style={styles.elevation}>
            <TextInput style={styles.textField}
            placeholder='Password'
            placeholderTextColor={'#0A0A0A'}/>
      </View>
      </View>
      <View style={styles.forgotPasswordTextContainer}>
        <Text style={styles.forgotPasswordText}>Oops! I forgot my password</Text>
      </View>
      <View>
           <Button
       
            title="Sign-in"
            color="#ED6C50"
            containerStyle={{
                width:'100%',
                borderRadius:4
                }}
              onPress={()=>navigation.navigate('Createprofile')}
      />
      </View>
       <View style={{alignItems:'center',marginTop:48}}>
           <Button
        title="I need to sign-up!"
        color="#0A0A0A"
         containerStyle={{
              width:165,
              borderRadius:4
              }}
      />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:331,
        padding:20,
    },
    textField:{
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4,
        textAlign:'center',
        color:'black',
        fontWeight:'400',

    },
    elevation:{
        paddingBottom:16,
         elevation: 200,
         shadowColor: '#52006A',
    },
    forgotPasswordTextContainer:{
        alignItems:'center',
        marginTop:33,
        marginBottom:33
    },
    forgotPasswordText:{
        color:'#191919',
        fontSize:12,
    },
  
})