import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Todo from './Todo';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([] as any);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text>You for carry something 🚀</Text>
      </View>
      <ScrollView>
        {todos
          .map((todo: any, idx: number) => (
            <Todo key={`${idx}`} todoText={todo} />
          ))
          .reverse()}
      </ScrollView>
      <TextInput
        style={styles.todoInput}
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button onPress={addTodo} title="Add Todo" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  todoInput: {
    margin: 20,
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
  todoButton: {
    width: 'fit-content',
    padding: 15,
    borderRadius: 15,
  },
});
