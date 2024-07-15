import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import {Button, Radio} from 'native-base';
import Header from '../../components/header/header';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import {
  getListDiaChi,
  getAddDiaChi,
  getDeleteDiaChi,
} from '../../redux/account/action';
import Icon from 'react-native-vector-icons/FontAwesome';
const DiaChi = ({navigation}) => {
  const dispatch = useDispatch();
  const listDiaChi = useSelector(store => store.account.listDiaChi);
  useEffect(() => {
    dispatch(getListDiaChi());
  }, []);
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Địa chỉ'} />
      <Text style={styles.title}>Giao hàng tới</Text>
      <ScrollView style={styles.scroll}>
        
        <View style={styles.card}>
          <FlatList
            data={listDiaChi}
            renderItem={({item, index}) => (
                <View style={styles.flex}>
                  <Icon name="check-circle-o" size={24} color="#1566D5"/>
                  
                  <View style={styles.content}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.sdt}>
                      <Text style={styles.cardText}>Số điện thoại:</Text>
                      <Text>&nbsp;&nbsp;</Text>
                      <Text style={styles.cardText}>{item.phone}</Text>
                    </View>
                    <View style={styles.diaChi}>
                      <Text style={styles.cardText}>Địa chỉ:</Text>
                      <Text>&nbsp;&nbsp;</Text>
                      <Text style={styles.cardTextContent}>{item.address}</Text>
                    </View>
                    <View>
                      {item.default === true ? (
                        <Text style={styles.default}>Địa chỉ mặc định</Text>
                      ) : (
                        <Text></Text>
                      )}
                    </View>
                    
                  </View>
                  <View style={styles.button}>
                      <Button
                        // onPress={() =>
                        //   navigation.navigate('SuaDiaChi', {data: item})
                        // }
                        style={styles.buttonEdit}>
                         <Icon name="edit" size={22} color={'#bbb'} style={styles.right} />
                      </Button>
                      <Button
                        // onPress={() =>
                        //   navigation.navigate('SuaDiaChi', {data: item})
                        // }
                        style={styles.buttonEdit}>
                         <Icon name="trash-o" size={22} color={'#bbb'} style={styles.right} />
                      </Button>
                    </View>
                </View>
              
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiaChi;
const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    marginLeft: moderateScale(20),
    fontSize: moderateScale(15),
  },
  scroll: {
    height: heightScale(550),
  },
  flex: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: moderateScale(20),
    borderRadius: 5,
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
  card: {
    margin: moderateScale(15),
  },
  default: {
    color:'#1566D5'
  },
  content: {
    marginLeft: moderateScale(20)
  },
  name: {
    fontWeight: 'bold',
    fontSize: moderateScale(15),
  },
  sdt: {
    flexDirection: 'row',

    marginTop: moderateScale(10),
  },
  button: {
    justifyContent:'center',
  
  },
  cardText: {
    fontSize: moderateScale(15),
    flexShrink: 1,
    flexWrap:'wrap'
  },
  cardTextContent: {
    fontSize: moderateScale(15),
    flexShrink: 1,
    width:widthScale(180)
  },
  diaChi: {
    flexDirection: 'row',

    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  buttonEdit: {
    width: moderateScale(40),
    height: moderateScale(40),
    backgroundColor:'transparent',
    color:'#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  elevation: 0,

  },
  textEdit: {
    color: '#ccc',
  },
});
