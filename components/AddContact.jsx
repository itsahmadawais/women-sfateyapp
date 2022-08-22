import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image, Dimensions
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Circles from "./Circlebackground";
import Profilebtn from "./Profilebtn";
import BottomTabs from "./BottomTabs";
import Smallbtn from "./Small_btn";
import AsyncStorage from "@react-native-async-storage/async-storage";

import instance from "./axios";


const Addnewcontact = ({ navigation }) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [Fname, setFname] = useState();
    const [surname, setSurname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [image, setPickedImag] = useState(null);
    const [user,setUser] = useState([]);


    const openGallery = async () => {
        // ImagePicker.launchImageLibraryAsync
        // DocumentPicker.getDocumentAsync
        const image_picked = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // type:[DocumentPicker.types.allFiles]
            //aspect: [16, 16],
            width:150,
            height:150,
            mediaTypes:"photo",
            // quality: 1,

        });
        //setPickedImag(image_picked)
         if (!image_picked.cancelled) {
            setPickedImag(image_picked.uri);
          }
        console.log(image_picked,"Image Picked")
    };
    const contactHandler = async (event) => {
        var data = {
            name: Fname + " " + surname,
            phone: phone,
            email: email
        }
        const formData = new FormData();
        formData.append('name', Fname+" "+surname);
        formData.append('email',email);
        formData.append('phone',phone);
        
        instance.post("contacts",data,{
            headers: {
                'Authorization' : 'Bearer ' +user.access_token,
                'Content-Type': 'application/json',
            }
        }).then((response)=>{
            alert("Contact successfully added!");
        }).catch((error)=>{
            alert("Error in adding contact. Try again later!");
        })


    }
    useEffect(()=>{
        const get_user_data = async ()=>{
            var user_data = await AsyncStorage.getItem('user');
            user_data = JSON.parse(user_data);
            setUser(user_data);
        }
        get_user_data();
    },[])
    return (
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
                        <Text style={styles.h1Text}>Add New Contact</Text>
                    </View>
                    <View style={styles.profileimg}>
                        {
                            user.profile_picture!=undefined ?
                            <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={user.profile_picture} />
                            :
                            image? 
                            <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={require("../assets/images/Ellipse-1.png")} />
                            :
                            <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={require("../assets/images/Ellipse-1.png")} />
                        }
                    </View>
                    <TouchableOpacity onPress={openGallery} style={styles.camimg}>
                        <Image source={require("../assets/images/cam-1.png")} />
                    </TouchableOpacity>
                    <View style={{ marginTop: '60%' }}>
                        <View style={styles.inputView}>
                            <MaterialCommunityIcons name={'account-circle-outline'}
                                size={26}
                                color="#837B7B"
                                marginRight={100}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={Fname}
                                onChangeText={(Fname) => setFname(Fname)}
                                placeholder="First name"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <MaterialCommunityIcons name={'account-circle-outline'}
                                size={26}
                                color="#837B7B"
                                marginRight={100}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={surname}
                                onChangeText={(surname) => setSurname(surname)}
                                placeholder="Sure name"
                                secureTextEntry={false}
                            // keyboardType="numeric"
                            />

                        </View>
                        <View style={styles.inputView}>
                            <MaterialCommunityIcons name={'phone-in-talk-outline'}
                                size={26}
                                color="#837B7B"
                                marginRight={100}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={phone}
                                onChangeText={(phone) => setPhone(phone)}
                                placeholder="Phone"
                                secureTextEntry={false}
                                keyboardType="numeric"
                            />

                        </View>
                        <View style={styles.inputView}>
                            <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                placeholder="Email ID"
                            // secureTextEntry={true}
                            // keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.btn_view}>
                        <Smallbtn name="cancel" callParent={() => navigation.goBack()} />
                        <Smallbtn callParent={contactHandler} name="save" />

                    </View>
                </View>
            </View>
        </View>
    );
}
export default Addnewcontact;
const styles = StyleSheet.create({
    screen: {
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        padding: 10,
        paddingTop: 40
    },
    h1_view: {
        justifyContent: "center",
        position: "absolute",
        left: 40,
        top: 110,

    },
    h1Text: {
        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
    },
    profileimg: {
        top: "23%",
        left: "30%"
    },
    camimg: {
        position: "absolute",
        top: "50%",
        left: "65%"
    },
    inputView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        marginBottom: "5%",
        width: "65%",
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#837B7B",
        marginLeft: 14,

    },
    atimg: {
        marginTop: 7,
        width: 22,
        height: 22
    },
    padlockimg: {
        marginTop: 5,
        width: 24,
        height: 24
    },

    btn_view: {
        width: "100%",
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around"
    }


})