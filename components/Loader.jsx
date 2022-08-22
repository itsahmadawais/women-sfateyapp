import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loader(props) {
  const loader = props.loader;
  if (!loader) {
    return (
      <>
      </>
    )
  }
  return (
    <View>
      {
        loader && <View style={style.loading}>
          <ActivityIndicator size="large" color="#5C9145" />
        </View>
      }
    </View>
  )
}

const style = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});