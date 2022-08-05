import React from "react";
import Addnewcontact from "../components/AddContact";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const NewContactScreen=({navigation})=>{
return(<>
        <SafeAreaView>
            <Addnewcontact navigation={navigation}/>
        </SafeAreaView>
</>)
}
export default NewContactScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})