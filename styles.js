import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    width: 250,
    height: 300,
    padding: 10,
    margin: 5,
    marginTop: 30,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
  },

  textInput: {
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    width: 190,
    padding: 1,
    margin: 2,
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "teal",
    borderRadius: 3,
    margin: 3,
    padding: 10,
    width: 200,
    height: 100,
  },

  inputCont: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    padding: 0,
    margin: 5,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'lightgrey',
  },

  button: {
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    borderStyle: 'solid',
    borderColor: '#007AFF',
    backgroundColor: 'white',
  },

  buttonText: {
    justifyContent: 'flex-start', 
    color: "#007AFF",
    fontWeight: "bold",
    fontSize: 12,
  },

  h1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

  text: {
    justifyContent: 'flex-start', 
    color: "white",
    fontSize: 12,
  },

  compareText: {
    justifyContent: 'flex-start', 
    color: "green",
    fontWeight: "bold",
    fontSize: 12,
  },

  errText: {
    justifyContent: 'flex-start', 
    color: "red",
    fontWeight: "bold",
    fontSize: 12,
  },
});