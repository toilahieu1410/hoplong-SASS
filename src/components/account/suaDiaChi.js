import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, View, TextInput, StyleSheet, Text} from 'react-native';
import Header from '../header/header';
import { Button } from 'native-base';
import {
    width,
    height,
    widthScale,
    heightScale,
    moderateScale,
  } from '../../publics/js/size';

const SuaDiaChi = ({navigation, route}) => {
    const data = route.params.data;
    // console.log(data)
    const dispatch = useDispatch();
    const [hoTen, setHoTen] = useState(data.name);
    const [sdt, setSDT] = useState(data.phone);
    const [diaChi, setDiaChi] = useState(data.address);
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Sửa địa chỉ'} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          maxLength={99}
          value={hoTen}
          onChangeText={setHoTen}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          maxLength={99}
          value={sdt}
          onChangeText={setSDT}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Địa chỉ"
          maxLength={99}
          value={diaChi}
          onChangeText={setDiaChi}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.buttonContainer}>
          <Button style={styles.button}>
              <Text style={styles.textButton}>Lưu</Text>
          </Button>
      </View>
    </SafeAreaView>
  );
};
export default SuaDiaChi;
const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexShrink: 1,
        width: '100%',
        fontSize: moderateScale(16),
      },
    buttonContainer: {
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(30)
    },
    button: {
        width: moderateScale(300),
        height: moderateScale(40),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: moderateScale(16)
    }
})
