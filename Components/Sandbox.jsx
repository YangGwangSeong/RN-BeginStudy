import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.BoxOne}>one</Text>
            <Text style={styles.BoxTwo}>tow</Text>
            <Text style={styles.BoxThree}>three</Text>
            <Text style={styles.BoxFour}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'flex-end',
      paddingTop: 40,
      backgroundColor: '#ddd'
    },
    BoxOne : {
      backgroundColor: 'violet',
      padding: 10,
      flex:1
    },
    BoxTwo : {
        backgroundColor: 'coral',
        padding: 10,
        flex:2
    },
    BoxThree : {
        backgroundColor: 'skyblue',
        padding: 10,
        flex:1
    },
    BoxFour : {
        backgroundColor: 'yellow',
        padding: 10,
        flex:1
    },

});
