import { View, Text, StyleSheet, TextInput, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox'
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation()

    return (
        <View>
            <Text style={{ fontSize: 24, color: "black", fontWeight: "bold", marginLeft: 20, marginTop: 60 }}>Create Account</Text>
            <Text style={{ fontSize: 16, color: "grey", marginLeft: 20, marginTop: 5 }}>Connect with your friends today!</Text>
            <View>
                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ color: "black" }}>Email Address</Text>
                    <TextInput placeholderTextColor={"grey"}  placeholder='Enter your email' style={{ color: "black", borderRadius: 10, borderWidth: 0.5, width: "90%", marginTop: 10, borderColor: "grey", paddingLeft: 15 }}></TextInput>
                </View>
                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ color: "black" }}>Mobile Number</Text>
                    <View style={{ flexDirection: "row" }}>

                        <Text style={{ width: "15%", color: "grey", borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderWidth: 0.5, marginTop: 10, borderColor: "grey", padding: 15 }}>+91</Text>
                        <TextInput placeholderTextColor={"grey"} placeholder='Enter your mobile number' style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10, width: "75%", color: "black", borderWidth: 0.5, marginTop: 10, borderColor: "grey", paddingLeft: 15 }}></TextInput>
                    </View>
                </View>
                <View style={{ marginLeft: 20, marginTop: 30 }}>
                    <Text style={{ color: "black" }}>Password</Text>
                    <TextInput placeholderTextColor={"grey"}  placeholder='Enter your password' style={{ color: "black", borderRadius: 10, borderWidth: 0.5, width: "90%", marginTop: 10, borderColor: "grey", paddingLeft: 15 }}></TextInput>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                    <View style={{ flexDirection: "row" }}>
                        <CheckBox onCheckColor='#067b70' tintColors={toggleCheckBox?"white":"black"} value={toggleCheckBox} onValueChange={() => setToggleCheckBox(!toggleCheckBox)} style={{ color: "black", marginLeft: 20, marginTop: 15 }} />
                        <Text style={{ color: "black", marginLeft: 5, marginTop: 20,fontWeight:"bold" }}>I agree to terms and conditions</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={{ width: "87%", textAlign: "center", marginTop: 30, backgroundColor: "#067b70", marginLeft:20, padding: 10, color: "#eeeee4", borderRadius: 10, fontWeight: "500" }}>Sign Up</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 30, alignSelf: "center" }}>
                <Text style={{ marginTop: -5 ,color:"grey"}}>_____________  </Text>
                <Text style={{ fontWeight: "500",color:"black" }}>or Sign Up With</Text>
                <Text style={{ marginTop: -5 ,color:"grey"}}>  _____________</Text>
            </View>
            <View style={{ marginTop: 30, width: "90%", alignSelf: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <View style={{ borderWidth: 0.5, padding: 10, width: "48%", borderRadius: 10, borderColor: "grey", flexDirection: "row", alignItems: "center" }}>
                    <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png" }} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}></Image>
                    <Text style={{ fontWeight: "600" ,color:"grey"}}>Facebook</Text>
                </View>

                <View style={{ borderWidth: 0.5, padding: 10, width: "48%", borderRadius: 10, borderColor: "grey", flexDirection: "row", alignItems: "center" }}>
                    <Image source={{ uri: "https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" }} style={{ width: 30, height: 30, marginRight: 10, marginLeft: 10 }}></Image>
                    <Text style={{ fontWeight: "600",color:"grey" }}>Google</Text>
                </View>

            </View>

            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 20,alignItems:"center" }}>
                <Text style={{color:"grey"}}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={{ fontSize: 16, color: "#067b70", fontWeight: "600" }}>Login</Text>
                </Pressable>

            </View>
        </View>
    )
}








