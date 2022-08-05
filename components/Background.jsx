import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const ImageArea=(props)=>{
    var background=props.background
    return(
        <View style={{ flex: 3 }}>
<View style={styles.backgroundimg}>
<Image style={styles.img} source={props.background} />

</View>
</View>

)
}
export default ImageArea;
const styles=StyleSheet.create({
    backgroundimg:{
        alignItems: "center", justifyContent: "center",
    },
    img:{
        width: "60%", height: "46%", marginTop: 249, marginBottom: 305
    }
})