import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Text
} from 'react-native';
import { Input } from 'react-native-elements';
import {Picker, Form, Icon, Button} from 'native-base';
import Header from '../../components/header/header';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';

const PhanHoi = ({navigation}) => {
  const dispatch = useDispatch();
  const [chuDe, setChuDe] = useState('dongGopYKien');
  const [hoTen, setHoTen] = useState('');
  const [sdt, setSDT] = useState('');
  const [email, setEmail] = useState('');
  const [noiDung, setNoiDung] = useState('');
  return (
    <KeyboardAvoidingView>
      <Header onPress={() => navigation.goBack()} title={'Phản hồi'} />
      <View style={styles.m15}>
      <View>
        <View style={styles.picker}>
          <Form   style={[styles.input,{flex:1,}]}>
            
            <Picker
              mode="dropdown"
              iosHeader="Chủ đề"
              iosIcon={<Icon name="ios-chevron-down" />}
              selectedValue={chuDe}
              onValueChange={setChuDe}>
              <Picker.Item label="Đóng góp ý kiến" value='dongGopYKien'/>
              <Picker.Item label="Vấn đề về giao diện" value='vanDeGiaoDien'/>
              <Picker.Item label="Hiệu suất ứng dụng" value='hieuSuatUngDung'/>
              <Picker.Item label="Khác" value='khac'/>
            </Picker>
          </Form>
        </View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Họ và tên"
          maxLength={99}
          onChangeText={setHoTen}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          maxLength={99}
          onChangeText={setSDT}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          maxLength={99}
          onChangeText={setEmail}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Nội dung"
          maxLength={500}
         
          onChangeText={setNoiDung}
          multiline={true}
          underlineColorAndroid="transparent"
        />
           <Text style={styles.TextStyle}> { noiDung.length.toString()}/500 </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => console.log('thanh cong')}
          style={styles.button}>
          <Text style={styles.textButton}>Gửi phản hồi</Text>
        </Button>
      </View>
      </View>
  
    </KeyboardAvoidingView>
  );
};

export default PhanHoi;
const styles = StyleSheet.create({
  picker: {
   
    width: '100%',
    height: moderateScale(55),
    flexShrink: 1,
    fontSize: moderateScale(20),
    borderRadius:10,
  },
  m15: {
    margin:15,
  },
  TextStyle: {
    textAlign:'right',
    color:'#555',
    fontSize:16,
  },
  input: {
    alignContent:'center',
    alignSelf:'center',
    paddingLeft:15,
    borderRadius:5,
    borderColor: '#E6EaEE',
    borderWidth: 1,
    flexShrink: 1,
    width: '100%',
    fontSize: moderateScale(16),
    marginBottom:10,
    height:heightScale(35)
    
  },
  buttonContainer: {
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: moderateScale(30)
  },
  button: {
    width: widthScale(300),
    height: heightScale(30),
    borderRadius: 5,
    backgroundColor: '#004C8A',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    fontSize: moderateScale(16)
  }
});
