import React from "react";
import { Text,StyleSheet,StatusBar } from "react-native";
import ResetPass from "../components/Resetpass";
const ResetPassscreen=({navigation})=>{
    return(
        <>
           <ResetPass navigation={navigation}/>
        </>
    );
}
export default ResetPassscreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})