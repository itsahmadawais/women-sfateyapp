import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
import LiveChatCamp from "../components/LiveChatCmp";
const LiveChatWidget=({navigation})=>{
return(<>
        <LiveChatCamp navigation={navigation}/>
</>)
}
export default LiveChatWidget;
