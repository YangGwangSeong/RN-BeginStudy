import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople ] = useState([
    {name: "susan", key:'1' },
    {name: "yoshi", key:'2' },
    {name: "mario", key:'3' },
    {name: "luigi", key:'4' },
    {name: "peach", key:'5' },
    {name: "toad", key:'6' },
    {name: "bowser", key:'7' },
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map( (index) => (
            <View key={index.key}>
                <Text style={styles.item}>{index.name}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    marginTop : 24,
    padding : 30,
    backgroundColor : 'pink',
    fontSize : 24
  }
});
