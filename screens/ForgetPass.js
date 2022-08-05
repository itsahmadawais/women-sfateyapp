import React from "react";
import { Text,StyleSheet,StatusBar } from "react-native";
import ForgetPass from "../components/Forgetpass";
const ForgetPassscreen=({navigation})=>{
    return(
        <>
           <ForgetPass navigation={navigation}/>
        </>
    );
}
export default ForgetPassscreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})