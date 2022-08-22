import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, ActivityIndicator, TouchableOpacity, Text, TextInput, ScrollView, FlatList, Image, Button
    , Linking
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import instance from './axios';

const Login = (props) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setLoading] = useState(false);
    var value
    const LoginHandler = async (event) => {
        //event.preventDefault();
        setLoading(true)
        if (email === "" || password === "") {
            setLoading(false)
            Alert.alert("Invalid Credentials", "Please enter valid login details.");
        }
        else {
            instance.post('auth/login',{
                email: email,
                password: password
            }).then(async (response)=>{
                setLoading(false)
                if(response.status==200){
                    try {
                        await AsyncStorage.setItem(
                        'user',
                        JSON.stringify(response.data)
                        );
                        await AsyncStorage.setItem(
                            'isLoggedIn',
                            "true"
                        );
                    } catch (error) {
                        // Error saving data
                    }
                    props.navigation.push('Home')
                }
                else{
                    alert('Please check your email or password and try again!');
                }
            }).catch((error)=>{
                setLoading(false)
                alert("Error in loggin in. You can try again!");
            })
        }
    }
    useEffect(()=>{
        const hideOnBoardingScreen = async ()=>{
            try{
                await AsyncStorage.setItem('is_first_time', "false");
            } catch(error){
                
            }
        }
        hideOnBoardingScreen();
    },[])
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.main_view}>
                {isloading === true ?
                    <View pointerEvents="none" style={styles.container}>
                        <View style={styles.backgroundimg}>
                            <Image style={styles.img} source={require("../assets/images/Computer-login-bro.png")} />
                        </View>
                        <View style={{ marginTop: -58 }}>
                            <Text style={styles.Heading}>Login</Text>
                            <View style={styles.inputView}>
                                <Image style={styles.atimg} source={require("../assets/images/at-1.png")} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={email}
                                    onChangeText={(email) => setEmail(email)}
                                    placeholder="Email ID"

                                // keyboardType="numeric"
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={password}
                                    onChangeText={(password) => setPassword(password)}
                                    placeholder="Password"
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
                        <Pressable onPress={() => {
                            props.navigation.navigate('Forget')
                        }} style={styles.Forgetbtn}>
                            <Text style={styles.ForgetText}>Forget Password?</Text>
                        </Pressable>

                        <View style={styles.btnArea}>
                            <Pressable onPress={LoginHandler} style={styles.btnLogin}>
                                <Text style={styles.logintext}>Login</Text>
                            </Pressable>
                        </View>

                        <Text style={{ textAlign: "center", marginTop: 35 }}>
                            New to women’s safety? {' '}
                            <Text

                                onPress={() => {
                                    props.navigation.navigate('Signup')
                                }}>
                                <Text style={{ color: "#5C9145" }}>Register</Text>

                            </Text>
                        </Text>
                        <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 60, alignSelf: "center", backgroundColor: '#908C8C' }} />
                        {isloading && <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#5C9145" animating={isloading} />
                        </View>}


                    </View>
                    :
                    <View style={styles.container}>
                        <View style={styles.backgroundimg}>
                            <Image style={styles.img} source={require("../assets/images/Computer-login-bro.png")} />
                        </View>
                        <View style={{ marginTop: -58 }}>
                            <Text style={styles.Heading}>Login</Text>
                            <View style={styles.inputView}>
                                <Image style={styles.atimg} source={require("../assets/images/at-1.png")} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={email}
                                    onChangeText={(email) => setEmail(email)}
                                    placeholder="Email ID"

                                // keyboardType="numeric"
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Image style={styles.padlockimg} source={require("../assets/images/padlock-1.png")} />
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    value={password}
                                    onChangeText={(password) => setPassword(password)}
                                    placeholder="Password"
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
                        <Pressable onPress={() => {
                            props.navigation.navigate('Forget')
                        }} style={styles.Forgetbtn}>
                            <Text style={styles.ForgetText}>Forget Password?</Text>
                        </Pressable>

                        <View style={styles.btnArea}>
                            <Pressable onPress={LoginHandler} style={styles.btnLogin}>
                                <Text style={styles.logintext}>Login</Text>
                            </Pressable>
                        </View>
                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>OR</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={styles.signinbtnarea}>
                        <Pressable  style={styles.btnsignin}>
                            <Image style={styles.googleimg} source={require("../assets/images/icons_google.png")} />
                            <Text style={styles.signintext}>Login With Google</Text>
                        </Pressable>

                    </View> */}
                        <Text style={{ textAlign: "center", marginTop: 35 }}>
                            New to women’s safety? {' '}
                            <Text

                                onPress={() => {
                                    props.navigation.navigate('Signup')
                                }}>
                                <Text style={{ color: "#5C9145" }}>Register</Text>

                            </Text>
                        </Text>
                        <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 60, alignSelf: "center", backgroundColor: '#908C8C' }} />
                        {isloading && <View style={styles.loading}>
                            <ActivityIndicator size="large" color="#5C9145" animating={isloading} />
                        </View>}


                    </View>
                }
            </View>
        </ScrollView>

    )
}
export default Login;
const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
        paddingLeft: 37,
        paddingRight: 37,
    },
    container: {
        marginBottom: 380,
    },
    backgroundimg: {
        alignItems: "center", justifyContent: "center",
        // marginTop:"-10%",
    },
    img: {
        width: "70%", height: "60%",
    },
    Heading: {
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
    atimg: {
        marginTop: 7,
        width: 22,
        height: 22
    },
    googleimg: {
        marginLeft: 10,
        marginRight: 45,
        width: 37,
        height: 37
    },
    padlockimg: {
        marginTop: 5,
        width: 24,
        height: 24
    },
    btneye: {
        position: "absolute",
        right: "-2%"
    },
    Forgetbtn: {
        // position: 'absolute',
        // right: "0%",
        // top: "65%"
    },
    ForgetText: {
        textAlign: "right",
        color: "#5C9145",
        fontSize: 12,
    },
    btnArea: {
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    btnLogin: {
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#5C9145",
        width: "100%",
        height: 48,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 23,

    },
    logintext: {
        fontSize: 18,
        fontWeight: "400",
        color: '#FFFFFF'
    },
    signinbtnarea: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnsignin: {
        backgroundColor: "#E6EAE5",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: 48,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 23,

    },
    signintext: {
        fontSize: 16,
        fontWeight: "400",
        color: '#000000'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }

})