import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import Header from '../../components/header/header';
import ItemAttributes from './itemAttributes';
import {getBrands, getAttributes} from '../../redux/categories/action';
import MultiSelect from 'react-native-multiple-select';
import {heightScale, moderateScale, widthScale} from '../../publics/js/size';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
const Filter = ({navigation, route}) => {
  const categoryId = route.params.categoryId;
  const dispatch = useDispatch();
  const listBrands = useSelector(store => store.categories.listBrands);
  const listAttributes = useSelector(store => store.categories.listAttributes);
  const [brandIds, setBrandIds] = useState([]);
  const [attributes, setAttributes] = useState();
  const [perPage, setPerPage] = useState(50);
  const [page, setPage] = useState(1);
  const [fields, setFields] = useState('*');
  const [withs, setWiths] = useState('*');
  const [att, setAtt] = useState([]);

  const dataAttributes = {
    category_id: categoryId,
    brand_ids: brandIds,
  }
  useEffect(() => {
    dispatch(getBrands(categoryId, ));
  }, [categoryId]);

  useEffect(() => {
    dispatch(getAttributes(dataAttributes));
  }, [categoryId, brandIds]);

  const onSelectedItemsChange = index => {
    setBrandIds(index);
  };
  const data = {
    category_id: categoryId,
    brand_ids: brandIds,
    per_page: perPage,
    page: page,
    fields: fields,
    withs: withs
  }
  

const pushAttributes = (item) => {
  const index = att.indexOf(item);
  if(index === -1) {
    setAtt([...att, item]);
  } else {
    setAtt(att.filter(i => i != item))
  }
   };

const pushData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      for(let i = 0; i < att.length; i++) {
        let key = `attributes[${att[i].attribute_id}]`
        let obj = {
          [key]: [att[i].id]
        }
        const newData = Object.assign(data, obj);
        resolve(newData);
      }
    } catch (error) {
        reject(error);
    }
  })
};

const navigate = async() => {
  const data = await pushData();
  navigation.navigate('Brands', {
    categoryId: categoryId,
    data: data
  })
}
const readAll = async () => {
  await dispatch(getBrands());
  await dispatch(getAttributes());
  await dispatch(navigate());
};
  return (
    <ScrollView>
      
      <Header onPress={() => navigation.goBack()} title={'Filter'} submit={() => readAll()} />
      {/* <LinearGradient
       style={styles.color}
          colors={['#011739', '#0163AB']}>
                    <TouchableOpacity onPress={() => navigate()} style={styles.button}>
          <Icon name="ios-checkmark-circle-outline" size={24} color={'#fff'}/>
          <Text>&nbsp;</Text>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>
            </LinearGradient> */}
          
      <View style={styles.container}>
        <View style={{width: '100%',paddingHorizontal:10}}>
        
          <MultiSelect
            hideTags
            items={listBrands}
            uniqueKey="id"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={brandIds}
            selectText="Hãng"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            styleInputGroup={{height:moderateScale(40)}}
            styleTextDropdown={{color:'#1566D5',left:moderateScale(20),fontSize:moderateScale(16),height:moderateScale(25),top:moderateScale(5)}}
            styleTextDropdownSelected={{color:'#1566D5',left:moderateScale(15),fontSize:moderateScale(14),height:moderateScale(25),top:moderateScale(5)}}
            styleSelectorContainer={{color:'#1566D5',fontSize:moderateScale(14)}}
            selectedItemTextColor="#1566D5"
            selectedItemIconColor="#1566D5"
            itemTextColor="#222"
            displayKey="name"
            searchInputStyle={{color: '#CCC', width: '100%'}}
            submitButtonColor="#1566D5"
            submitButtonText="Submit"
          />
        </View>
  
        <View>
          <FlatList
            data={listAttributes}
            renderItem={({item, index}) => (
                <ItemAttributes data={item} onPress={pushAttributes}/>
            )}
          />
        </View>
 
      </View>
    </ScrollView>
  );
};

export default Filter;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  color: {
    textAlign:'center',
    padding:5,
    borderRadius:5,
  
  },
  button: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  text:{
    color:'#fff'
  }
});
