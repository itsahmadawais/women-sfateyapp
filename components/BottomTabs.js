import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
// import HomeScreen from './screens/Home';
const Tab = createMaterialBottomTabNavigator();
const BottomTabs=()=>{
    return(
        <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
    );
}
export default BottomTabs;
const styles=StyleSheet.create({

})