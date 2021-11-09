import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ item,pressHandler }) {

    return (
        <TouchableOpacity onPress= { ()=> pressHandler(item.key)}>
            <Text style={styles.Item}>{item.todo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Item: {
      padding:16,
      backgroundColor : '#f0f8ff',
      borderRadius:10,
      borderStyle: 'solid',
      borderWidth: 1,
      marginBottom:10,
    }
});

