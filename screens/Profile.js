import React from "react";
import ProfileCpm from "../components/PerfileCpm";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const ProfileScreen=({navigation})=>{
return(<>
        <ProfileCpm navigation={navigation}/>
</>)
}
export default ProfileScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})