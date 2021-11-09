import React,{ useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native';

export default function AddTodo({SubmitHandler}) {
    const [text, setText] = useState('');

    const ChangeHandler = (val) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                style={styles.Inputs}
                placeholder='New To do...'
                onChangeText={ChangeHandler}
            >
            </TextInput>
            <Button onPress= { () => SubmitHandler(text)} title='Add todo' color='coral'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    Inputs: {
      marginBottom:10,
      paddingHorizontal :8,
      paddingVertical :6,
      borderBottomWidth : 1,
      borderBottomColor : '#ddd',
    }
});
