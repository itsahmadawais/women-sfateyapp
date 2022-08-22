import React, { useEffect, useState } from 'react';
import {View,Text, ScrollView} from 'react-native';
import ContactListItem from './ContactListItem';

import instance from './axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContactList({contacts}) {
  
  return (
    <>
        <ScrollView>
            {
              contacts.map((item)=>{
                return (
                  <ContactListItem key={item.id} contact={item}/>
                );
              })
            }
        </ScrollView>
    </>
  )
}
