import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
const Circles = () => {
    return (
        <>
                    <View style={styles.maincircle}>
                    </View>
                    <View style={styles.greencircle}>
                    </View>
                    <View style={styles.yellowcircle}>
                    </View>
                    <View style={styles.smallcircle}>
                    </View>
                    </>  
    );
}
export default Circles;
const styles = StyleSheet.create({
    maincircle: {
        height: 550,
        width: 550,
        backgroundColor: "#CDDD87",
        borderRadius: 300,
        position: "absolute",
        top: -310,
        left: -110,
    },
    greencircle: {
        height: 263,
        width: 263,
        backgroundColor: "#5C9145",
        borderRadius: 130,
        position: "absolute",
        top: -140,
        left: -110,
    },
    yellowcircle: {
        height: 230,
        width: 230,
        backgroundColor: "#FBE624",
        borderRadius: 115,
        position: "absolute",
        top: -150,
        left: 55,
    },
    smallcircle: {
        height: 129,
        width: 129,
        backgroundColor: "#CDDD87",
        borderRadius: 65,
        position: "absolute",
        top: -60,
        left: 30,
    }
})