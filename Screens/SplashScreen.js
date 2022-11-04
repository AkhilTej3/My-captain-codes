import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import IonIcons from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {
  const navigation = useNavigation()
  return (

    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 1, y: 1 }} colors={['#35b18b', '#067b70']} style={styles.container}>
      <View style={{ backgroundColor: '#eeeee4', height: 80, width: 80, borderRadius: 20, alignSelf: "center" ,marginLeft:100,marginTop:30,transform:[{ rotateZ: '10deg'}]}}></View>
      <View style={{ backgroundColor: '#eeeee4', height: 100, width: 100, borderRadius: 20, alignSelf: "flex-start" ,marginLeft:70,marginTop:-40,transform:[{ rotateZ: '-10deg'}]}}></View>
      <View style={{ backgroundColor: '#eeeee4', height: 130, width: 130, borderRadius: 30, alignSelf: "flex-start",marginTop:20,transform:[{ rotateZ: '15deg'}] }}></View>
      <View style={{ backgroundColor: '#eeeee4', height: 180, width: 180, borderRadius: 30, alignSelf: "flex-end",marginTop:-130,transform:[{ rotateZ: '-15deg'}] }}></View>
      <Text style={{color:"white",fontSize:36,fontWeight:"bold",marginLeft:20,marginTop:30}}>Let's Get </Text>
      <Text style={{color:"white",fontSize:36,fontWeight:"bold",marginLeft:20}}>Started </Text>
      <Text style={{color:"white",fontSize:16,marginTop:20,marginLeft:20,opacity:0.8}}>Connect with each other with chatting or </Text>
      <Text style={{color:"white",fontSize:16,marginLeft:20,opacity:0.8}}>calling.Enjoy safe and private texting </Text>

      <Pressable onPress={()=>navigation.navigate("SignupScreen")}>

      <Text style={{fontWeight:"600",color:"#067b70",fontSize:16,marginLeft:20,backgroundColor:"white",width:"85%",padding:10,textAlign:"center",borderRadius:10,marginTop:50}}>Join Now </Text>
      </Pressable>

      <View style={{marginTop:30,flexDirection:"row",alignSelf:"center",alignItems:"center"}}>
      <Text style={{color:"white",fontSize:13,marginLeft:20,opacity:0.8}}>Already have an account?</Text>
      <Pressable onPress={() => navigation.navigate("LoginScreen")}>

      <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>Login</Text>
      </Pressable>
      </View>


    </LinearGradient>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img1: {
    width: 200,
    height: 200,
    color: "white",
  }
})