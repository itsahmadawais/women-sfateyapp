import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Mainbtn from "./Mainbtn";
const ForgetPass = (props,{navigation}) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [isloading, setLoading] = useState(false);
    const ForgetpassHandler = async (event) => {
        // event.preventDefault();
        setLoading(true)
        if(email===""){
            setLoading(false);
            Alert.alert("Error","Please enter the email.")
        } else{
            let data = {email}
            // https://cors-anywhere.herokuapp.com/
            let Result = await fetch('https://womansafetyapp.herokuapp.com/api/v1/user/password/forgot', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            Result = await Result.json()
            console.log(Result)
            if(Result.success===true){
                setLoading(false)
                props.navigation.navigate('OTP',{otherParam: 'anything you want here'})
            }
            else{
                setLoading(false)
                alert(Result[0].message)
            }
        }
    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.main_view}>
            {isloading===true?
                <View pointerEvents="none" style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Forgot-password-amico-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Forget
                            Password?</Text>
                        <Text style={styles.ptext}>Dont worry! it happens. Please entre the address
                            associated with your account .</Text>
                        <View style={styles.inputView}>
                            <Image style={styles.atimg} source={require("../assets/images/at-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                placeholder="Email ID / Mobile number"

                            // keyboardType="numeric"
                            />
                        </View>
                    </View>
                    <View style={styles.btnArea}>
                        <Pressable onPress={ForgetpassHandler} style={styles.btnSubmitt}>
                            <Text style={styles.Submittext} >Submit</Text>
                        </Pressable>
                    </View>
                    <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 35, alignSelf: "center", backgroundColor: '#908C8C' }} />
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>
                :
                <View  style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Forgot-password-amico-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Forget
                            Password?</Text>
                        <Text style={styles.ptext}>Dont worry! it happens. Please entre the address
                            associated with your account .</Text>
                        <View style={styles.inputView}>
                            <Image style={styles.atimg} source={require("../assets/images/at-1.png")} />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                                placeholder="Email ID / Mobile number"
                            />
                        </View>
                    </View>
                    <View style={styles.btnArea}>
                        <Pressable onPress={ForgetpassHandler} style={styles.btnSubmitt}>
                            <Text style={styles.Submittext} >Submit</Text>
                        </Pressable>
                    </View>
                    <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 35, alignSelf: "center", backgroundColor: '#908C8C' }} />
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>}
            </View>
        </ScrollView>
    );
}
export default ForgetPass;
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
    atimg: {
        marginTop: 7,
        width: 22,
        height: 22
    },

    ptext: {
        color: "#000000",
        fontSize: 12,
        marginBottom: 20

    },
    btnArea: {
        justifyContent: "center",
        alignItems: "center",
    },
    btnSubmitt: {
        marginTop: 40,
        marginBottom:40,
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
    Submittext: {
        fontSize: 18,
        fontWeight: "400",
        color: '#FFFFFF'
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