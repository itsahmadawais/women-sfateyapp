import React from "react";
import ChangePassCmp from "../components/ChangePassCmp";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
const ChangePassScreen=({navigation})=>{
return(<>
        <SafeAreaView>
            <ChangePassCmp navigation={navigation}/>
        </SafeAreaView>
</>)
}
export default ChangePassScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})