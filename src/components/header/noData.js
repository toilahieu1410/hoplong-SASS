import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NoDataImage from '../../assets/images/data_error.png';
import {
    width,
    height,
    widthScale,
    heightScale,
    moderateScale,
  } from '../../publics/js/size';

const NoData = ({title}) => {
  return (
    <View style={styles.dataError}>
      <Image source={NoDataImage} style={styles.imageError} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default NoData;
const styles = StyleSheet.create({
  dataError: {
    alignItems: 'center',

    alignContent: 'center',
   
  },
  imageError: {
    width: widthScale(120),
    height: heightScale(160),
    resizeMode: 'stretch',
  },
  text: {
    color: '#555',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});
