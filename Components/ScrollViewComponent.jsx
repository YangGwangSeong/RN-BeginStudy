import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default function ScrollViewComponent() {
    const [people, setPeople ] = useState([
        {name: "susan", key:'1' },
        {name: "yoshi", key:'2' },
        {name: "mario", key:'3' },
        {name: "luigi", key:'4' },
        {name: "peach", key:'5' },
        {name: "toad", key:'6' },
        {name: "bowser", key:'7' },
    ]);

    return (
        <ScrollView>
        {people.map( (index) => (
            <View key={index.key}>
                <Text style={styles.item}>{index.name}</Text>
            </View>
          ))}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    item:{
      marginTop : 24,
      padding : 30,
      backgroundColor : 'pink',
      fontSize : 24,
    }
});