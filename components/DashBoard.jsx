import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, Linking, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import ContactList from "./ContactList";

import instance from "./axios";

import AsyncStorage from '@react-native-async-storage/async-storage';


const DashBoard = ({ navigation }) => {

    const [contacts, setContacts] = useState([]);
    const [user_data,setUser]=useState([]);

    const [simpleContacts,setSimpleContacts]=useState([]);
    
    var number
    const makeCall = async (number) => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }

        // instance.post('make-a-call',{
        //     'number': number
        // }, {
        //     headers:{
        //         'Authorization': 'Bearer ' + user_data.access_token
        //     }
        // }).then((response) => {
        //     console.log(response.data.calling_record);
        //     alert("DD");
        //     Linking.openURL(phoneNumber);
        // });

        Linking.openURL(phoneNumber);
        
    };
    const Setting = () => {
        navigation.navigate('Setting')
    }
    useEffect(() => {
        const get_data = async () => {
            var user = await AsyncStorage.getItem('user');
            user = JSON.parse(user);
            instance.get('emergency_contacts', {
                headers: {
                    'Authorization': 'Bearer ' + user.access_token
                }
            }).then((response) => {
                setContacts(response.data.contacts);
                console.log(response.data.contacts, "####CONTACTS#######");
                setUser(user);
            });
            instance.get('contacts', {
                headers: {
                    'Authorization': 'Bearer ' + user.access_token
                }
            }).then((response) => {
                setSimpleContacts(response.data.contacts);
            }).catch((error)=>{

            });
        }
        get_data();
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.header}>
                    <View style={styles.logo_view}>
                        <Image source={require("../assets/images/women-safety-logo28-1.png")} />
                    </View>
                    <TouchableOpacity onPress={Setting} style={styles.Setting_view}>
                        <Image source={require("../assets/images/flat-color-icons_settings.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                {/* <View style={{width:"100%",justifyContent:"center"}}> */}
                <View style={styles.emergency_view}>
                    <Text style={styles.h1_text}>Emergency Help</Text>
                    <View style={styles.alert_view}>
                        <TouchableOpacity onPress={() => makeCall(15)}>
                            <View style={styles.alert_btn}>
                                <Text style={styles.alert_btntext}>15</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => makeCall(911)}>
                            <View style={styles.alert_btn}>
                                <Text style={styles.alert_btntext}>911</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 15 }}>
                        <View>
                            <Text style={{ color: "#5C9145", fontSize: 24, fontWeight: "700" }}>Alert</Text>
                        </View>
                        <View >
                            <Text style={{ color: "#5C9145", fontSize: 24, fontWeight: "700" }}>Alert</Text>
                        </View>
                    </View>
                </View>
                {/* </View> */}
                <View style={styles.call_view}>
                    <TouchableOpacity style={styles.main_btn} onPress={() => navigation.navigate("LiveChat")} >
                        <MaterialCommunityIcons name='chat-processing-outline' color="#FFFFFF" size={60} />
                        <Text style={{ textAlign: "center", color: "#FFFFFF" }}>Emergency Live Chat</Text>
                    </TouchableOpacity>
                    {
                        contacts.map((item) => {
                            return (
                                <TouchableOpacity onPress={() => makeCall(number = item.phone )} style={styles.main_btn} >
                                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                        <MaterialCommunityIcons name='phone-in-talk-outline' color="#FFFFFF" size={60} />
                                        <Text style={{ textAlign: "center", fontSize: 24, alignSelf: "center", color: "white", fontWeight: "600" }}>{item.phone}</Text>
                                    </View>
                                    <Text style={{ textAlign: "center", color: "#FFFFFF" }}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>

                <View>
                    <ContactList contacts={simpleContacts} />
                </View>
            </ScrollView>
        </View>
    )

}
export default DashBoard;
const styles = StyleSheet.create({
    header: {
        marginTop: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    screen: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
        // padding: 20,
        paddingLeft: 37,
        paddingRight: 37,
    },
    logo_view: {

    },
    Setting_view: {
        justifyContent: "center"
    },
    emergency_view: {
        marginTop: 30,
        borderRadius: 23,
        width: "90%",
        alignSelf: "center",
        borderColor: "#5C9145",
        borderWidth: 1
    },
    h1_text: {
        color: "#5C9145",
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 15
    },
    alert_view: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10
    },
    alert_btn: {
        backgroundColor: "#FF0101",
        width: 64,
        height: 64,
        borderRadius: 50,
    },
    alert_btntext: {
        color: "#FFFFFF",
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginTop: 15

    },
    main_btn: {
        width: '45%',
        backgroundColor: "#A8B768",
        alignItems: "center",
        borderRadius: 26,
        padding: 15,
        marginTop: 20,
        marginLeft: 10

    },
    call_view: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10
    }
})