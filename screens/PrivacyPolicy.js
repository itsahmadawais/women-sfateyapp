import React from "react";
import PrivacyPolicyCmp from "../components/PrivacyPolicyCmp";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, ScrollView, FlatList, Image
} from 'react-native';
const PrivacyPolicyScreen=({navigation})=>{
return(<>
       <SafeAreaView>
         <PrivacyPolicyCmp navigation={navigation}/>
       </SafeAreaView>
</>)
}
export default PrivacyPolicyScreen;
