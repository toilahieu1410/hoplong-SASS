import React from 'react';
import {View, Text, FlatList, Image,StyleSheet} from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import {
    width,
    height,
    widthScale,
    heightScale,
    moderateScale,
  } from '../../../publics/js/size';
  import * as Animatable from 'react-native-animatable';
const TongQuan = ({tongquan}) => {
    return (
        <FlatList
            data={tongquan}
            renderItem={({item, index}) => (
              
              <Animatable.View style={styles.contain} animation="fadeInDown"
                duration={200} easing="ease-out" iterationDelay={2}>
                    <Image style={styles.image} source={{uri: item}}/>
                </Animatable.View>
            )}
        />
    )
};
const styles = StyleSheet.create({
    content: {
       position:'relative',
       maxHeight:moderateScale(350),
       backgroundColor:'#fff',
       padding:5,
      },
    image: {
      height:'100%',
      width:moderateScale(350),
      alignSelf:'center',
      textAlign:'center',
      justifyContent:'center',
      resizeMode:'cover',
      alignContent:'center',
      alignItems:'center',
    }
  });
export default TongQuan;