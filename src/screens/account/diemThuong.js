import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/header/header';

const DiemThuong = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Điểm thưởng'} />
    </SafeAreaView>
  );
};

export default DiemThuong;
