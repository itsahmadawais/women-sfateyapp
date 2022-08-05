import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const ButtonArea = (props) => {
    return (
        <View style={{ flex: 1.5, }}>
            <View >
                <Text style={styles.heaading}>{props.headingData}</Text>
                <Text style={styles.p}>{props.subheading}</Text>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.skipbtn} onPress={() => { props.navigation.navigate('login') }}>
                    <Text style={styles.skiptext}>skip</Text></Pressable>
                <Pressable style={styles.nextbtn} onPress={() => { props.navigation.navigate(props.navigate) }}>
                    <Text style={styles.nexttext}>{props.btntext}
                    </Text>
                    <Image style={{ width: 42, marginLeft: 13 }} source={require("../assets/images/Arrow-1.png")} />
                </Pressable>
            </View>

        </View>
    )
}
export default ButtonArea;
const styles = StyleSheet.create({
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
        marginTop: 60,
        flex: 1,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    skipbtn: {
        // flex: 1,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    nextbtn: {
        // flex: 1,
        flexDirection: "row",
        width: 142,
        height: 34,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 23,
        backgroundColor: "#5C9145",
        alignItems: "center",
        justifyContent: "center",
    },
    skiptext: {
        fontWeight: "500",
        fontSize: 15,
        color: "#5C9145"
    },
    nexttext: {
        fontWeight: "500",
        fontSize: 15,
        color: "#fff",
    }
})