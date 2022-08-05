import React from "react";
import {Text,Pressable,StyleSheet,View} from 'react-native';
const Smallbtn=(props)=>{
    return(
        <Pressable onPress={props.callParent} style={styles.btn}>
        <Text style={styles.btn_text}>
       {props.name}
        </Text>
    </Pressable>
    )
}
export default Smallbtn;
const styles=StyleSheet.create({
    btn:{
        backgroundColor:"#5C9145",
        height:34,
        width:120,
        borderBottomLeftRadius:23,
        borderTopRightRadius:23,
        justifyContent:"center",
        alignItems:"center"
    },
    btn_text:{
        color:"#FFFFFF",
        fontSize:14,
        fontWeight:"400"
    },
})