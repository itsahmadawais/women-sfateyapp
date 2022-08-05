import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Bottomtabs/BottomNavigator';
import OnlincomplainScreen from './screens/onlinecomplain_1';
import OnlincomplainScreen_2 from './screens/onlincomplainscreen_2';
import OnlincomplainScreen_3 from './screens/onlincomplain_3';
import LoginScreen from './screens/Login';
import Signupscreen from './screens/Signup';
import ForgetPassscreen from './screens/ForgetPass';
import ResetPassscreen from './screens/ResetPass';
// import Dashboardscreen from './screens/Dashboard';
// import ProfileScreen from './screens/Profile';
import SettingScreen from './screens/Setting';
import NewContactScreen from './screens/Addnewcontact';
import EditProfileScreen from './screens/EditProfile';
import ChangePassScreen from './screens/ChangePass';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';
import AwarnessScreen from './screens/Awerness';
import OTPScreen from './screens/OTP';
import React,{useEffect,useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LiveChatWidget from './screens/LiveChatWidget';

export default function App() {
  var isLoggedIn
  var is_first_time
  
const getData = async () => {
     isLoggedIn = await AsyncStorage.getItem('isLoggedIn') ?? false
     is_first_time = await AsyncStorage.getItem('is_first_time') ?? true
 
  }
  useEffect(()=>{
    getData();
},[])

const Stack = createNativeStackNavigator();
  return (<>
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName = {is_first_time===true ? (isLoggedIn===true ? "Home" : "Login") : "complain"}
       screenOptions={{
        headerShown:false,
        // title:''
    
  }}>
        <Stack.Screen name="complain" component={OnlincomplainScreen}/>
        <Stack.Screen name="complain_2" component={OnlincomplainScreen_2}/>
        <Stack.Screen name="complain_3" component={OnlincomplainScreen_3}/>
        <Stack.Screen  name="Forget" component={ForgetPassscreen}/>
        <Stack.Screen name="login" component={LoginScreen}/>
        <Stack.Screen name="OTP" component={OTPScreen}/>
        <Stack.Screen name="Signup" component={Signupscreen}/>
        <Stack.Screen  name="Reset" component={ResetPassscreen}/> 
        <Stack.Screen name="Home" component={HomeScreen}/> 
        {/* <Stack.Screen  name="Dashboard" component={Dashboardscreen}/> */}
        <Stack.Screen name="Setting" component={SettingScreen}/>  
        {/* <Stack.Screen  name="profile" component={ProfileScreen}/>  */}
       <Stack.Screen name="new_contact" component={NewContactScreen}/> 
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}/> 
        <Stack.Screen name="ChangePassScreen" component={ChangePassScreen}/> 
        <Stack.Screen name="Privacy_Policy" component={PrivacyPolicyScreen}/>
        <Stack.Screen name="LiveChat" component={LiveChatWidget}/>
       {/* <Stack.Screen name="Aware" component={AwarnessScreen}/>  */}
      </Stack.Navigator>
    
        
     
    </NavigationContainer></>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
