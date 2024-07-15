import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {View, StyleSheet, SafeAreaView, Text,} from 'react-native';
import {Title} from 'react-native-paper';
import Header from '../../components/header/header';
import Speedometer from 'react-native-speedometer-chart';
import {getCongNo} from '../../redux/account/action';
import LoadingScreen from '../loading/index';

const CongNo = ({navigation}) => {
  const dispatch = useDispatch();
  const listCongNo = useSelector((store) => store.account.listCongNo);
  useEffect(() => {
    dispatch(getCongNo());
  }, []);
console.log(listCongNo.SO_NO_TOI_DA)
  return (
    <SafeAreaView>
      <Header onPress={() => navigation.goBack()} title={'Công Nợ'} />
      {listCongNo.length === 0 || listCongNo === null ? (
        <LoadingScreen/>
      ) : (
      <View>
        <View style={styles.chart}>
          <Speedometer
            value={listCongNo.SO_DU_DEN_HAN}
            totalValue={listCongNo.SO_NO_TOI_DA}
            size={250}
            outerColor="#d3d3d3"
            internalColor="#ff0000"
            showText
            text={listCongNo.SO_NO_TOI_DA !== undefined ? (<Text>{`${listCongNo.SO_NO_TOI_DA.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>) : (<Text></Text>)}
              
            textStyle={{color: 'green'}}
            showLabels
            labelStyle={{color: 'blue'}}
            labelFormatter={number => number!== undefined ? (<Text>{`${number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>) : (<Text></Text>)}
            showPercent
            percentStyle={{color: 'red'}}
          />
        </View>
        <View style={styles.m10}>
          {/* <Text style={[styles.text,{left:10,top:10}]}>Credit Factors</Text> */}
          <View style={styles.flex}>
          <View style={[styles.card,{borderLeftColor:'#ff6600'}]}>
              {/* <Title style={styles.title}>{`${listCongNo.SO_NO_TOI_DA.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Title> */}

              <Title style={styles.title}>{listCongNo.SO_NO_TOI_DA !== undefined ? (<Text>{`${listCongNo.SO_NO_TOI_DA.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>) : (<Text></Text>)}</Title>

              <Text style={styles.text}>Hạn mức</Text>
          </View>
          <View style={[styles.card,{borderLeftColor:'#4472C4'}]}>
         
              <Title style={styles.title}>{((listCongNo.SO_DU_DEN_HAN * 100) / listCongNo.SO_NO_TOI_DA).toFixed(1)}%</Title>
              <Text style={styles.text}>Tỷ lệ</Text>
          </View>
          </View>
          <View style={styles.flex}>
          <View style={[styles.card,{borderLeftColor:'#F77866'}]}>
              <Title style={styles.title}>{`${listCongNo.SO_PHAT_SINH_DEN_HAN} ngày`}</Title>
              <Text style={styles.text}>Số đơn đến hạn</Text>
          </View>
          <View style={[styles.card,{borderLeftColor:'#70AD47'}]}>
              <Title style={styles.title}>{`${listCongNo.SO_PHAT_SINH_QUA_HAN} ngày`}</Title>
              <Text style={styles.text}>Số đơn quá hạn</Text>
          </View>
          </View>
          <View style={styles.flex}>
          <View style={[styles.card,{borderLeftColor:'#FFC000'}]}>
              <Title style={styles.title}>{listCongNo.SO_DU_DAU_KY_NO !== undefined ? (<Text>{`${listCongNo.SO_DU_DAU_KY_NO.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>) : (<Text></Text>)}</Title>
              <Text style={styles.text}>Số dư nợ đầu kỳ</Text>
          </View>
          <View style={[styles.card,{borderLeftColor:'#70AD47'}]}>
              <Title style={styles.title}>{listCongNo.SO_DU_QUA_HAN !== undefined ? (<Text>{`${listCongNo.SO_DU_QUA_HAN.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')} đ`}</Text>) : (<Text></Text>)}</Title>
              <Text style={styles.text}>Số dư nợ đến hạn</Text>
          </View>
          </View>
          <View style={styles.title}>
          <Text style={styles.textTitle} onPress={() => navigation.navigate('ChiTietCongNo')}>Chi tiết công nợ</Text>
        </View>
        </View>
      </View>
      )}
    </SafeAreaView>
  );
};

export default CongNo;
const styles = StyleSheet.create({
  title: {
      alignItems: 'center',
      textAlign:'center',
      marginBottom: 20
  },
  textTitle: {
    fontSize: 20,
    marginTop:20,
    textAlign:'center',
    color: '#4472C4'
  },
  m10: {
    margin:15,
  },
  card: {
    backgroundColor:'#E6EAEE',
    borderLeftColor:'red',
    borderLeftWidth:5,
    borderRadius:6,
    padding:10,
    width:'48%',
    marginTop:20
  },
  flex: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  chart: {
      alignItems: 'center'
  },
  title: {
    fontSize:18,
    fontWeight:'bold'
  },
  text: {
    fontSize:17,
    color:'#333'
  }
});
