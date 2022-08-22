import React from "react";
import {Text,TextInput,Pressable,StyleSheet,View} from 'react-native';
const EditProfileinput=(props)=>{
    return(<>
        <Text>{props.Text}</Text>
        <View style={[styles.inputView, { backgroundColor: props.backgroundColor }]}>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            // onChangeText={onChangeNumber}
            value={props.defaultValue}
            placeholder={props.palceholder}
            defaultValue = {props.defaultValue?? ''}

        keyboardType={props.keyboardtype}
        />
    </View>
    </>
    )
}
export default EditProfileinput;
const styles=StyleSheet.create({
    inputView: {
        justifyContent: "center",
        // backgroundColor:"#CDDD8794",
        width:"100%",
        height:40,
        borderRadius:10,
        marginTop:"2%",
        marginBottom: "8%",
    },
    input: {
        fontSize: 14,
        marginLeft: 14,

    },
})