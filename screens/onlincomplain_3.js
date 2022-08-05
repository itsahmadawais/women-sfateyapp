import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ButtonArea from "../components/Skipnextbtn";
import ImageArea from "../components/Background";
function OnlincomplainScreen_3({navigation}) {
    return (
        // <Container>
        <LinearGradient style={styles.gradient} colors={['#C6DD83', '#FFFFFF']}>
            <SafeAreaView style={styles.screen}>
                <ImageArea background={require("../assets/images/contact-list-1.png")}/>
                <ButtonArea navigation={navigation} headingData="Add Multiple Contacts "
                 subheading="We Provide You Contact List Where You Can Add Multiple Contacts"  navigate="login" btntext="Get Started"/>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default OnlincomplainScreen_3;
const styles = StyleSheet.create({
    screen: {

        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    gradient: {
        flex: 1
    },
    container: {

        alignItems: "center",
    },
    heaading: {
        color: "#000000",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "700",
        // fontFamily:'Poppins',
        marginRight: 70,
        marginLeft: 70
    },

    p: {
        color: "#000000",
        textAlign: "center",

        fontSize: 14,
        fontWeight: "500",
        // fontFamily:'Poppins',
        marginRight: 73,
        marginLeft: 73
    },
    button: {
        marginTop:60,
        flex:1,
         width: "100%",
      flexDirection: "row",
      padding: 20,
      justifyContent: "space-between",
      alignItems: "center",
    },
    skipbtn: {
        // flex: 1,
        width:32,
        alignItems: "center",
        justifyContent: "center",
    },
    nextbtn: {
        // flex: 1,
        flexDirection:"row",
        width:142,
        height:34,
        borderBottomLeftRadius:23,
        borderBottomRightRadius:0,
        borderTopLeftRadius:0,
        borderTopRightRadius:23,
        backgroundColor:"#5C9145",
        alignItems: "center",
        justifyContent: "center",
    },
    skiptext:{
        fontWeight:"500",
        fontSize:15,
        color:"#5C9145"
    },
    nexttext:{
        fontWeight:"500",
        fontSize:15,
        color:"#fff",
    }
   


})