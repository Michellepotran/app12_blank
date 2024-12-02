

import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import MainLayout from './MainLayout';

const HomeScreen = ({ navigation }) => {
  const [taskList, setTaskList] = useState([
    "Do laundry",
    "Go to the gym",
    "Walk the dog"
  ]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  return (
    <MainLayout>
      <SafeAreaView style={{flex: 1, padding: 20, backgroundColor: 'lightgray'}}>
        <ToDoList tasks={taskList} />
        <ToDoForm addTask={addTask} />
        <Text>Navigation Button:</Text>
          <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      </SafeAreaView>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default HomeScreen;

