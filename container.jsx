import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const Container=({children})=>{
    return <LinearGradient style={styles.gradient} colors={["180deg", "#C6DD83 0%", "#FFFFFF 100%"]}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>

    </LinearGradient>
    
}
export default Container;
const styles=StyleSheet.create({
    gradient:{
        flex:1
    },
    container:{
        flex:1,
        marginHorizontal:15
    }
})