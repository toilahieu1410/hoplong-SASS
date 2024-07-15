import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Text,
  Image,
} from 'react-native';
import {Button, Radio} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/header/header';
import {getMembers} from '../../redux/account/action';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import IconMember from '../../assets/icon/10.png';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
const ThanhVien = ({navigation}) => {
  const dispatch = useDispatch();
  const listMembers = useSelector(store => store.account.listMembers);
  useEffect(() => {
    dispatch(getMembers());
  }, []);
  // console.log(listMembers)
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Thành viên'} />
      <ScrollView>
        <View>
          <FlatList
            data={listMembers}
            renderItem={({item, index}) => (
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                <IconFont name="check-circle-o" size={24} color="#1566D5"/>
                
                  <View style={styles.left}>
                    <View style={styles.flex}>
                    <Icon name={"ios-people-circle-outline"} size={24} color="#1566D5"/>
                    <Text style={styles.item}>{item.name}</Text>
                    </View>
                    <View style={styles.flex}>
                    <Icon name={"ios-mail"} size={24} color="#1566D5"/>
                    <Text style={styles.item}>{item.email}</Text>
                    </View>
                    <View style={styles.flex}>
                    <Icon name={"ios-call"} size={24} color="#1566D5"/>
                    <Text style={styles.item}>{item.phone}</Text>
                    </View>
                    <View style={styles.flex}>
                    <Icon name={"ios-person-circle"} size={24} color="#1566D5"/>
                    <Text style={styles.item}>{item.role}</Text>
                    </View>
                    
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: moderateScale(10),
    borderRadius: 5,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginRight:moderateScale(10)
  },
  left: {
    marginLeft:20,
  },
  item: {
    fontSize: moderateScale(15),
    flexShrink: 1,
    flexWrap:'wrap',
    marginLeft:moderateScale(10)
  }
});
export default ThanhVien;
