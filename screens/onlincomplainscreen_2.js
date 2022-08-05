import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ButtonArea from "../components/Skipnextbtn";
import ImageArea from "../components/Background";
function OnlincomplainScreen_2({navigation}) {
    // alert(navigation)
  
    return (
        // <Container>
        <LinearGradient style={styles.gradient} colors={['#C6DD83', '#FFFFFF']}>
            <SafeAreaView style={styles.screen}>
                <ImageArea background={require("../assets/images/video-chat-1.png")}/>
                <ButtonArea navigation={navigation} headingData="Call and Live Chat "
                 subheading="You Can Call or Live Chat With The Government Legal For Quick Help" btntext="Next" navigate={"complain_3"} />   
            </SafeAreaView>
        </LinearGradient>
    )
}
export default OnlincomplainScreen_2;
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
        marginRight: 73,
        marginLeft: 73
    },

    p: {
        color: "#000000",
        textAlign: "center",
        fontSize: 14,
        fontWeight: "500",
        // fontFamily:'Poppins',
        marginRight: 70,
        marginLeft: 70
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