import React,{useState} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Text,TextInput,Pressable,TouchableOpacity,StyleSheet,View} from 'react-native';
const ChangePassinput=(props)=>{
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    return(<>
        <Text>{props.Text}</Text>
        <View style={[styles.inputView, { backgroundColor: props.backgroundColor }]}>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder={props.palceholder}

        keyboardType={props.keyboardtype}
        />
         <TouchableOpacity style={styles.btneye} onPress={() => {
                        setVisible(!Visible)
                        setShow(!Show)
                    }}>
                        <MaterialCommunityIcons name={Show === false ? 'eye-outline' : 'eye-off-outline'}
                            size={26}
                            color="#837B7B"
                        />
                    </TouchableOpacity>
    </View>
    <Text style={styles.inputhint}>{props.inputhint}</Text>
   
    </>
    )
}
export default ChangePassinput;
const styles=StyleSheet.create({
    inputView: {
        justifyContent: "center",
        flexDirection:"row",
        backgroundColor: "#CDDD87",
        width:"100%",
        height:40,
        borderRadius:10,
        marginTop:"2%",
        justifyContent:"space-between"
    },
    input: {
        fontSize: 14,
        marginLeft: 14,

    },
    btneye: {
        // position: "absolute",
        right: "25%",
        justifyContent:"center",
    },
    inputhint:{
        marginBottom:"8%"
    },
})