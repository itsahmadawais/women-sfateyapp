import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ContactListItem({contact}) {
    const makeCall = (number) => {
        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }
        Linking.openURL(phoneNumber);
    }
    return (
        <>
            <TouchableOpacity onPress={() => makeCall(contact.phone)}>
                <View style={styles.container}>
                    <Image style={styles.avatar} source={{uri: contact.profile_picture}} />
                    <View style={styles.contact}>
                        <Text style={styles.name}>{contact.name}</Text>
                        <Text style={styles.phone}>{contact.phone}</Text>
                    </View>
                    <MaterialCommunityIcons name='phone-in-talk-outline' color="#FFFFFF" size={40} style={styles.icon} />
                </View>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#A8B768',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    contact: {
        marginLeft: 20
    },
    name: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    phone: {
        fontSize: 15,
        color: '#FFFFFF'
    },
    icon: {
        marginLeft: 'auto'
    }
});