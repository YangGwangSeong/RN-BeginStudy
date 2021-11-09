import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FlatListComponents from './Components/FlatListComponents';
import ScrollViewComponent from './Components/ScrollViewComponent';


import Header from './Components/Header';
import Contents from './Components/Contents';
export default function App() {

  
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.contents}>
        <Contents></Contents>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contents : {
    padding: 40,
  }
});
