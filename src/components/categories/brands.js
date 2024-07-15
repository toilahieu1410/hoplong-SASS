import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header/header';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import Products from './product';
import ProductsVertical from './productVertical';
import { Icon as IconHead} from 'native-base';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base';
const Brands = ({route, navigation, onPress, title, icon, action}) => {
  const data = route.params.data;
  const categoryId = route.params.categoryId
  const category = {
    category_id: categoryId
  }

  const dataProduct = Object.assign(category, data);
  const [showList, setShowList] = useState(false);
  return (
    <ScrollView>
      <Appbar.Header style={styles.header}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.inputSearch}>
       
        <TouchableOpacity  style={styles.buttonSearch} onPress={() => navigation.navigate('SearchProduct')}>
          <Text style={{color:'#777'}}>Tìm sản phẩm</Text>
        </TouchableOpacity>
        <IconHead size={20} name="ios-search" style={styles.icon} />
          </View>
        <View onPress={action} style={styles.view}>
          <View style={styles.button}>
            <View>
            <TouchableOpacity
                    style={styles.btnEye}
                    onPress={() => setShowList(!showList)}>
                      {showList ? (  <Icon
                      name={'ios-list-outline'}
                  
                      size={22}
                      color={'#000'}
                    />) : (  <Icon
                      
                      name={'ios-grid-outline'}
                      size={22}
                      color={'#000'}
                    />)}
                  
                  </TouchableOpacity>
            </View>
            <Button
            style={styles.buttonFilter}
              onPress={() =>
                navigation.navigate('Filter', {
                  categoryId: categoryId,
                })
              }>
              <Text style={styles.filter}>Filter</Text>
            </Button>
          </View>
        </View>
      </Appbar.Header>
      <View></View>
      {showList ? (  <ProductsVertical data={dataProduct} navigation={navigation} />) : (    <Products data={dataProduct} navigation={navigation}/>)}
  
    </ScrollView>
  );
};

export default Brands;
const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#fff',
    minHeight: heightScale(35),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    shadowColor: 'transparent',
    elevation: 0,
    flexDirection:'row',
    alignItems:'center'
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    backgroundColor: '#fff',
    left:moderateScale(-30),
    height: moderateScale(40),
    borderRadius: 5,
    paddingLeft: 20,
  },
  buttonSearch: {
    backgroundColor:'#fff',
    width: '100%',
    borderRadius:5,
    padding:10,
  },
  view: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  icon: {
    color: '#1566D5',
    fontSize: moderateScale(22),
    position:'absolute',
    right:moderateScale(10),
  },
  textInput: {
    height: height * 0.075,
    fontSize: moderateScale(16),
    paddingRight:moderateScale(20),
    color: '#000', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#1566D5',
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
  },
  flex: {
    flexDirection: 'row',
  },
  containerButton: {
    flexDirection: 'row',
  },
  buttonFilter: {
    backgroundColor:'transparent',
    elevation:0,
    textAlign:'right',
    justifyContent:'flex-end',
    left:moderateScale(15)
  },
  filter: {
    color: '#1566D5',
    fontSize: moderateScale(14),
  },
  textBrand: {
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 5,
    borderColor: '#ccc',
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  buttonText1: {
    color: '#fff',
  },
  buttonText2: {
    color: '#fff',
  },
  listView: {
    flexDirection: 'row',
  },
  border: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
    minHeight: heightScale(40),
  },
  button: {
    width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'flex-start',
    left:moderateScale(-15)
  },
  button1: {
    marginRight: 5,
    backgroundColor: '#2962b1',
    height: moderateScale(30),
    padding: 5,
    elevation: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});
