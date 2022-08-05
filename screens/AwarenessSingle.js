import React from "react";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const AwarnesSingleScreen=({navigation})=>{
return(<>
            <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    {/* <Image source={}/> */}
                </View>
            </View>
        </View>
</>)
}
export default AwarnesSingleScreen;
const styles=StyleSheet.create({
    screen:{
        flex:1,
        marginTop: StatusBar.currentHeight || 0,

    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
        marginHorizontal: 25
    },
})