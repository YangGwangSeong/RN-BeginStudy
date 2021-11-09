import React,{ useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import TodoItem from './TodoItem';
export default function Contents() {

    const [todos, setTodos ] = useState([
        {todo: "Coding", key:'1' },
        {todo: "Shopping", key:'2' },
        {todo: "excyte", key:'3' },
        {todo: "movie", key:'4' },
        {todo: "wash", key:'5' },
        {todo: "cleaning", key:'6' },
        {todo: "Study", key:'7' },
    ]);

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

