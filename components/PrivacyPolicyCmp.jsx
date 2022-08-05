import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import Profilebtn from "./Profilebtn";
import BottomTabs from "./BottomTabs";
import Smallbtn from "./Small_btn";
const Addnewcontact = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                            <MaterialCommunityIcons name="arrow-left" color="#ffffff" size={26} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.h1_view}>
                        <Text style={styles.h1Text}>Privacy
                            policy</Text>
                    </View>
                    <View style={styles.Text_main_View}>
                    <View >
                        <Text style={styles.H2Text}>Terms Of Service</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Text>
                        <Text>Lorem Ipsum has been the industry's standard dummy text
                        </Text>
                    </View>
                    <View style={styles.Text_sub_view}>
                        <Text style={styles.H2Text}>Authorized User</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Text>
                        <Text>Lorem Ipsum has been the industry's standard dummy text
                        </Text>
                    </View>
                    <View style={styles.Text_sub_view}>
                        <Text style={styles.H2Text}>Use Of Your Personal Data</Text>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                        </Text>
                        <Text>Lorem Ipsum has been the industry's standard dummy text
                        </Text>
                    </View>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
    );
}
export default Addnewcontact;
const styles = StyleSheet.create({
    screen: {
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        marginHorizontal:25
    },
    h1_view: {
        width: "50%",
        paddingTop: 100,
        textAlign: "center",
        left: "20%"
    },
    h1Text: {
        textAlign: "center",
        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
    },
    Text_main_View:{
        marginTop: 100,
        
    },
    Text_sub_view:{
        marginTop:30,
        // marginBottom:25
    },
    H2Text:{
        marginBottom:10,
        fontSize:24,
        fontWeight:"400"
    },

})