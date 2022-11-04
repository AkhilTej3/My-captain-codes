import { View, Text,StyleSheet, TextInput,Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const navigation = useNavigation()

  return (
    <View>
      <Text style={{fontSize:24,color:"black",fontWeight:"bold",marginLeft:20,marginTop:60}}>Hi,Welcome Back!👋</Text>
      <Text style={{fontSize:16,color:"grey",marginLeft:20,marginTop:5}}>Hello again,You've been missed</Text>
      <View>
        <View style={{marginLeft:20,marginTop:30}}>
          <Text style={{color:"black"}}>Email Address</Text>
          <TextInput placeholderTextColor={"grey"} placeholder='ryan20@gmail.com' style={{color:"black",borderRadius:10,borderWidth:0.5,width:"90%",marginTop:10,borderColor:"grey",paddingLeft:15}}></TextInput>
        </View>
        <View style={{marginLeft:20,marginTop:30}}>
          <Text style={{color:"black"}}>Password</Text>
          <TextInput placeholderTextColor={"grey"} placeholder='Enter your password' style={{color:"black",borderRadius:10,borderWidth:0.5,width:"90%",marginTop:10,borderColor:"grey",paddingLeft:15}}></TextInput>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",width:"90%"}}>
          <View style={{flexDirection:"row"}}>
            <CheckBox onCheckColor='#067b70' tintColors={toggleCheckBox?"white":"black"} value={toggleCheckBox} onValueChange={()=>setToggleCheckBox(!toggleCheckBox)} style={{color:"black",marginLeft:20,marginTop:15}}/>
            <Text style={{color:"black",marginLeft:5,marginTop:20}}>Rememeber me</Text>
          </View>
          <Text style={{color:"red",fontWeight:"500",marginTop:20}}>Forgot Password</Text>
        </View>
      </View>
      <View>
        <Pressable onPress={()=>navigation.navigate("HomeScreen")}>

        <Text style={{width: "87%", textAlign: "center", marginTop: 30, backgroundColor: "#067b70", marginLeft:20, padding: 10, color: "#eeeee4", borderRadius: 10, fontWeight: "500"}}>Login</Text>
        </Pressable>
      </View>
      <View style={{flexDirection:"row",marginTop:30,alignSelf:"center"}}>
        <Text style={{marginTop:-5,color:"grey",}}>_____________  </Text>
        <Text style={{fontWeight:"500",color:"black",}}>or Login With</Text>
        <Text style={{marginTop:-5,color:"grey",}}>  _____________</Text>
      </View>
      <View style={{marginTop:30,width:"90%",alignSelf:"center",justifyContent:"space-between",flexDirection:"row"}}>
        <View style={{borderWidth:0.5,padding:10,width:"48%",borderRadius:10,borderColor:"grey",flexDirection:"row",alignItems:"center"}}>
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" }} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}></Image>
          <Text style={{fontWeight:"600",color:"grey"}}>Facebook</Text>
        </View>

        <View style={{borderWidth:0.5,padding:10,width:"48%",borderRadius:10,borderColor:"grey",flexDirection:"row",alignItems:"center"}}>
        <Image source={{ uri: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" }} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}></Image>
          <Text style={{fontWeight:"600",color:"grey"}}>Google</Text>
        </View>
        
      </View>

      <View style={{flexDirection:"row",alignSelf:"center",marginTop:80}}>
        <Text style={{color:"grey"}}>Don't have an account? </Text>
        <Pressable onPress={()=>navigation.navigate("SignupScreen")}>

        <Text style={{fontSize:16,color:"#067b70",fontWeight:"600"}}>Sign Up</Text>
        </Pressable>

      </View>
    </View>
  )
}








