import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {
    width,
    height,
    widthScale,
    heightScale,
    moderateScale,
  } from '../../../publics/js/size';
  import * as Animatable from 'react-native-animatable';
const ThongSo = ({thongSo}) => {
    // console.log(thongSo);
    return (
        <FlatList
            data={thongSo}
            renderItem={({item, index}) => (
                <Animatable.View style={styles.container} animation="fadeInDown"
                duration={200} easing="ease-out" >
                    <Text style={styles.title}>{item.attribute.name}</Text>
                    <Text style={styles.content}>{item.value}</Text>
                </Animatable.View>
            )}
        />
    )
};

export default ThongSo;
const styles = StyleSheet.create({
    container: {
        borderBottomWidth:1,
        borderBottomColor:'#efefef',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        padding:5,
        paddingHorizontal:10,
    },
    title: {
        fontSize:moderateScale(12),
        fontWeight:'700',
      
    },
    content: {
        fontSize:moderateScale(12),
        width:'50%',
    }
})