import React, {useEffect, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getListDonHang} from '../../../redux/donHang/action';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../../publics/js/size';
import Nodata from '../../header/noData';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
const Complete = ({navigation, number}) => {
  const dispatch = useDispatch();
  const listDonHang = useSelector(store => store.donHang.listDonHang);
  const [statusCode, setStatusCode] = useState('complete');
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    dispatch(getListDonHang(statusCode));
  }, [number]);
  //  console.log(listDonHang);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
    dispatch(getListDonHang(statusCode));
  }, [statusCode]);
  return (
    <View
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
    <View style={{flex:1,alignItems:'center'}}>
        {listDonHang.length === 0 ? (
          <View style={styles.status}>
             <Nodata title='Chưa có đơn hàng nào!' />
          </View>
        ) : (
          <FlatList
          data={listDonHang}
          renderItem={({item, index}) => (
            <View style={[styles.container, {marginTop: 10}]}>
              <View style={styles.mb}>
                <Text
                  style={styles.tracking}
                >
                  {item.tracking}
                </Text>
                <View style={styles.flex}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: item.first_product.image,
                    }}
                  />
                  {/* <Image
                      style={styles.image}
                      source={{
                          uri: item.first_product.image,
                        }}
                  
                    /> */}
                  <View style={styles.detail}>
                    <Text style={styles.title}>{item.name}</Text>

                    <Text style={styles.value}> {item.created_at}</Text>
                    <Text
                      style={[
                        styles.value,
                        {fontWeight: 'bold', color: '#004C8A'},
                      ]}>
                      {item.total
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
                      đ |{' '}
                      <Text style={[styles.value, {fontWeight: 'normal'}]}>
                        {item.products_sum_quantity} sản phẩm
                      </Text>
                    </Text>
                    <Text onPress={() => navigation.navigate('ChiTietDonHang', {data: item.id})} style={styles.viewDetail}>Xem chi tiết</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        )}
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  mb: {
    backgroundColor: '#fff',

    padding: 20,
  },
  flex: {
    flexDirection: 'row',
  },
  status: {
    alignItems:'center',
    textAlignVertical:'center',
    alignContent:'center',
    top:'50%',
    flexDirection:'row',
  },
  tracking: {
    color: '#004C8A',
    fontSize: 16,
    fontWeight: '700',
    borderBottomColor: '#ccc',
    paddingBottom: 15,
  
  },
  title: {
    fontSize: 16,
  },
  viewDetail: {
    color:'#004C8A',
    fontStyle:'italic',
    textAlign:'center',
    marginTop:8
  },
  value: {
    fontSize: 14,
    color: '#808080',
    marginTop: 5,
  },
  detail: {
    justifyContent: 'center',
    marginLeft: moderateScale(20),
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 5,
    borderColor:'#f5f5f5',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius: 5,
  },
});
export default Complete;
