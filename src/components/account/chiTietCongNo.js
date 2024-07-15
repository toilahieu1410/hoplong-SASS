import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Header from '../../components/header/header';
import {getChiTietCongNo} from '../../redux/account/action';
import DatePicker from '../../components/header/datePicker';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import Nodata from '../header/noData';

const ChiTietCongNo = ({navigation}) => {
  const dispatch = useDispatch();
  const detailCongNo = useSelector(store => store.account.detailCongNo);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    dispatch(getChiTietCongNo(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <SafeAreaView style={{flex:1,}}>
      <Header onPress={() => navigation.goBack()} title={'Chi tiết công nợ'} />
      <View style={styles.datePicker}>
        <DatePicker
          onPress={text => setStartDate(text)}
          maxDate={new Date()}
          style={styles.datepicker}
        />
        <Text style={styles.space}>-</Text>
        <DatePicker
          onPress={text => setEndDate(text)}
          maxDate={new Date()}
          style={styles.datepicker}
        />
      </View>
      {detailCongNo === null ? (
        <View style={styles.center}>
            <Nodata title='Không có dữ liệu công nợ!'/>
        </View>
    
      ) : (
          <ScrollView style={styles.scroll}>
            <FlatList
              data={detailCongNo}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <View  style={styles.list1} >
                    <View style={styles.row}>
                    <View style={styles.flex}>
                    <Text style={styles.title}>Ngày hóa đơn: </Text>
                    <Text style={styles.content}>{item.NGAY_HOA_DON}</Text>
                  </View>
                  <View style={styles.flex}>
                    <Text style={styles.title}>Hạn thanh toán: </Text>
                    <Text style={styles.content}>{item.HAN_THANH_TOAN}</Text>
                  </View>
                    </View>
               
                  {/* <View style={styles.flex}>
                    <Text style={styles.title}>Số hóa đơn: </Text>
                    <Text style={styles.content}>{item.SO_HOA_DON_THUC_TE}</Text>
                  </View>
                  <View style={styles.flex}>
                    <Text style={styles.title}>Số chứng từ: </Text>
                    <Text style={styles.content}>{item.SO_CHUNG_TU}</Text>
                  </View>
                  <View style={styles.flex}>
                    <Text style={styles.title}>Loại chứng từ: </Text>
                    <Text style={styles.content}>{item.LOAI_CHUNG_TU}</Text>
                  </View> */}
                  <View style={styles.row}>
                  <View style={styles.flex}>
                    <Text style={styles.title}>Chưa thanh toán: </Text>
                    <Text style={styles.content}>{`${item.SO_TIEN_CHUA_THANH_TOAN.toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>
                  </View>
         
                  <View style={[styles.flex,{textAlign:'left',justifyContent:'flex-start',alignSelf:'flex-start'}]}>
                    <Text style={styles.title}>Đã thanh toán: </Text>
                    <Text style={styles.content}>{`${item.SO_TIEN_DA_THANH_TOAN.toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>
                  </View>
                  </View>
                  <View style={styles.flex}>
                    <Text style={styles.title}>Tổng tiền: </Text>
                    <Text style={styles.content}>{`${item.TONG_TIEN.toString()
                      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>
                  </View>
                
                  </View >
                </View>
              )}
            />
          </ScrollView>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    backgroundColor: '#EEEEEE',
    // marginBottom: moderateScale(20),
    borderRadius: 5,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    justifyContent: 'space-between',
  },
  scroll: {
    height: heightScale(550),
  },
  row: {
    flexDirection:'row',
    // justifyContent:'space-between',
    marginVertical:moderateScale(5),
    textAlign:'left',
    
  },
  center: {
    flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100%',
    alignItems:'center',
    textAlignVertical:'center',
  
  },

  list1: {
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: moderateScale(10),
    borderRadius: 5,
  },
  flex: {
    flexDirection: 'column',
    justifyContent:'space-between',
    marginHorizontal:10,
    width:'50%'
  },
  title: {
    fontSize: 16,
    color:'#888',
  
  },
  content: {
    fontSize: 16,
    flexShrink: 1,
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  space: {
    color: '#000',
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
  },
});
export default ChiTietCongNo;
