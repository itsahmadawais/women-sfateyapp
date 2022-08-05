import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import SettingHeadingCmp from "./SettingHeadingCmp";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import Textarea from 'react-native-textarea';
var radio_props = [
    {   label: (
        <Text style={{color: '#000000',fontSize:10}}>{'Emergency Call police'}</Text>
      ),
    //   selected: true,
    //   color: '#FFFFFF',
      size: 10, value: 0 },
    {  label: (
        <Text style={{color: '#000000',fontSize:10,marginLeft:10}}>{'Send Message To Contact List'}</Text>
      ),
    //   selected: true,
    //   color: '#FFFFFF',
      size: 10, value: 1 }
];
const SettingCmp = (props) => {
    var navigation = props.navigation
    const [gesture,setGesture]=useState(1);
    const [radio, setRadio] = useState();
    const [textarea, setTeaxtarea] = useState();
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
                        <Text style={styles.h1Text}>Settings</Text>
                    </View>
                    <SettingHeadingCmp name="Gesture" marginTop={220} />
                    <View style={styles.gesture_Area}>
                        <View style={gesture==1 ? styles.selected_volum_View : styles.volum_View}>
                            <TouchableOpacity onPress={()=>setGesture(1)}>
                                <Text style={styles.h2_Text}>Volume Up</Text>
                                <Image style={{ marginVertical: 10 }} source={require('../assets/images/high-volume.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={gesture==2 ? styles.selected_volum_View : styles.volum_View}>
                            <TouchableOpacity onPress={()=>setGesture(2)}>
                                <Text style={styles.h2_doubletap}>Double Tap</Text>
                                <Text style={styles.h4_doubletap}>Rapidly touch surface
                                    twice with fingetip.</Text>
                                <MaterialCommunityIcons style={{ alignSelf: "flex-end", marginRight: 10 }} name='gesture-double-tap' size={28} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SettingHeadingCmp name="Actions" marginTop={15} />
                    <View style={styles.action_area}>
                        <View style={styles.btn_view1}>
                            <RadioForm
                            style={{width:"55%",marginRight:10}}
                                radio_props={radio_props}
                                initial={0}
                                formHorizontal={true}
                                buttonInnerColor={'#FBE624'}
                                buttonColor={'#000000'}
                                selectedButtonColor={"#FBE624"}
                                lablefontSize={10}
                                buttonSize={22}
                                buttonOuterSize={22}
                                radioStyle={{paddingRight: 40}}
                                onPress={(value) => setRadio({ value: value })}
                            />
                        </View>
                    </View>
                    {
                        radio.value!==undefined && radio.value == 0 ?
                        ()=>{
                            return(
                                <>
                                    <SettingHeadingCmp name="Emergency Message" marginTop={0} />
                                    <View style={styles.input_view}>
                                        <Textarea
                                            containerStyle={styles.input}
                                            // style={styles.input}
                                            value={textarea}
                                            onChangeText={(textarea) => setTeaxtarea(textarea)}
                                            maxLength={160}
                                            placeholder={'Enter your message here.'}
                                            placeholderTextColor={'#837B7B'}
                                            underlineColorAndroid={'transparent'}
                                        />
                                    </View>
                                </>
                            )
                        }
                    :
                    <></>
                    }
                    <Pressable style={styles.btn}>
                        <Text style={styles.btn_text}>Send</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
export default SettingCmp;
const styles = StyleSheet.create({
    screen: {
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        marginHorizontal: 25,
        paddingTop: 20
    },
    h1_view: {
        width: "60%",
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
    gesture_Area: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    volum_View: {
        alignItems: "center",
        height: 80,
        width: 130,
        borderWidth: 0,
        borderColor: "#5C9145",
        borderRadius: 15
    },
    selected_volum_View: {
        alignItems: "center",
        height: 80,
        width: 130,
        borderWidth: 1,
        borderColor: "#5C9145",
        borderRadius: 15
    },
    h2_Text: {
        color: "#5C9145",
        fontSize: 14,
        fontWeight: "700",
        justifyContent: "center",
        marginTop: 5
    },
    h2_doubletap: {
        marginTop: 5,
        color: "#000000",
        fontSize: 14,
        fontWeight: "700",
        justifyContent: "center"
    },
    h4_doubletap: {
        color: "#000000",
        fontSize: 10,
        fontWeight: "400",
        justifyContent: "center",
        marginHorizontal: 10
    },
    action_area: {
        alignItems: "center",
    },
    btn_view1: {
        height: 70,
        width:"90%",
        justifyContent:"center"
        // flex: 1.5
    },
  

    input_view: {
        marginTop: 15,
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#5C9145",
        borderRadius: 11,
        height: 90,
        padding: 5,
    },
    btn: {
        backgroundColor: "#5C9145",
        height: 34,
        width: 140,
        borderBottomLeftRadius: 23,
        borderTopRightRadius: 23,
        justifyContent: "center",
        alignItems: "center"
    },
    btn_text: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "400"
    },
})