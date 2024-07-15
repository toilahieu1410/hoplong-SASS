import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../header/header';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,

  Image,
  ScrollView,
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../../publics/js/size';
import {getDetailDonHang} from '../../../redux/donHang/action';
import {FlatList} from 'react-native-gesture-handler';
import IconNote from '../../../assets/icon/bang_luong.png';
const ChiTietDonHang = ({navigation, route}) => {
  const dispatch = useDispatch();
  const id = route.params.data;
  const detailDonHang = useSelector(store => store.donHang.detailDonHang);
  useEffect(() => {
    dispatch(getDetailDonHang(id));
  }, [id]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EEEEEE'}}>
      <Header onPress={() => navigation.goBack()} title={'Chi tiết đơn hàng'} />
      {detailDonHang.length === 0 ? (
        <View></View>
      ) : (
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                source={IconNote}
                style={styles.imageIcon}
                resizeMode="stretch"
              />
              <View>
                <View style={styles.position}>
                  <Text style={styles.title}>Mã đơn hàng: </Text>
                  <Text style={styles.title}>{detailDonHang.tracking}</Text>
                </View>
                <View style={styles.position}>
                  <Text style={styles.content}>Ngày đặt hàng: </Text>
                  <Text style={styles.content}>{detailDonHang.created_at}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                source={IconNote}
                style={styles.imageIcon}
                resizeMode="stretch"
              />
              {detailDonHang.shipping_info ? (
                <View>
                <Text style={styles.title}>Địa chỉ người nhận</Text>
                <Text style={[styles.content, {color: '#222'}]}>
                  {detailDonHang.shipping_info.name}
                </Text>
                <Text style={styles.content}>
                  {detailDonHang.shipping_info.phone}
                </Text>
                <Text style={styles.content}>
                  {detailDonHang.shipping_info.address}
                </Text>
              </View>
              ) : (<View>
                <Text style={styles.title}>Địa chỉ người nhận</Text>
                <Text style={[styles.content, {color: '#222'}]}>
                  {/* {detailDonHang.shipping_info.name} */}
                </Text>
                <Text style={styles.content}>
                  {/* {detailDonHang.shipping_info.phone} */}
                </Text>
                <Text style={styles.content}>
                  {/* {detailDonHang.shipping_info.address} */}
                </Text>
              </View>)}
            </View>
          </View>
          <View style={styles.card}>
            <View style={styles.row}>
              <Image
                source={IconNote}
                style={styles.imageIcon}
                resizeMode="stretch"
              />
              <Text style={styles.title}>Thông tin kiện hàng</Text>
            </View>

            <FlatList
              data={detailDonHang.products}
              renderItem={({item, index}) => (
                <View style={{flexDirection: 'row', marginTop: 10}}>
                  <View>
                    <Image
                      style={styles.image}
                      source={{
                        uri: item.image,
                      }}
                   
                    />
                  </View>
                  <View>
                    <Text style={[styles.content, {color: '#222'}]}>
                      {item.sku}
                    </Text>
                    <Text style={[styles.title, {lineHeight: 35}]}>
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{''}đ
                      <Text style={{fontSize: 14, fontWeight: '700'}}>
                        {' '}
                        x {item.quantity}
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.content}>Tạm tính:</Text>
              <Text style={styles.number}>
                {detailDonHang.sub_total
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
                đ
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.content}>VAT:</Text>
              <Text style={styles.number}>
                {detailDonHang.vat_fee
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
                đ
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.content}>Phí vận chuyển:</Text>
              <Text style={styles.number}>
                +
                {detailDonHang.shipping_fee
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.content}>Ship cod:</Text>
              <Text style={styles.number}>
                +
                {detailDonHang.ship_cod_fee
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.content}>Số lần vận chuyển:</Text>
              <Text style={styles.number}>
                
                {detailDonHang.shipping_count
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} 
              </Text>
            </View>

            <View style={styles.rowBetween}>
              <Text style={styles.content}>Coupon:</Text>
              <Text style={styles.number}>
                
                {detailDonHang.coupon_reduce} 
              </Text>
            </View>

            <View style={styles.rowBetween}>
              <Text style={[styles.content,{color:'#000',fontWeight:"600"}]}>Thành tiền:</Text>
              <Text style={[styles.number,{fontWeight:'bold',fontSize:18}]}>
                 
                {detailDonHang.total
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ
              </Text>
            </View>
            {/* <Text>
              {' '}
              {detailDonHang.total
                .toString()
                .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
            </Text>
            <Text>Đã bao gồm VAT nếu có</Text> */}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default ChiTietDonHang;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
   paddingVertical:5,
  },
  position: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(90),
    marginRight: moderateScale(10),
    borderColor:'#ccc',
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius: 5,
  },
  imageIcon: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(15),
  },
  title: {
    fontSize: 18,
    color: '#000',
    lineHeight: 20,
  },
  content: {
    fontSize: 16,
    color: '#555',
    lineHeight: 25,
  },

  number: {
    fontSize: 16,
    color: '#000',
    lineHeight: 30,
  },
});
