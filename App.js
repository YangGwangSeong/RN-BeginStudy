import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import FlatListComponents from './Components/FlatListComponents';
import ScrollViewComponent from './Components/ScrollViewComponent';


import Header from './Components/Header';
import Contents from './Components/Contents';
import AddTodo from './Components/AddTodo';
export default function App() {

  const nextId = useRef('7');

  const [todos, setTodos ] = useState([
      {todo: "Coding", key:'1' },
      {todo: "Shopping", key:'2' },
      {todo: "excyte", key:'3' },
      {todo: "movie", key:'4' },
      {todo: "wash", key:'5' },
      {todo: "cleaning", key:'6' },
      {todo: "Study", key:'7' },
  ]);
  
  const SubmitHandler = (text) => {
    nextId.current = parseInt(nextId.current)+1;
    
    /*
    setTodos( (prevTodos)=> {
      return [
        ...prevTodos,
        {todo: text, key : nextId.current.toString() }
        
      ];
    })
    */
    
    const newtodo = {
      todo: text,
      key : nextId.current.toString()
    };
    setTodos([...todos, newtodo]);
    
  }

  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.contents}>
        <AddTodo SubmitHandler={SubmitHandler}></AddTodo>
        <Contents todos={todos} setTodos={setTodos}></Contents>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contents : {
    padding: 40,
  }
});
