import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ButtonArea from "../components/Skipnextbtn";
import ImageArea from "../components/Background";
function OnlincomplainScreen({navigation}) {
    
    return (
        // <Container>
        <LinearGradient style={styles.gradient} colors={['#C6DD83', '#FFFFFF']}>
            <SafeAreaView style={styles.screen}>
                <ImageArea background={require("../assets/images/complain-image-1.png")}/> 
                <ButtonArea navigation={navigation} headingData="Online Complain" btntext="Next" subheading="We Provide Facilities to Women
                        to Complain Online" navigate="complain_2"/>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default OnlincomplainScreen;
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
 
   


})