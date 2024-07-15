import React from 'react';
import {TouchableOpacity, View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
const ButtonAccount = ({onPress, sourceImage, title}) => {
  return (
    <TouchableOpacity style={styles.flex} onPress={onPress}>
      <View style={styles.flexCenter}>
        <Image
          source={sourceImage}
          style={styles.iconLeft}
          resizeMode="contain"
        />
        <Text style={styles.colorText}>{title}</Text>
      </View>
      <Icon name="ios-chevron-forward" size={26} style={styles.right} />
    </TouchableOpacity>
  );
};

export default ButtonAccount;
const styles = StyleSheet.create({
    flex: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginHorizontal: 15,
      // borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      alignItems:'center'
    },
    flexCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    iconLeft: {
     
      height: heightScale(30),
      width: widthScale(30),

    },
    right: {
      textAlign: 'right',
      color: '#777',
    },
    colorText: {
      color: '#444',
      fontSize: 15,
      marginLeft:20
    },
  });