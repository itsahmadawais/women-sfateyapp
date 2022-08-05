import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import AwarenessTouchable from "./AwarenesTouchable";
const SettingHeadingCmp = (props) => {
    var navigation = props.navigation
    return (
        <View style={[styles.Gesture_View,{marginTop:props.marginTop}]}>
            <Text style={styles.gesture_text}>{props.name}</Text>
            <View style={styles.icon_View}>
                <Text style={styles.icon}>?</Text>
            </View>
        </View>
    );
}
export default SettingHeadingCmp;
const styles = StyleSheet.create({

    Gesture_View: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#CDDD87",
        height: 35,
        width: "100%",
        marginTop: 250,
        borderRadius: 9,
    },
    gesture_text: {
        color: '#000000',
        fontSize: 20,
        fontWeight: "600",
        flex: 2,
        marginHorizontal: 15
    },
    icon_View: {
        height: 25,
        width: 25,
        borderRadius: 50,
        backgroundColor: "#66771B",
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        color: "#ffff",
        fontSize: 20
    },

})