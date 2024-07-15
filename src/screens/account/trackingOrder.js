import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/header/header';

const TrackingOrder = ({navigation, route}) => {
  const data = route.params.data;
  // console.log(data)
  return (
    <SafeAreaView>
      <Header 
        onPress={() => navigation.goBack()}
        title={'Tracking Order'}/>
    </SafeAreaView>
  );
};

export default TrackingOrder;
