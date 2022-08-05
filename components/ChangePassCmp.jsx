import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import Mainbtn from "./Mainbtn";
const ChangePassCmp = ({navigation}) => {
    const [Show1, setShow1] = useState(true);
    const [Show2, setShow2] = useState(true);
    const [Show3, setShow3] = useState(true);
    const [Visible1, setVisible1] = useState(true);
    const [Visible2, setVisible2] = useState(true);
    const [Visible3, setVisible3] = useState(true);
    const [oldPassword, setOldpassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const UpdateHandler = async (event) => {
        let data = { oldPassword, newPassword, confirmPassword }
        let Result = await fetch('https://womansafetyapp.herokuapp.com/api/v1/user/password/update', {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        Result = await Result.json()
        console.log(Result)
        // if(Result.success === true){
        // props.navigation.navigate('Home')
        // }
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <MaterialCommunityIcons name="arrow-left" color="#ffffff" size={26} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.h1_view}>
                        <Text style={styles.h1Text}>Change Password</Text>
                    </View>
                    <View style={styles.ptext}><Text>Your new password must be different from previous used passwords.</Text></View>
                    <View style={{ marginTop: '6%' }}>
                        <Text>Old Password</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                secureTextEntry={Visible1}
                                autoCorrect={false}
                                value={oldPassword}
                                onChangeText={(oldPassword) => setOldpassword(oldPassword)}
                                placeholder={"******************"}
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible1(!Visible1)
                                setShow1(!Show1)
                            }}>
                                <MaterialCommunityIcons name={Show1 === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.inputhint}>Entre your old password</Text>
                        <Text>New Password</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                secureTextEntry={Visible2}
                                autoCorrect={false}
                                value={newPassword}
                                onChangeText={(newPassword) => setNewPassword(newPassword)}
                                placeholder="******************"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible2(!Visible2)
                                setShow2(!Show2)
                            }}>
                                <MaterialCommunityIcons name={Show2 === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.inputhint}>Must be at least 8 characters.</Text>
                        <Text>Confirm New Password</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={Visible3}
                                value={confirmPassword}
                                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                                placeholder="******************"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible3(!Visible3)
                                setShow3(!Show3)
                            }}>
                                <MaterialCommunityIcons name={Show3 === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.inputhint}>Both password must match</Text>

                        {/* <ChangePassinput inputhint="Entre your old password" backgroundColor="#CDDD8794" Text="Old Password" palceholder="******************" />
                        <ChangePassinput inputhint="Must be at least 8 characters." backgroundColor="#CDDD8794" Text="New Password" palceholder="******************" />
                        <ChangePassinput inputhint="Both password must match" backgroundColor="#CDDD8794" Text="Confirm New Password" palceholder="******************" /> */}

                    </View>
                    <Mainbtn callParentFunction={() => UpdateHandler()} name="Reset Password" marginTop={10} />


                </View>
            </View>
        </ScrollView>
    );
}
export default ChangePassCmp;
const styles = StyleSheet.create({
    screen: {
        
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        paddingLeft: "6%",
        paddingRight: "6%"
    },
    btnContainer:{
        paddingTop: 20
    },
    h1_view: {
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 60,
        top: 110,

    },
    h1Text: {
        textAlign: "center",
        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
    },
    ptext: {
        marginTop: 250,
        textAlign: "center",
    },
    inputView: {
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#CDDD87",
        width: "100%",
        height: 40,
        borderRadius: 10,
        marginTop: "2%",
        justifyContent: "space-between"
    },
    input: {
        fontSize: 14,
        marginLeft: 14,

    },
    btneye: {
        // position: "absolute",
        right: "25%",
        justifyContent: "center",
    },
    inputhint: {
        marginBottom: "8%"
    },


})