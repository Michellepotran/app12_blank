import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState(''); 

  return (
    <View style={[styles.form, { backgroundColor: 'lightblue' }]}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update state with input value
        value={taskText} // Bind state to input field
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (taskText.trim()) { // Prevent adding empty tasks
            addTask(taskText); 
            setTaskText(''); // Clear input field after adding
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
