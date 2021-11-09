import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FlatListComponents from './Components/FlatListComponents';
import ScrollViewComponent from './Components/ScrollViewComponent';
export default function App() {

  
  return (
    <View style={styles.container}>
      <FlatListComponents></FlatListComponents>
      {/* <ScrollViewComponent></ScrollViewComponent> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
