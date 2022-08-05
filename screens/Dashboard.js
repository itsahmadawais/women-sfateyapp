import React from "react";
import { Text,StyleSheet,StatusBar } from "react-native";
import DashBoard from "../components/DashBoard";
const Dashboardscreen=({navigation})=>{
    return(
        <>
           <DashBoard navigation={navigation}/>
        </>
    );
}
export default Dashboardscreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})