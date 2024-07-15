import React from 'react';
import {ScrollView, View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconHistory from '../../assets/icon/13.png';
import IconPoint from '../../assets/icon/14.png';
import IconTracking from '../../assets/icon/15.png';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';

const Menu = ({navigation}) => {
  return (
      <View style={styles.title_task}>
        <Item image={IconTracking} title='Danh mục'/>
        <Item image={IconPoint} onPress={() => navigation.navigate('DonHang')}  title='Đơn hàng'/>
        <Item image={IconHistory} title='Tracking Order'/>
      </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  title_task: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent:'center',
    
  },
  flexTop: {
    alignItems:'center',
    alignContent:'center',
    
  },
  gradient: {
    width: moderateScale(50),
    height: moderateScale(50),
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: moderateScale(50),
  },
  iconImg: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: 30/2,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

const Item = ({image, onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.flexTop]}>
        <LinearGradient
          style={styles.gradient}
          colors={['#011739', '#0163AB']}>
          <Image
            source={image}
            style={styles.iconImg}
            resizeMode="contain"
          />
        </LinearGradient>
        <View>
          <Text
            style={{textAlign: 'center',flexShrink:1,width:moderateScale(80),fontSize:moderateScale(12)}}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
};
