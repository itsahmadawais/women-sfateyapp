import React from "react";
import Login from "../components/Login";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const LoginScreen=({navigation})=>{
return(<>
        <Login navigation={navigation}/>
</>)
}
export default LoginScreen;
const styles=StyleSheet.create({
screen:{
    // flex:1,
    backgroundColor:"#FFFFFF",
}
})
