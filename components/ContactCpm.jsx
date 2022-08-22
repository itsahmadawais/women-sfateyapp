import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import Profilebtn from "./Profilebtn";
import BottomTabs from "./BottomTabs";
import ContactList from "./ContactList";

import instance from "./axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ContactCpm = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);
    const [user,setUser] = useState([]);
    const [search,setSearch]=useState('');

    useEffect(() => {
        const get_data = async () => {
            var user = await AsyncStorage.getItem('user');
            user = JSON.parse(user);
            instance.get('contacts', {
                headers: {
                    'Authorization': 'Bearer ' + user.access_token
                }
            }).then((response) => {
                setContacts(response.data.contacts);
            }).catch((error)=>{
            });
        }
        get_data();
    }, []);

    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View>
                        <Text style={styles.h1Text}>Contact list</Text>
                    </View>
                    <View style={styles.search_view}>
                        <View style={styles.input_view}>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={search}
                                onChangeText={(search) => setSearch(search)}
                                placeholder="Search Contact "
                                secureTextEntry={true}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={'search-web'}
                                    size={26}
                                    color="#837B7B"
                                // marginRight={60}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView>
                        <View style={styles.contact_list}>
                            <ContactList contacts={contacts} />
                        </View>
                    </ScrollView>

                    <Pressable onPress={() => navigation.navigate('new_contact')} style={styles.add_btn}>
                        <MaterialCommunityIcons name="plus"
                            color="white"
                            size={36}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    );
}
export default ContactCpm;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
    },
    h1Text: {
        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
        position: "absolute",
        left: 90,
        top: 90,
    },
    search_view: {
        width: "100%",
        marginTop: "50%",


    },
    contact_list: {
        marginTop: 20
    },
    input_view: {
        height: 45,
        marginHorizontal: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    input: {
        width: "80%",
        fontSize: 14,
    },

    add_btn: {
        position: "absolute",
        top: 595,
        left: 290,
        backgroundColor: "#5C9145",
        height: 55,
        width: 55,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    }


})