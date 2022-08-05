import React from "react";
import ContactCpm from "../components/ContactCpm";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const ContactScreen=({navigation})=>{
return(<>
        <ContactCpm navigation={navigation}/>
</>)
}
export default ContactScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    }
})