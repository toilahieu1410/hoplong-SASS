import React from 'react';
import {View, Text, StyleSheet, Image,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LogoHL from '../../assets/icon/logoHl_white.png';
import * as Animatable from 'react-native-animatable';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
const Splash = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.viewStyles}
      colors={['#03609A', '#033460', '#031031']}>
        <View>
        <Animatable.Image animation="bounceIn" duration={1000} source={LogoHL} style={styles.logo} />
        </View>
    </LinearGradient>
  );
};

export default Splash;
const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: widthScale(150),
    height: heightScale(100),
  },
});
