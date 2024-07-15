import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/header/header';
import {Tab, Tabs, ScrollableTab} from 'native-base';
import Pending from '../../components/account/donHang/pending';
import Processing from '../../components/account/donHang/processing';
import Shipping from '../../components/account/donHang/shipping';
import PrepareComplete from '../../components/account/donHang/prepareComplete';
import Complete from '../../components/account/donHang/complete';
import Calceled from '../../components/account/donHang/canceled';
import Expired from '../../components/account/donHang/expired';

const DonHang = ({navigation}) => {
  const [number, setNumber] = useState('');
    return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} title={'Đơn hàng'} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#1566D5',height: 2, }} renderTabBar={() => <ScrollableTab />} onChangeTab={() => setNumber(Math.random())}>
          <Tab heading="Chờ xác nhận"  activeTextStyle={{ color: '#1566D5',fontWeight:'bold', }} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <Pending navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Đang xử lý" activeTextStyle={{ color: '#1566D5',fontWeight:'bold' }} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }} >
            <Processing navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Đang giao" activeTextStyle={{ color: '#1566D5',fontWeight:'bold', }} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <Shipping navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Hoàn thành tại kho" activeTextStyle={{ color: '#1566D5', fontWeight:'bold',}} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <PrepareComplete navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Hoàn thành đơn" activeTextStyle={{ color: '#1566D5', fontWeight:'bold',}} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <Complete navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Hủy đơn" activeTextStyle={{ color: '#1566D5',fontWeight:'bold', }} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <Calceled navigation={navigation} number={number}/>
          </Tab>
          <Tab heading="Hết hạn" activeTextStyle={{ color: '#1566D5',fontWeight:'bold', }} textStyle={{ color: '#1566D5' }} tabStyle={{ backgroundColor: '#fff' }} activeTabStyle={{ backgroundColor: '#fff' }}>
            <Expired navigation={navigation} number={number}/>
          </Tab>
        </Tabs>
    </SafeAreaView>
  );
};

export default DonHang;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tab: {
     backgroundColor:'red'
    }
})
