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
const ProductVertical = ({data, navigation}) => {
  // console.log(data)
  const dispatch = useDispatch();
  const listProducts = useSelector(store => store.categories.listProducts);

  const [perPage, setPerPage] = useState(20);

  useEffect(() => {
    const params = Object.assign(data, {per_page: perPage})
    dispatch(
      getProducts(params),
    );
  }, [data, perPage]);

  return (
    <View>
      {listProducts.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View style={styles.productImg}>
          
          <FlatList
            data={listProducts.data}
            numColumns={2}
            contentContainerStyle={{flexDirection: 'column'}}
            renderItem={({item, index}) => (
              <TouchableOpacity style={styles.containerProduct} onPress={() =>
                navigation.navigate('DetailProduct', {
                  data: {sku: item.sku, slug: item.slug},
                })
              } style={styles.list}>
                <View style={{position: 'relative'}}>
                  <Image source={{uri: item.thumb}} style={styles.image} />
                </View>
                <View>
                  <View style={styles.flex}>
                    <Text
                 
                      style={styles.title}>
                      {item.sku}
                    </Text>

                    {/* <Text style={[styles.content,{fontSize:16,color:'#004C8A'}]}>
                      {item.brand ? item.brand.name : ''}
                    </Text> */}
                  </View>

                  <Text numberOfLines={1} style={[styles.content, {width: moderateScale(172)}]}>
                    {item.name}
                  </Text>

                  {/* <View style={{flexDirection: 'row'}}>
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
                <TouchableOpacity>
            <Text onPress={() => setPerPage(perPage + 20)} style={styles.center}>Xem thêm </Text>
          </TouchableOpacity>
    </View>
  );
};

export default ProductVertical;
const styles = StyleSheet.create({
  containerProduct: {
    marginTop: 10,
    marginHorizontal: 10,
    marginRight: 10,
    flexDirection: 'row',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#004C8A',
    maxWidth:moderateScale(190),
  
  },
  list: {
    padding: 10,
    width:'49%',
    flexShrink:1,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor:'#fff'
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
    width: '100%',
    height: moderateScale(170),
    resizeMode:'contain',
    borderRadius: 5,
    borderColor: '#ccc',
  },
  productImg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  products: {
    color:'#555',
    margin:10,
    marginBottom:0
  },
  center: {
    fontSize: 14,
    textAlign: 'center',
    padding: 5,
    color: '#004C8A',
    fontStyle: 'italic',
  },
});
