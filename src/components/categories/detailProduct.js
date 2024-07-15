import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {getProductDetail} from '../../redux/categories/action';
import Header from '../../components/header/header';
import LoadingScreen from '../../screens/loading/index';
import {DeckSwiper, Card, CardItem} from 'native-base';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import {Button} from 'native-base';
import ThongSo from './detailProduct/thongSo';
import TongQuan from './detailProduct/tongQuan';
import KichThuoc from './detailProduct/kichThuoc';
import TaiLieu from './detailProduct/taiLieu';
import AnhThucTe from './detailProduct/anhThucTe';

const DetailProduct = ({route, navigation}) => {
  const dispatch = useDispatch();
  const data = route.params.data;
  const detailProduct = useSelector(store => store.categories.detailProduct);
  const [fields, setFields] = useState('*');
  const [withs, setWiths] = useState('*');
  const [showThongSo, setShowThongSo] = useState(true);
  const [showTongQuan, setShowTongQuan] = useState(true);
  const [showKichThuoc, setShowKichThuoc] = useState(true);
  const [showTaiLieu, setShowTaiLieu] = useState(true);
  const [showAnh, setShowAnh] = useState(true);
  useEffect(() => {
    dispatch(getProductDetail(data.sku, data.slug, fields, withs));
    return function cleanup(){
      
    }
  }, [data.sku, data.slug]);
 console.log(detailProduct)
  return (
    <ScrollView>
      <Header onPress={() => navigation.goBack()} title={'Chi tiết sản phẩm'} />
      {detailProduct.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View>
          <View style={styles.imageSlider}>
            {detailProduct.gallery ? (
              <DeckSwiper
                dataSource={detailProduct.gallery}
                renderItem={item => (
                  <Card style={styles.card}>
                    <CardItem cardBody>
                      <Image style={styles.image} source={{uri: item}} />
                    </CardItem>
                  </Card>
                )}
              />
            ) : (
              <View></View>
            )}
          </View>
          <View style={[styles.body]}>
            <View style={styles.thongtin}>
            <View style={styles.flexInfo}>
              <Text style={styles.content}>{detailProduct.sku}</Text>
            </View>

            <Text style={styles.titleProduct}>{detailProduct.name}</Text>
         
            <View style={styles.priceContainer}>
            {detailProduct.price_text.indexOf("Liên") != -1 ? (<Text style={styles.price}>{detailProduct.price_text}</Text>) : (<Text style={styles.price}>{detailProduct.price_text} đ</Text>)}
          
              <Text>&nbsp;&nbsp;</Text>
              {detailProduct.list_price_text.indexOf("Liên") != -1  ? (<Text></Text>) : (<Text style={styles.cost}>{detailProduct.list_price_text} đ</Text>)}
           
              <Text>&nbsp;&nbsp;&nbsp;</Text>
              {(
                  ((detailProduct.list_price - detailProduct.price) /
                    detailProduct.list_price) *
                  100
                ).toFixed(0) === 'NaN' ? (<Text></Text>) : (  <Text style={styles.percent}>
                  -
                  {(
                    ((detailProduct.list_price - detailProduct.price) /
                      detailProduct.list_price) *
                    100
                  ).toFixed(0)}
                  %
                </Text>)}
            </View>
            </View>
        
            <View style={styles.left}>
              <View style={styles.mb5}>
                <Button
                  onPress={() => setShowThongSo(!showThongSo)}
                  style={styles.button}>
                  <Text style={styles.titleCenter}>Thông số kỹ thuật</Text>
                </Button>
                {showThongSo ? (
                  <ThongSo thongSo={detailProduct.attributes} />
                ) : (
                  <View></View>
                )}
              </View>
              <View style={styles.mb5}>
                <Button
                  onPress={() => setShowTongQuan(!showTongQuan)}
                  style={styles.button}>
                  <Text style={styles.titleCenter}>Tổng quan</Text>
                </Button>
                {showTongQuan ? (
                  <TongQuan tongquan={detailProduct.overview_photo} />
                ) : (
                  <View></View>
                )}
              </View>
              <View style={styles.mb5}>
                <Button
                  onPress={() => setShowKichThuoc(!showKichThuoc)}
                  style={styles.button}>
                  <Text style={styles.titleCenter}>Kích thước</Text>
                </Button>
                {showKichThuoc ? <KichThuoc /> : <View></View>}
              </View>
              <View style={styles.mb5}>
                {/* <Button onPress={() => setShowTaiLieu(!showTaiLieu)}>
                    Tài liệu
                </Button>
                {showTaiLieu ? (<TaiLieu tailieu={detailProduct.documents}/>) : (<View></View>)} */}

                <Button
                  onPress={() => setShowAnh(!showAnh)}
                  style={styles.button}>
                  <Text style={styles.titleCenter}>Ảnh thực tế</Text>
                </Button>
                {showAnh ? (
                  <AnhThucTe images={detailProduct.actual_photo} />
                ) : (
                  <View></View>
                )}
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailProduct;
const styles = StyleSheet.create({
  body: {
    backgroundColor: '#efefef',
    // marginTop:moderateScale(355),
    paddingHorizontal: 10,
  },
  thongtin: {
    backgroundColor:'#fff',
    marginVertical:5,
    padding:10,
    paddingLeft:moderateScale(15)
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mb5: {
    marginBottom: moderateScale(5),
  },
  titleProduct: {
    fontSize: moderateScale(12),
    marginVertical:moderateScale(5),
    color: '#777',
  },
  title: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  left: {
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  titleCenter: {
    fontSize: moderateScale(16),
    justifyContent: 'flex-start',
    textAlign: 'left',
    paddingLeft: moderateScale(10),
  },
  button: {
    backgroundColor: '#fff',
    elevation: 0,
    width: '100%',
  },
  content: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  percent: {
    backgroundColor: '#ff3333',
    color: '#fff',
    paddingHorizontal: 5,
    fontSize: moderateScale(12),
    borderRadius: 5,
    fontWeight: 'bold',
  },
  price: {
    fontSize: moderateScale(15),
    flexShrink: 1,
    fontWeight: '700',
  },
  cost: {
    fontSize: moderateScale(15),
    textDecorationLine: 'line-through',
    alignItems:'center'
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageSlider: {
    height: moderateScale(350),
    width: '100%',
    textAlign: 'center',
    top: moderateScale(-3),
  },
  image: {
    height: moderateScale(350),
    width: moderateScale(350),
    alignSelf: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    resizeMode: 'stretch',
    alignContent: 'center',
    alignItems: 'center',
  },
});
