/* eslint-disable prettier/prettier */
import {  View } from 'react-native';
import React from 'react';
import CreatePRofile from '../forms/CreatePRofile';

export default function CreateProfilePage({navigation}:any) {
  return (
    <View>
      <CreatePRofile navigation={navigation}/>
    </View>
  );
}

