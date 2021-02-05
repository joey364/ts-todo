import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ title, todoText='New Todo' }: { title?: string; todoText: string }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.todoTextStyle}>{todoText}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  todoTextStyle: {
    fontSize: 18,
    color: 'grey',
  },
});
