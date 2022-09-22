import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Task = (props) => {
  return (
    <View style={styles.item}>
    <View style={styles.itemLeft}>

        <Entypo style={styles.todoIcon} name="list" size={24} color="black" />
        <Text style={styles.itemText}>{props.text}</Text>

    </View>

    <MaterialIcons name="delete" size={24} color="rgb(40,44,52)" />

    </View>
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'#ffffff',
        padding:15,
        borderRadius:10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:10,
    },
    itemLeft:{
        flexDirection: 'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    todoIcon:{
        width:25,
        height:25,
        fontWeight:'bold',
        color:'green',
        marginRight:15,
    },
    itemText:{
        maxWidth:'80%',
    },
});

export default Task
