import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import AwarenessTouchable from "./AwarenesTouchable";
const AwarenesCmp = (props) => {
    var navigation=props.navigation
    const [Product, SetProduct] = useState();
    const getBlogApi = async () => {
        const response = await fetch('https://womansafetyapp.herokuapp.com/api/v1/blog');
        const data = await response.json();
        var productData = data.data;
        SetProduct(productData);
    }
     useEffect(() => {
        setTimeout(()=>{
            getBlogApi();
        },1000)
        }, []);
        console.log("artical",Product);
    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View style={styles.h1_view}>
                        <Text style={styles.h1Text}>Awareness</Text>
                    </View>
                    {Product?Product.map((item,index)=>{
                        {/* console.log("itemnum",item) */}
                        return(
                    <View style={styles.toucable_main_view1}>
                        <AwarenessTouchable image={require("../assets/images/Rectangle-13.png")}
                            Text={item.content}
                            navigation={navigation}
                        />
                    
                        {/* <AwarenessTouchable image={require("../assets/images/Rectangl-38.png")}
                            Text="legislation to tackle acid attack and burn case section 428."
                            navigation={navigation}
                        /> */}
                        </View>
                        )
                    }):<Text></Text>}
                        {/* <View style={styles.toucable_main_view2}>
                        <AwarenessTouchable image={require("../assets/images/Rectangle-13.png")}
                            Text="The Protection against Harassment of Women at the Workplace Act 2010"
                            navigation={navigation}
                        />
                        <AwarenessTouchable image={require("../assets/images/Rectangle-13.png")}
                            Text="The Protection against Harassment of Women at the Workplace Act 2010"
                            navigation={navigation}
                        />

                    </View> */}
                </View>
            </View>
        </View>
    );
}
export default AwarenesCmp;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        marginHorizontal: 25
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
    toucable_main_view1: {
        flexDirection: "row",
        marginTop: 280,
        justifyContent: "space-between"
    },
    toucable_main_view2: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between"
    },

})