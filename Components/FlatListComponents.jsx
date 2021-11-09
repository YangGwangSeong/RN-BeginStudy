import React, { useState } from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

export default function FlatListComponents() {

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
        <FlatList
            numColumns={2}
            keyExtractor={ (item)=> item.key}
            data={people}
            renderItem={ ( {item} ) => (
            <Text style={styles.item}>{item.name}</Text>
            )}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    item:{
      marginTop : 24,
      padding : 30,
      backgroundColor : 'pink',
      fontSize : 24,
      marginHorizontal : 10,
      marginTop : 24,
  
    }
});

