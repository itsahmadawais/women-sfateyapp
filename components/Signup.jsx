import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar,ActivityIndicator, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
const Signup = (props) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setLoading] = useState(false);
    const addUserHandler = async (event) => {
        // event.preventDefault();
        setLoading(true)
        if(email==="" || name==="" || phone==="" || password===""){
            setLoading(false);
            Alert.alert("Error","Please fill in the form to create your account.");
        } else{
            let data = { email, name, phone, password }
            let Result = await fetch('https://womansafetyapp.herokuapp.com/api/v1/user/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            Result = await Result.json()
            // console.log(Result[0].message)
            // alert(Result)
            setLoading(false)
            if(Result[0].success ===false){
            alert(Result[0].message)
            }
            else{
                navigate("Home")
            }
            // navigate("/")
        }
    }
    return (
        <ScrollView  style={styles.screen}>
            <View style={styles.main_view}>
                {isloading===true?
                <View pointerEvents="none" style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Mobile-login-pana-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Sign Up</Text>
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
                            <MaterialCommunityIcons name={'account-circle-outline'}
                                size={26}
                                color="#837B7B"
                                marginRight={100}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={name}
                                onChangeText={(name) => setName(name)}
                                placeholder="Full Name "
                                secureTextEntry={false}
                            // keyboardType="numeric"
                            />

                        </View>
                        <View style={{ flexDirection: "row" }}>
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
                                placeholder="Mobile"
                                secureTextEntry={false}
                                keyboardType="numeric"
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
                    <View style={{ width: '100%', marginTop: 30 }}>
                        <Text style={styles.ptext}>
                            By signing up, You’re agree to our{' '}
                            <Text style={styles.termbtn}

                                onPress={() => {
                                    props.navigation.navigate('Privacy_Policy')
                                }}>Terms & Conditions
                            </Text>{' '}and
                            <Text style={styles.termbtn}
                                onPress={() => {
                                    props.navigation.navigate('Privacy_Policy')
                                }}> {' '}Privacy Policy
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.btnArea}>
                        <Pressable onPress={addUserHandler} style={[styles.btnSubmitt, { marginTop: props.marginTop, marginBottom: props.marginBottom }]}>
                            <Text style={styles.Submittext} >Submit</Text>
                        </Pressable>
                    </View>
                    <Text style={{ textAlign: "center", marginTop: 20 }}>
                        Joined us before?{' '}
                        <Text
                            onPress={() => {
                                props.navigation.navigate('login')
                            }}>
                            <Text style={{ color: "#5C9145" }}>Login</Text>
                        </Text>
                    </Text>
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>:
                <View  style={styles.container}>
                    <View style={styles.backgroundimg}>
                        <Image style={styles.img} source={require("../assets/images/Mobile-login-pana-1.png")} />
                    </View>
                    <View style={{ marginTop: '-25%' }}>
                        <Text style={styles.Heading}>Sign Up</Text>
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
                            <MaterialCommunityIcons name={'account-circle-outline'}
                                size={26}
                                color="#837B7B"
                                marginRight={100}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={name}
                                onChangeText={(name) => setName(name)}
                                placeholder="Full Name "
                                secureTextEntry={false}
                            // keyboardType="numeric"
                            />

                        </View>
                        <View style={{ flexDirection: "row" }}>
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
                                placeholder="Mobile"
                                secureTextEntry={false}
                                keyboardType="numeric"
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
                    <View style={{ width: '100%', marginTop: 30 }}>
                        <Text style={styles.ptext}>
                            By signing up, You’re agree to our{' '}
                            <Text style={styles.termbtn}

                                onPress={() => {
                                    props.navigation.navigate('Privacy_Policy')
                                }}>Terms & Conditions
                            </Text>{' '}and
                            <Text style={styles.termbtn}
                                onPress={() => {
                                    props.navigation.navigate('Privacy_Policy')
                                }}> {' '}Privacy Policy
                            </Text>
                        </Text>
                    </View>
                    <View style={styles.btnArea}>
                        <Pressable onPress={addUserHandler} style={[styles.btnSubmitt, { marginTop: props.marginTop, marginBottom: props.marginBottom }]}>
                            <Text style={styles.Submittext} >Create an account</Text>
                        </Pressable>
                    </View>
                    <Text style={{ textAlign: "center", marginTop: 20 }}>
                        Joined us before?{' '}
                        <Text
                            onPress={() => {
                                props.navigation.navigate('login')
                            }}>
                            <Text style={{ color: "#5C9145" }}>Login</Text>
                        </Text>
                    </Text>
                    {isloading && <View  style={ styles.loading}>
                        <ActivityIndicator  size="large" color="#5C9145" animating={isloading}/>
                    </View>}
                </View>}
            </View>
        </ScrollView>
    );
}
export default Signup;
const styles = StyleSheet.create({
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
    container: {
        // flex: 3,
        marginBottom: 390,
        // marginTop: 10,
    },
    backgroundimg: {
        alignItems: "center", justifyContent: "center",
        // marginBottom:10
        marginTop: "-15%",
        marginBottom: "15%",
    },
    img: {
        width: "90%", height: "60%",
    },
    Heading: {
        marginTop: -25,
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
        position: 'absolute',
        right: "10%",
        top: "60%"
    },
    btnArea: {
        marginTop: 20,
        // marginBottom:40,
        justifyContent: "center",
        alignItems: "center",
    },
    btnSubmitt: {
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
    ptext: {
        color: "#837B7B",
        fontSize: 12,
        textAlign: "center"

    },
    termbtn: {
        color: "#5C9145",
        fontSize: 12,
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