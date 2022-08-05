import React from "react";
import AwarenesCmp from "../components/AwarenesCpm";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const AwarnessScreen=({navigation})=>{
return(<>
        <AwarenesCmp navigation={navigation}/>
</>)
}
export default AwarnessScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})