import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from '../../components/header/header';
import LoadingScreen from '../loading/index';
import {getCategories} from '../../redux/categories/action';
import Item from '../../components/categories/item'

const Categories = ({navigation}) => {
  const dispatch = useDispatch();
  const listCategories = useSelector(store => store.categories.listCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      <Header title={'Danh mục sản phẩm'} />
      {listCategories.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View style={styles.container}>
          <FlatList
            data={listCategories}
            renderItem={({item, index}) => (
              <Item item={item} navigation={navigation}/>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Categories;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
