
import React,{useState} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Text,TextInput,Pressable,TouchableOpacity,StyleSheet,View} from 'react-native';
const Mainbtn=(props)=>{
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    return(<>
    <View style={styles.btnArea}>
<Pressable onPress={props.callParentFunction} style={[styles.btnSubmitt , { marginTop: props.marginTop,marginBottom:props.marginBottom }]}>
    <Text style={styles.Submittext} >{props.name}</Text>
</Pressable>
</View>
    </>
    )
}
export default Mainbtn;
const styles=StyleSheet.create({
    btnArea: {
        // marginTop: 40,
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
})