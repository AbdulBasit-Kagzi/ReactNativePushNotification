/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Circle of Trust</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 98,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  headerText: {
    color: '#0A0A0A',
    fontSize: 30,
    fontWeight: '600',
  },
});
