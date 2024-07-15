import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Platform,
  Keyboard,
  Image,
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import DeviceInfo from 'react-native-device-info';
import Icon from 'react-native-vector-icons/Ionicons';
import {getApiLogin} from '../../redux/auth/action';
import { Button } from 'native-base';
import Google from '../../assets/icon/google.png';
import Facebook from '../../assets/icon/facebook.png';
import messaging from '@react-native-firebase/messaging';

const random = (Math.random()).toString();

const SignIn = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [devicesName, setDevicesName] = useState(random);
  const [showPass, setShowPass] = useState(true);
  const [fcmToken, setFcmToken] = useState('');

  

  // DeviceInfo.getMacAddress().then((mac) => {
  //   setDevicesName(mac);
  // })

  const getToken = async () => {
    const token = await messaging().getToken();
    setFcmToken(token);
  };

  useEffect(() => {
    getToken();
  }, [])

  
  const login = () => {
    console.log(fcmToken)
    dispatch(getApiLogin(username, password, devicesName, fcmToken))
  };

  return (
    <View style={styles.picture}>
      <View>
        <KeyboardAvoidingView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formLogin}>
            <View style={styles.header}>
              <Text style={styles.title}>Đăng nhập</Text>
              <Text style={styles.title2}>Đăng nhập để tiếp tục</Text>
            </View>
              <View style={styles.content}>
                <View >
                  <Text style={styles.title2}>Tên đăng nhập</Text>
                  <TextInput
                    label="username"
                    mode="outlined"
                    value={username}
                    style={[styles.textInput,{fontWeight:'bold'}]}
                    theme={{colors: {primary: 'blue'}}}
                    onChangeText={text => setUsername(text)}
                    placeholder={'username'}
                    placeholderTextColor={'#ccc'}
                  />
                </View>
                <View>
                <Text style={styles.title2}>Mật khẩu</Text>
                  <TextInput
                    placeholderTextColor="#000"
                    label="password"
                    mode="outlined"
                    value={password}
                    style={styles.textInput}
                    theme={{colors: {primary: 'blue'}}}
                    onChangeText={text => setPassword(text)}
                    placeholder={'password'}
                    placeholderTextColor={'#ccc'}
                    underlineColorAndroid="transparent"
                    secureTextEntry={showPass}
                  />
                  <TouchableOpacity
                    style={styles.btnEye}
                    onPress={() => setShowPass(!showPass)}>
                      {showPass ? (  <Icon
                      name={'ios-eye-outline'}
                      size={24}
                      color={'#000'}
                    />) : (  <Icon
                      name={'ios-eye-off-outline'}
                      size={24}
                      color={'#000'}
                    />)}
                  
                  </TouchableOpacity>
                </View>
                <Text style={styles.textPassword}>Quên mật khẩu?</Text>
                <View style={styles.login} opacity={1}>
                  <TouchableOpacity
                    mode="contained"
                    style={styles.btnLogin}
                    onPress={() => login()}>
                    <Text style={styles.textLogin}>Đăng nhập</Text>
                  </TouchableOpacity>
                </View>
                {isLoggedIn === false ? (
                    <Text style={styles.warning}>Tài khoản hoặc mật khẩu không đúng!</Text>
                  ) : (
                    <Text></Text>
                  )}
                <Text style={styles.textOR}>-OR-</Text>
                <View style={styles.application}>
                    <Button style={styles.button}>
                      <Image source={Facebook} style={styles.image}/>
                        <Text style={[styles.title2,{marginTop:0}]}>Facebook</Text>
                    </Button>
                    <Button style={styles.button}>
                    <Image source={Google} style={styles.image}/>
                    <Text style={[styles.title2,{marginTop:0}]}>Google</Text>
                    </Button>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    margin: 15,
    padding: 15,
  },
  opacity: {
    borderWidth: 1,
    backgroundColor: '#282f3aad',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize:22,
    fontWeight:'bold'
  },
  image: {
    width:moderateScale(20),
    height:moderateScale(20),
    marginRight:moderateScale(10)
  },
  title2: {
    fontSize:16,
    marginTop:10,
    color:'#444'
  },
  content: {
    marginTop: 0,
    margin: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 8.25,
    shadowRadius: 3.84,
    elevation: 6,
    shadowColor: Platform.OS === 'ios' ? ('#ccc') : ('#bbb'),
  },
  textPassword: {
    textAlign:'right',
    color:'#048AD1',
  },
  formLogin: {
    marginTop: moderateScale(120),
    top: -40,
    flex: 1,
    justifyContent: 'center',
  },
  inputIcon: {
    fontSize: moderateScale(25),
    position: 'absolute',
    top: moderateScale(10),
    left: moderateScale(50),
  },
  textInput: {
    height: height * 0.075,
    fontSize: moderateScale(16),
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    color: '#000',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnEye: {
    position: 'absolute',
    top: moderateScale(40),
    right: moderateScale(10),
    color: 'red',
  },
  login: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLogin: {
    width: width - widthScale(50),
    height: heightScale(40),
    borderRadius: 5,
    marginTop:40,
    backgroundColor: '#048AD1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogin: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  textOR: {
    color:'#444',
    marginVertical:30,
    textAlign:'center',
    fontWeight:'bold',
    letterSpacing:2,
    fontSize:20,
  },
  application: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button: {
    backgroundColor:'transparent',
    borderColor:'#d5d5d5',
    width: widthScale(150),
    borderRadius:5,
    borderWidth:1,
    elevation: 0,
    justifyContent:'center',
    flexDirection:'row'
  },
  warning: {
    color: 'red',
    textAlign: 'center',
    marginTop: moderateScale(10),
    fontSize: moderateScale(14)
  }
});
