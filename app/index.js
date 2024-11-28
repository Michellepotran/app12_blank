/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import ToDoList from './ToDoList.jsx'; 
import ToDoForm from './ToDoForm.jsx'; 

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    if (taskText.trim()) { // Ensure the task isn't empty or just whitespace
      setTasks([...tasks, taskText]); // Add the new task to the tasks array
    }
  };

  return (
    <SafeAreaView style={{flex:2}}>
      <ScrollView style={{flex:2}}>
        <ToDoList tasks={tasks} />
      </ScrollView>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;