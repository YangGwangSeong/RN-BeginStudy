import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
/* icon 사용을 위해 */
import { MaterialIcons } from '@expo/vector-icons';
export default function TodoItem({ item,pressHandler }) {

    return (
        <TouchableOpacity onPress= { ()=> pressHandler(item.key)}>
            <View style={styles.Item}>
                <Text style={styles.ItemText}>{item.todo}</Text>
                <MaterialIcons style={styles.ItemIcon} name="delete" size={18} color='#333'></MaterialIcons>
            </View>
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
      flex : 1,
      flexDirection : 'row',
    },
    ItemText: {
        
    },
    ItemIcon :{
        marginLeft : 'auto',
    }
});

