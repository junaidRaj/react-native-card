import React from 'react'
import { TextInput, StyleSheet, View, Text, Button, Image } from 'react-native';

export default function Login() {
  return (
    <>
    <View style={styles.Header}>

        <Text style={styles.font}>
          Login
        </Text>
    </View>
    <View style={{backgroundColor:"#ecd297", height:"100%"}}>
      <View style={styles.contianer}>
        <TextInput
          placeholder='Enter Name'
          keyboardType='email-address'
          style={styles.Input}
          />
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          maxLength={8}
          style={styles.Input}
          />
        <View style={{paddingVertical:2}}>
        <Button title='submit' color='black' />
        </View>
      </View>
</View>
    </>
  )
};
const styles = StyleSheet.create({
    Input: {
        width: "98%",
        margin: 4,
        borderBottomColor:"white",
        color:"white",
    borderBottomWidth:1
  },
  font: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: "white",
    borderBottomWidth:2,
    fontSize:25,
  },
  contianer:{
    margin:10,
    padding:23,
    marginVertical:140,
    borderBottomWidth:1,
    backgroundColor:"#eab676",
    borderRadius:30,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  Header: {
    width: "100%",
    backgroundColor: "#eab676",
    padding: 20,
  },
})
