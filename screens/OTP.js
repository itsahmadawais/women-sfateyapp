import React from "react";
import OTPCmp from "../components/OTPCmp";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const OTPScreen=({navigation})=>{
return(<>
        <OTPCmp navigation={navigation}/>
</>)
}
export default OTPScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})