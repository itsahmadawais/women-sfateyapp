
import React from "react";
import { Text, TouchableOpacity,Image, StyleSheet, } from 'react-native';
const AwarenessTouchable = (props) => {
    return (<>
        <TouchableOpacity style={styles.tochable_sub_view} >
            <Image style={styles.toucable_img} source={props.image} />
            <Text style={styles.tochable_text}>
            {props.Text}
            </Text>
        </TouchableOpacity>
    </>
    )
}
export default AwarenessTouchable;
const styles = StyleSheet.create({
    tochable_sub_view:{
        paddingHorizontal:10,
        paddingVertical:10,
        alignItems:"center",
        justifyContent:"center",
        width:"47%",
        borderWidth:1,
        borderColor:"#CDDD87",
        borderRadius:19,
        height:"auto",
        shadowColor:"#5C9145",
        shadowOpacity:1,
        shadowOffset:2
    },
    toucable_img:{
        height:70,
        width:120
    },
    tochable_text:{
        color:"#68974A",
        fontSize:12,
        fontWeight:"600",
    },
})