import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StyleSheet, TextInput, FlatList, Image,TouchableOpacity} from 'react-native';
import {searchProduct} from '../../redux/categories/action';
import {Button, Appbar} from 'react-native-paper';
import {Icon as IconHead} from 'native-base';
import Header from '../../components/header/header';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import { ScrollView } from 'react-native-gesture-handler';

const SearchProduct = ({navigation}) => {
  const dispatch = useDispatch();
  const listProduct = useSelector(store => store.categories.searchProduct);
  const [key, setKey] = useState('');
  const [fields, setFields] = useState('*');
  const [withs, setWiths] = useState('*');
  useEffect(() => {
    dispatch(searchProduct(key, fields, withs));
  }, [key]);
  return (
    <View>
      <Appbar.Header style={styles.header}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.inputSearch}>
          <TextInput
            mode="outlined"
            style={[styles.textInput]}
            theme={{colors: {primary: 'blue'}}}
            onChangeText={text => setKey(text)}
            placeholder="Tìm kiếm sản phẩm"
            placeholderTextColor={'#ccc'}
          />
          <IconHead size={20} name="ios-search" style={styles.icon} />
        </View>
      </Appbar.Header>
      <ScrollView style={styles.scroll}>
        {listProduct.code == 200 ? (
          <View>
            <Text style={styles.productNumber}>{listProduct.message}</Text>
            <FlatList
              data={listProduct.data}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.containerProduct}  onPress={() =>
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
                      <Text style={[styles.content, {fontSize: 16,color:'#004C8A'}]}>
                        {item.brand ? item.brand.name : ''}
                      </Text>
                    </View>

                    <Text style={[styles.content, {width: moderateScale(250)}]}>
                      {item.name}
                    </Text>

                    {/* <View style={{flexDirection: 'row'}}>
                      <Text style={styles.content}>Giá list: </Text>
                      <Text style={styles.content}>{item.list_price_text}</Text>
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
        ) : (
          <View>
            <Text style={styles.productNumber}>Tìm được 0 sản phẩm</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchProduct;
const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    shadowColor: 'transparent',
    elevation: 0,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    borderRadius: 5,
    left: moderateScale(-20),
    backgroundColor: '#fff',
    paddingLeft: 20,
  },
  scroll: {
    maxHeight:heightScale(500)
  },
  textInput: {
    width: '100%',
    height:heightScale(30)
  },
  productNumber: {
    margin:10,
    marginBottom:0,
    textAlign:'left',
    fontSize:moderateScale(14),
    color: '#555',
  },
  containerProduct: {
    padding:10,
    flexDirection: 'row',
    backgroundColor:'#fff',
    marginVertical:5,
  },
  icon: {
    color: '#1566D5',
    position: 'absolute',
    fontSize: moderateScale(22),
    right:moderateScale(10),
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#004C8A',
    maxWidth: moderateScale(190),
    flexShrink: 1,
  },
  content: {
    fontSize: 14,
    flexShrink: 1,
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
});
