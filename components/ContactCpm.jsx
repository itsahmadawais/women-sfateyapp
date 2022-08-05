import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View, Pressable, StyleSheet, Modal, Alert,
    StatusBar, SafeAreaView, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Image
} from 'react-native';
import Circles from "./Circlebackground";
import Profilebtn from "./Profilebtn";
import BottomTabs from "./BottomTabs";
const ContactCpm = ({navigation}) => {
    const [Show, setShow] = useState(true);
    const [Visible, setVisible] = useState(true);
    const [Fname, setFname] = useState();
    const [Lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contacts,setContacts]=useState([])
    useEffect(() => {
        const getData = async ()=>{
            const data = await fetch('http://womansafetyapp.herokuapp.com/api/v1/contacts',{
            method:'GET',
			// body:JSON.stringify(data),
			headers:{
                'Content-Type':'application/json',
				'Accept':'application/json'
			}
		    });
            var result = data.json()
            result = data.contacts
            setContacts(result)
            console.log(result)
        }
        getData()
    }, [])
   
    return (
        <View style={styles.screen}>
            <View style={styles.main_view}>
                <View style={styles.container}>
                    <Circles />
                    <View>
                        <Text style={styles.h1Text}>Contact list</Text>
                    </View>
                    <View style={styles.search_view}>
                    <View style={styles.input_view}>
                    <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={password}
                                onChangeText={(password)=>setPassword(password)}
                                placeholder="Search Contact "
                                secureTextEntry={Visible}
                            // keyboardType="numeric"
                            />
                            <TouchableOpacity style={styles.btneye} onPress={() => {
                                setVisible(!Visible)
                                setShow(!Show)
                            }}>
                                <MaterialCommunityIcons name={'search-web'}
                                    size={26}
                                    color="#837B7B"
                                    // marginRight={60}
                                />
                            </TouchableOpacity>
                            </View>
                    </View>
                    <View>
                    <FlatList
        data={contacts}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
                    </View>
                        <Pressable onPress={()=>navigation.navigate('new_contact')} style={styles.add_btn}>
                            <MaterialCommunityIcons name="plus"
                                color="white"
                                size={36}
                            />
                        </Pressable>
                </View>
            </View>
        </View>
    );
}
export default ContactCpm;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    main_view: {
        width: "100%",
        backgroundColor: "#FFFFF",
    },
    container: {
    },
    h1Text: {
        color: "#000000",
        fontSize: 36,
        fontWeight: "700",
        position: "absolute",
        left: 90,
        top: 90,
    },
    search_view:{        
        width:"100%",
       marginTop:"45%",
      
      
    },
    input_view:{
        height:45,
        marginHorizontal:32,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        flexDirection:"row",
        backgroundColor:"#FFFFFF",
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2
    },
    input: {
        width: "80%",
        fontSize: 14,
    },
  
    add_btn:{
        position: "absolute",
        top: 595,
        left: 290,
        backgroundColor:"#5C9145",
        height:55,
        width:55,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    }

    
})