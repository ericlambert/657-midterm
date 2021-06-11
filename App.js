import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

import Box from './box'
import styles from './styles'

export default function App() {
  const [number1, setNumber1] = React.useState('');
  const [number2, setNumber2] = React.useState('');
  const [message, setMessage] = React.useState('');
  const errorMsg = 'Invalid input, please try again.'

  function validateInput(number) {
    if (number >= 2 && 
      number <= 100) {
      return true
    } 
    return false
  }

  function compareNumbers() {
    let diff = number1 - number2;
    if (diff > 0) {
      return 'Number1 is bigger than Number2'
    } else {
      if (diff == 0) {
        return 'Number1 is equal to Number2'
      } else {
        return 'Number1 is less than Number2'
      }
    }
  }

  function validatedCompare() {
    if(validateInput(number1) && 
        validateInput(number2)){
      return compareNumbers()
    } else {
      return errorMsg
    }
  }

  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <Text style={styles.h1}>Midterm Exam</Text>
        <Text style={[styles.text]}>Compare two numbers</Text>
      </Box>

      <View style={styles.inputCont}>
        <Text>Number 1:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setNumber1}
          value={number1}
          keyboardType="numeric"
        />

        <Text>Number 2:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setNumber2}
          value={number2}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        title="COMPARE2" 
        onPress={() => setMessage(validatedCompare())}>
          <Text style={styles.buttonText}>COMPARE</Text>
      </TouchableOpacity>

      <Text
        style={[styles.compareText, message == errorMsg && styles.errText]}>{message}</Text>

    </View>
  );
}