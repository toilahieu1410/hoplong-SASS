import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default Loading;
const styles = StyleSheet.create({
    container: {
     
      height:height - moderateScale(55),
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: '#e5e5e5'
    },
    text: {
        marginTop: 10
    }
  });