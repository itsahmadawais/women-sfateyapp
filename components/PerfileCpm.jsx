import React, { useEffect, useState } from "react";
import {
    View, StyleSheet, Modal, StatusBar, Text, Image, TouchableOpacity
} from 'react-native';
import Circles from "./Circlebackground";
import Profilebtn from "./Profilebtn";
import BottomTabs from "./BottomTabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "./contants";
import {launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
const ProfileCpm = (props) => {
    const [user, setUser] = useState([]);
    const [image, setPickedImag] = useState(null);
    const openGallery = async () => {
        // ImagePicker.launchImageLibraryAsync
        // DocumentPicker.getDocumentAsync
        const image_picked = await ImagePicker.launchImageLibraryAsync({
            // allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // type:[DocumentPicker.types.allFiles]
            // aspect: [16, 16],
            // width:400,
            // height:200,
            // mediaTypes:"photo",
            // quality: 1,

        });
        //setPickedImag(image_picked)
        console.log(image_picked,"Image Picked")
    };
    const LogoutHandler = async (event) => {
        let Result = await fetch(BASE_URL + 'user/logout', {
            method: 'GET',
            // body:JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        Result = await Result.json()
        if (Result.success === true) {
            props.navigation.navigate('login')
            clearAll = async () => {
                try {
                    await AsyncStorage.clear()
                    await AsyncStorage.setItem('is_first_time', 'false')
                } catch (e) {
                    // clear error
                }

                console.log('Done.')
            }

        }
        console.log(Result)
    }
    const EditProfile = () => {
        props.navigation.navigate('EditProfileScreen')
    }
    const ChangePass = () => {
        props.navigation.navigate('ChangePassScreen')
    }
    const Privacy = () => {
        props.navigation.navigate('Privacy_Policy')
    }
    useEffect(() => {
        const getData = async () => {
            var user_data = await AsyncStorage.getItem('user')
            console.log(user_data, "SDS")
            if (user_data !== null) {
                setUser(JSON.parse(user_data));
            }
        }
        getData()
    }, [user]);

    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View>
                        <Text style={styles.h1Text}>Profile</Text>
                    </View>
                    <View style={styles.profileimg}>
                        {
                            image!=null && image.uri!==undefined ?
                            <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={{uri: uri}} />
                            :
                            (
                                user.avatar==undefined? 
                                <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={{uri: user.avatar}} />
                                :
                                <Image style={{ width: 150, height: 150, borderRadius: 100 }} source={require("../assets/images/Ellipse-1.png")} />
                            )
                        }
                    </View>
                    <View style={styles.camimg} >
                        <TouchableOpacity onPress={openGallery}>
                            <Image source={require("../assets/images/cam-1.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: "37%" }}>
                        <Text style={styles.username}>{user.name ?? ''}</Text>
                    </View>
                    <Profilebtn callParentfunction={() => EditProfile()} name={"Edit Profile"} mar={142} icon={'at'} />
                    <Profilebtn callParentfunction={() => ChangePass()} name={"Change Password"} mar={95} icon={'eye-off-outline'} />
                    <Profilebtn callParentfunction={() => Privacy()} name={"Privacy"} mar={163} icon={'lock-outline'} />
                    <Profilebtn callParentfunction={() => LogoutHandler()} name={"Log Out"} mar={160} icon={'logout'} />
                    {/* <BottomTabs/> */}
                </View>
            </View>
        </View>
    );
}
export default ProfileCpm;
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
        left: 137,
        top: 90,
    },
    profileimg: {
        top: "23%",
        left: "30%"
    },
    camimg: {
        position: "absolute",
        top: "39.5%",
        left: "58%"
    },
    username: {
        textAlign: "center", fontSize: 36, fontWeight: "400"
    }

})