import React from "react";
import SettingCmp from "../components/SettingCmp";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const SettingScreen=({navigation})=>{
return(
        <SettingCmp navigation={navigation}/>
        )
}
export default SettingScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})