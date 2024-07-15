import React from 'react';
import {View, Text, FlatList, Image,StyleSheet} from 'react-native';
import {
    width,
    height,
    widthScale,
    heightScale,
    moderateScale,
  } from '../../../publics/js/size';
const AnhThucTe = ({images}) => {
    return (
        <FlatList
            data={images}
            renderItem={({item, index}) => (
                <View>
                    <Image style={styles.image} source={{uri: item}}/>
                </View>
            )}
        />
    )
};
const styles = StyleSheet.create({
    image: {
      height:moderateScale(360),
      width:'100%',
      textAlign:'center',
      justifyContent:'center',
    }
  });
export default AnhThucTe;