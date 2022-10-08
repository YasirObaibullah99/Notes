import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, Image } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Task from './components/Task';
import plus from './assets/plus.png'

export default function App() {
const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask = (index) => {
  let itemCopy = [...taskItems];
  itemCopy.splice(index,1);
  setTaskItems(itemCopy);
}

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Notes</Text>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
             return (
             <TouchableOpacity key={index} onPress={() => completeTask(index)}>
<Task  text={item} />
          
             </TouchableOpacity>
             )
            })
          }
       {/* <Task text={'Task 1'} />
       <Task text={'Task 2'}/> */}
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
     <TextInput style={styles.input} placeholder={'Write a note'} value={task} onChangeText={text => setTask(text)} />
     <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>
         + </Text>
          {/* <Image source={require('./assets/plus.png')} />
      </Text> */}
    </View>
    </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E8EAED',
    backgroundColor: '#E1FFEE',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // paddingBottom : 10
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#F9F9F9",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#495C83",
    borderRadius: 60,
    paddingLeft:6,
    textAlign:"center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
    color: "#FCF8E8",
  },
  // task: {
  //   width: 90,
  //   height: 90,
  //   alignItems: "center",
  // }
});
