import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text
} from 'react-native';
import {Button} from 'native-base';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import Header from '../../components/header/header';

const ThietLapTaiKhoan = ({navigation, route}) => {
  const data = route.params.data;
  const arrayAccount = [];
  arrayAccount.push(data.customer)
  return (
    <SafeAreaView>
      <Header
        onPress={() => navigation.goBack()}
        title={'Thiết lập tài khoản'}
      />
      <View>
        <FlatList
          data={arrayAccount}
          renderItem={({item, index}) => (
            <View>
              <View style={styles.card}>
                <Text style={styles.text}>Tên</Text>
                <Text style={styles.text}>{item.name}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>Email</Text>
                <Text style={styles.text}>{item.email}</Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.text}>Phone</Text>
                <Text style={styles.text}>{item.phone}</Text>
              </View>
              <View>
                <Button style={styles.button}>
                  <Text style={styles.textButton}>Đổi mật khẩu</Text>
                </Button>
              </View>
            </View>
            
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ThietLapTaiKhoan;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: moderateScale(20),
    borderRadius: 10,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent:'space-between'
  },
  text: {
    fontSize: moderateScale(16)
  },
  button: {
    alignSelf: 'center',
    width: widthScale(150),
    height: heightScale(30),
    borderRadius: 50,
    justifyContent: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: moderateScale(16)
  }
})
