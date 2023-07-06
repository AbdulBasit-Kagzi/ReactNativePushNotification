/* eslint-disable prettier/prettier */
import { ScrollView } from 'react-native'
import React from 'react'
import Signup from '../forms/Signup'

export default function SignInPage({navigation}:any) {
  return (
    <ScrollView>
     <Signup navigation={navigation}/>
    </ScrollView>
  );
}

// const styles = StyleSheet.create({})
