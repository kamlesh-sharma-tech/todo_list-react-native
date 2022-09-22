import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';
import { KeyboardAvoidingView, 
  ScrollView, 
  StyleSheet, 
  Text, TextInput, 
  TouchableOpacity, 
  View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask = () => {
      setTaskItems([...taskItems,task]);
      setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>
    <ScrollView>
      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}>ToDo List</Text>

        <KeyboardAvoidingView
        behavior={Platform.OS ==='ios'?"padding":"height"}
        style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder={'Add new task'}
          value={task}
          onChangeText={text => setTask(text)}/>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
          <Entypo name="add-to-list" size={24} color="black" />
          </View>
        </TouchableOpacity>

        </KeyboardAvoidingView>

        <View style={styles.items}>
        <ScrollView>
        {
          taskItems.map((item,index) =>{
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task key={index} text={item}/>
              </TouchableOpacity>
            )   
          })
        }
        </ScrollView>
        </View>

      </View>
      </ScrollView>
  
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(40,44,52)',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:10,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textDecorationLine:'underline',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    marginTop:30,
    width:'100%',
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical:12,
    paddingHorizontal:15,
    width:275,
    backgroundColor:'#FFFFFF',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFFFFF',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText:{
    fontSize:25,
  },
});
