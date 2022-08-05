import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, ActivityIndicator, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Mainbtn from "./Mainbtn";
const ResetPass = (props) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [newpassword, setNewpass] = useState(true);
    const [confirmpassword, setConfirmpass] = useState(true);
    const [isloading, setLoading] = useState(false);
    const ResetpassHandler = async (event) => {
        // event.preventDefault();
        // setLoading(true)
        let data = {newpassword,confirmpassword }
        let Result = await fetch('https://womansafetyapp.herokuapp.com/user/password/reset', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        Result = await Result.json()
        setLoading(false)
        console.log(Result)
        if(Result.success===true){
            props.navigation.navigate('login')
        }
        else{
            setLoading(false)
            alert(Result.message)
        }
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.main_view}>
            {isloading===true?
                <View pointerEvents="none" style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Reset-password-amico-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Reset {' '}Password?</Text>
                            <View style={{ flexDirection: "row" }}>
                            <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={newpassword}
                                onChangeText={(newpassword)=>setNewpass(newpassword)}
                                placeholder="New password"
                                secureTextEntry={Visible}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={Show === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                    marginRight={100}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={confirmpassword}
                                onChangeText={(confirmpassword)=>setConfirmpass(confirmpassword)}
                                placeholder="Confirm new password"
                                secureTextEntry={Visible}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={Show === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                    marginRight={100}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Mainbtn callParentFunction={()=>ResetpassHandler()} name="Submit" marginBottom={40} marginTop={40}/>
                    <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 42, alignSelf: "center", backgroundColor: '#908C8C' }} />
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>
                :
                <View  style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Reset-password-amico-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Reset {' '}Password?</Text>
                            <View style={{ flexDirection: "row" }}>
                            <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={newpassword}
                                onChangeText={(newpassword)=>setNewpass(newpassword)}
                                placeholder="New password"
                                secureTextEntry={Visible}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={Show === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                    marginRight={100}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={confirmpassword}
                                onChangeText={(confirmpassword)=>setConfirmpass(confirmpassword)}
                                placeholder="Confirm new password"
                                secureTextEntry={Visible}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={Show === false ? 'eye-outline' : 'eye-off-outline'}
                                    size={26}
                                    color="#837B7B"
                                    marginRight={100}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Mainbtn callParentFunction={()=>ResetpassHandler()} name="Submit" marginBottom={40} marginTop={40}/>
                    <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 42, alignSelf: "center", backgroundColor: '#908C8C' }} />
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>
            }
            </View>
        </ScrollView>
    );
}
export default ResetPass;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "#FFFFF",
    },
    main_view: {
        width: "100%",
        paddingLeft: 37,
        paddingRight: 37,
    },
    container: {
        marginBottom: 360,
    },
    backgroundimg: {
        alignItems: "center", justifyContent: "center",
        marginBottom: "15%",
    },
    img: {
        width: "85%", height: "60%",
    },
    Heading: {
        // marginTop:-25,
        marginBottom: 20,
        fontWeight: "700",
        fontSize: 36,
        alignSelf: "flex-start",
    },
    inputView: {
        flexDirection: "row",
    },
    input: {
        marginBottom: "5%",
        width: "90%",
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#837B7B",
        marginLeft: 14,

    },
    btneye: {
        position: "absolute",
        right: "-2%"
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
})