import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function header() {
    return (
        <View style={styles.header}>
            <Text style={styles.header__title}>TodoApp</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#28324a',
        height:80,
        paddingTop:28,
        textAlign:'center',
    },
    header__title:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'

    }
});