import React,{ useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';
export default function Contents({setTodos, todos}) {

    

    const pressHandler = (key) => {
        setTodos( (prevTodos)=> {
          return prevTodos.filter(todo => todo.key !== key);
        })
    }

    return (
        <View style={styles.Item_Wrap}>
            <FlatList
                keyExtractor={ (item)=> item.key}
                data={todos}
                renderItem={ ( {item} ) => (
                    <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
                )}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    Item_Wrap:{
        marginTop : 20,
    }
});

