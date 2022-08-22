import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import AwarenessTouchable from "./AwarenesTouchable";
import Loader from "./Loader";

import instance from "./axios";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AwarenesCmp = (props) => {
    var navigation=props.navigation
    const [articles,setArticles]= useState([]);
    const [user,setUser]= useState([]);
    const [loader,setLoader] =useState(true);
    const getBlogApi = async () => {
        var user_data = await AsyncStorage.getItem('user');
        user_data = JSON.parse(user_data);
        setUser(user_data);
        instance.get('blogs',{
            headers:{
                'Authorization' : 'Bearer '+ user_data.access_token
            }
        }).then((response)=>{
            setArticles(response.data.blogs);
        })
    }
     useEffect(() => {
        setTimeout(()=>{
            getBlogApi();
        },1000)
        }, []);
    const navigationHandler = (item)=>{
        navigation.navigate("AwarenessSingle",{
            data: item
        });
    }
    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View style={styles.h1_view}>
                        <Text style={styles.h1Text}>Awareness</Text>
                    </View>
                    {articles?articles.map((item,index)=>{
                        {/* console.log("itemnum",item) */}
                        return(
                            <View style={styles.toucable_main_view1}>
                                <AwarenessTouchable image={item.photo}
                                    Text={item.title}
                                    navigation={navigation}
                                    navigationHandler={()=>navigationHandler(item)}
                                />
                            </View>
                        )
                    }):<Text></Text>}
                </View>
            </View>
            <Loader loader={loader}/>
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