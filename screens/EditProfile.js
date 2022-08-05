import React from "react";
import EditProfileCmp from "../components/EditProfileCpm";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar
} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
const EditProfileScreen=({navigation})=>{
return(<>
        <SafeAreaView>
            <EditProfileCmp navigation={navigation}/>
        </SafeAreaView>
</>)
}
export default EditProfileScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})