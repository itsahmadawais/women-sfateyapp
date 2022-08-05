import React from "react";
import { Text,StyleSheet,StatusBar } from "react-native";
import Signup from "../components/Signup";
const Signupscreen=({navigation})=>{
    return(
        <>
           <Signup navigation={navigation}/>
        </>
    );
}
export default Signupscreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})