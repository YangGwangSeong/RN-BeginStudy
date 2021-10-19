import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("Gwang");
  const [person,setPerson] = useState({name: 'maria', age: 40});

  const ClickHandler = () => {
    setName("Seong");
    setPerson({name:'ilac', age:29});
  }
  return (
    <View style={styles.container}>
        <Text>my name is : {name}</Text>
        <Text>his name : {person.name}</Text>
        <Text>his age : {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title='update' 
            onPress = {ClickHandler}
          ></Button>
        </View>
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
  buttonContainer: {
    marginTop: 20
  },
  borderbutton:{
    
  }
});
