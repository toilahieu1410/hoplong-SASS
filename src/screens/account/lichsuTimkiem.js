import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/header/header';

const LichsuTimkiem = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Lịch sử tìm kiếm'} />
    </SafeAreaView>
  );
};

export default LichsuTimkiem;
