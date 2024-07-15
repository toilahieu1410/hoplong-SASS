import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image,TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/categories/action';
import LoadingScreen from '../../screens/loading/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
const Products = ({data, navigation}) => {
  const dispatch = useDispatch();
  const listProducts = useSelector(store => store.categories.listProducts);

  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    const params = Object.assign(data, {per_page: perPage})
    dispatch(
      getProducts(params),
    );
  }, [data, perPage]);
  // console.log(listProducts)

  return (
    <View>
      {listProducts.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View style={styles.backgroundColor}>
          <Text style={styles.products}>Có {listProducts.total} sản phẩm</Text>
          <FlatList
            data={listProducts.data}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.containerProduct} onPress={() =>
                navigation.navigate('DetailProduct', {
                  data: {sku: item.sku, slug: item.slug},
                })
              }>
                <View style={{position: 'relative'}}>
                  <Image source={{uri: item.thumb}} style={styles.image} />
                </View>
                <View>
                  <View style={styles.flex}>
                    <Text
                 
                      style={styles.title}>
                      {item.sku}
                    </Text>
                    <Text>&nbsp;&nbsp;</Text>
                    <Icon name="ios-remove-outline" size={12} />
                    <Text>&nbsp;&nbsp;</Text>
                    <Text style={[styles.content,{fontSize:16,color:'#004C8A'}]}>
                      {item.brand ? item.brand.name : ''}
                    </Text>
                  </View>

                  <Text style={[styles.content, {width: moderateScale(250)}]}>
                    {item.name}
                  </Text>
{/* 
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.content}>Giá list: </Text>
                    <Text style={styles.content}>
                      {item.list_price_text}
                    </Text>
                  </View> */}
                  
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.content}>Giá: </Text>
                    {item.price_text.indexOf('Liên hệ') === 0 ? (<Text style={[styles.content,{color:'#ff6666',fontWeight:'700'}]}>{item.price_text}</Text>) : (<Text style={[styles.content,{color:'#ff6666',fontWeight:'700'}]}>{item.price_text} đ</Text>)}
                    
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      <View style={styles.position}> 
      <TouchableOpacity style={styles.position}>
            <Text onPress={() => setPerPage(perPage + 20)} style={styles.center}>Xem thêm </Text>
          </TouchableOpacity>
      </View>
         
    </View>
  );
};

export default Products;
const styles = StyleSheet.create({
  containerProduct: {
    padding:10,
    flexDirection: 'row',
    backgroundColor:'#fff',
    marginVertical:5,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#004C8A',
    maxWidth:moderateScale(190),
    flexShrink:1,
  },
  position: {
    
    
    padding:moderateScale(5),
    top:moderateScale(-5)
  },
  products: {
    color:'#555',
    margin:10,
    marginBottom:0
  },
  content: {
    fontSize: 14,
    flexShrink: 1,
  },
  loading: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: '50%',
    color: '#888',
    alignSelf: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  image: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 10,
    borderColor: '#efefef',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: moderateScale(10),
  },
  center: {
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    color: '#004C8A',
    fontStyle: 'italic',
  },
});
