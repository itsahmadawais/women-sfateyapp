import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Profilebtn = (props) => {
    return (<>
        <View style={styles.btn_view}>
            <Pressable onPress={props.callParentfunction} style={styles.btn}>
                <MaterialCommunityIcons  style={styles.atimg} name={props.icon} size={26} />
                <Text style={styles.btn_text}>{props.name}</Text>
                <Image style={{ marginLeft: props.mar }} source={require("../assets/images/forward-arrow.png")} />
            </Pressable>
        </View>
    </>)
}
export default Profilebtn;
const styles = StyleSheet.create({
    btn_view: {
        marginTop: 25,
        alignItems: "center",
        width: "100%",
    }
    ,
    btn: {
        flexDirection: "row",
        backgroundColor: "#CDDD87",
        width: "80%",
        height: 45,
        alignItems: "center",
        borderRadius: 10,
    },
    atimg: {
        marginLeft: 10,
    },
    btn_text: {
        marginLeft: 20
    },
    forwrdimg: {
        marginLeft: 140
    },
})
