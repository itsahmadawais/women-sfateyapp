
import * as React from 'react';
import { View, Text, Pressable,StyleSheet} from 'react-native';
import ProfileScreen from '../screens/Profile';
import DashBoard from '../components/DashBoard';
import ContactScreen from '../screens/ContactScreen';
import AwarnessScreen from '../screens/Awerness';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';
const Tab = createMaterialBottomTabNavigator();
// const tabarray=[{route:"Home", lable:'Home',icon:'home',component:'DashBoard'}]
const  HomeScreen=()=> {
  return (
    <Tab.Navigator 
    
     initialRouteName="Home"
    activeColor="#FBE62496"
    inactiveColor="red"
    barStyle={{ backgroundColor: '#FFFFFF', }}>
     <Tab.Screen
        name="DashBoard" 
        component={DashBoard}
        options={{
          tabBarLabel:false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color="#837B7B" size={26} />
          ),
        }}
      />
      <Tab.Screen name="contact" component={ContactScreen}

       options={{
        // tabBarColor:"#FBE62496",
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="phone-in-talk-outline" color="#837B7B" size={26} />
          ),}}
       />
      {/* <Tab.Screen name="profil" component={AwarnessScreen}

       options={{
        // tabBarColor:"#FBE62496",
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" color="#837B7B" size={26} />
          ),}}
       /> */}
      <Tab.Screen name="AwarnessScreen" component={AwarnessScreen}

       options={{
        // tabBarColor:"#FBE62496",
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='information'  color="#837B7B" size={26} />
          ),
          }}
       />
       <Tab.Screen name="profile" component={ProfileScreen}

       options={{
        // tabBarColor:"#FBE62496",
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle-outline" color="#837B7B" size={26} />
          ),}}
       />
    </Tab.Navigator>
  );
}
export default HomeScreen;
const style=StyleSheet.create({
  screen:{
    flex:1
  }
})