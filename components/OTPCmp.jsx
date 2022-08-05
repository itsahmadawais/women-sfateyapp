import React, { useState,useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar,ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Mainbtn from "./Mainbtn";
const OTPCmp = (props,{route,navigation}) => {
    // console.log(props)
    // const { otherParam } = route.params;
    const [Show, setShow] = useState(true);
    const [isloading, setLoading] = useState(false);
    const num1Ref=useRef(null);
    const num2Ref=useRef(null);
    const num3Ref=useRef(null); 
    const num4Ref=useRef(null);
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [num3, setNum3] = useState("");
    const [num4, setNum4] = useState("");
    // const CatId= props.navigation.getParam('message')
    var otp=num1+num2+num3+num4
    const ForgetpassHandler = async (event) => {
        // console.log(otp)
        // event.preventDefault();
        setLoading(true)
        let data = { otp }
        // https://cors-anywhere.herokuapp.com/
        let Result = await fetch('https://womansafetyapp.herokuapp.com/api/v1/user/verifyOTP', {
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
            props.navigation.navigate('Reset')
        }
        else{
            setLoading(false)
            alert(Result[0].message)
        }

    }
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.main_view}>
            {isloading===true?
                <View pointerEvents="none" style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Enter_OTP.png")} />
                    </View>
                    <View style={{ marginTop: '-20%' }}>
                        <Text style={styles.Heading}>Enter OTP</Text>
                        <Text style={styles.ptext}></Text>
                        <View style={styles.inputView}>
                        <View style={styles.TextInput_View}>
                            <TextInput
                                ref={num1Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num1}
                                onChangeText={(num1) => {setNum1(num1);
                                if(num1 != ""){
                                    num2Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                            ref={num2Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num2}
                                onChangeText={(num2) => {setNum2(num2);
                                    if(num2 != ""){
                                    num3Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                            ref={num3Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num3}
                                onChangeText={(num3) => {setNum3(num3);
                                    if(num3 != ""){
                                    num4Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                                ref={num4Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num4}
                                onChangeText={(num4) => setNum4(num4)}
                                placeholder="0"
                            />
                            </View>
                      
                        </View>
                    </View>
                    <Mainbtn callParentFunction={() => ForgetpassHandler()} name="Submit" marginBottom={40} marginTop={40} />
                    {/* <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 35, alignSelf: "center", backgroundColor: '#908C8C' }} /> */}
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>
                :
                <View  style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Enter_OTP.png")} />
                    </View>
                    <View style={{ marginTop: '-20%' }}>
                        <Text style={styles.Heading}>Enter OTP</Text>
                        <Text style={styles.ptext}></Text>
                        <View style={styles.inputView}>
                        <View style={styles.TextInput_View}>
                            <TextInput
                                ref={num1Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num1}
                                onChangeText={(num1) => {setNum1(num1);
                                if(num1 != ""){
                                    num2Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                            ref={num2Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num2}
                                onChangeText={(num2) => {setNum2(num2);
                                    if(num2 != ""){
                                    num3Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                            ref={num3Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num3}
                                onChangeText={(num3) => {setNum3(num3);
                                    if(num3 != ""){
                                    num4Ref.current.focus();
                                }
                                }}
                                placeholder="0"
                            />
                            </View>
                        <View style={styles.TextInput_View}>
                            <TextInput
                                ref={num4Ref}
                                style={styles.input}
                                autoCapitalize="none"
                                // keyboardType="number-pad"
                                maxLength={1}
                                autoCorrect={false}
                                value={num4}
                                onChangeText={(num4) => setNum4(num4)}
                                placeholder="0"
                            />
                            </View>
                      
                        </View>
                    </View>
                    <Mainbtn callParentFunction={() => ForgetpassHandler()} name="Submit" marginBottom={40} marginTop={40} />
                    {/* <View style={{ width: "60%", height: 5, borderRadius: 3, marginTop: 35, alignSelf: "center", backgroundColor: '#908C8C' }} /> */}
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>}
            </View>
        </ScrollView>
    );
}
export default OTPCmp;
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
        width: "85%", height: "70%",
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
        justifyContent:"space-evenly",
        alignItems:"center",

    },
    input: {
        textAlign:"center",
        fontSize: 40,
        color:"#000000"
    },
    atimg: {
        marginTop: 7,
        width: 22,
        height: 22
    },

    ptext: {
        color: "#837B7B",
        fontSize: 15,
        fontWeight:"400",
        marginBottom: 20

    },
    TextInput_View:{
        backgroundColor:"#D9D9D9",
        justifyContent:"center",
        borderRadius:5,
        width:38,
        height:66,
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