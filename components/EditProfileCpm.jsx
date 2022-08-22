import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image , Button
} from 'react-native';
import Circles from "./Circlebackground";
import EditProfileinput from "./EditeProfileInput";
import DatePicker from 'react-native-date-picker'
import Smallbtn from "./Small_btn";
const EditProfileCmp = ({ navigation }) => {
    const [user,setUser] = useState([]);
    useEffect(() => {
        const get_data = async () => {
            var user_data = await AsyncStorage.getItem('user');
            user_data = JSON.parse(user_data);
            setUser(user_data);
        }
        get_data();
    }, []);
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.main_view}>
                    <View style={styles.container}>
                        <Circles />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                <MaterialCommunityIcons name="arrow-left" color="#ffffff" size={26} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.h1_view}>
                            <Text style={styles.h1Text}>Edit Profile</Text>
                        </View>
                        <View>
                            <EditProfileinput backgroundColor="#CDDD8794" Text="Email Address" palceholder={user.user!=undefined? user.user.email : 'youremail@gmail.com'} defaultValue={user.user!=undefined? user.user.email : ''} />
                            <EditProfileinput backgroundColor="#CDDD8794" Text="Contact Number" palceholder={user.user!=undefined? user.user.phone : '0335xxxxx'} keyboardtype="numeric" defaultValue={user.user!=undefined ? user.user.phone : ''} />
                        </View>
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default EditProfileCmp;
const styles = StyleSheet.create({
    screen: {
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        paddingLeft: "6%",
        paddingRight: "6%"
    },
    h1_view: {
        paddingTop: 100,
        paddingBottom: 70,
        textAlign: "center",
        left: "20%"

    },
    h1Text: {

        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
    },

    btn_view: {
        width: "100%",
        marginTop: 40,
        flexDirection: "row",
        // justifyContent:"space-around"
    },
    datebtn_view: {
        flexDirection: "row",
        justifyContent: "space-around", marginTop: 5
    },
    btn: {
        height: 40,
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal:10,
        borderColor: "#CDDD87",
        borderWidth: 1,
        borderRadius: 10
    }


})