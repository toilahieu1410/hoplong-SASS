import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {List, Button, Provider, TextInput} from 'react-native-paper';
import Header from '../../components/header/header';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import Icon from 'react-native-vector-icons/Ionicons';

const CauHoi = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.backgroundColor}>
      <Header
        onPress={() => navigation.goBack()}
        title={'Câu hỏi thường gặp'}
      />
      <View style={styles.body}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.flex} onPress={() => setShow(!show)}>
            <View style={styles.flexCenter}>
              <Text style={styles.textTitle}>
                Ứng dụng Hợp Long Tech là gì ?
              </Text>
            </View>
            {show ? (
              <Icon name="ios-chevron-up" size={22} style={styles.right} />
            ) : (
              <Icon name="ios-chevron-down" size={22} style={styles.right} />
            )}
          </TouchableOpacity>
        </View>
        {show ? (
          <List.Section style={{backgroundColor: '#EBEEF3', padding: 10,top:-10}}>
            <List.Item
              titleStyle={{
                color: '#555',
                fontSize: 15,
                flexShrink: 1,
                left: -15,
               
              }}
              left={0}
              titleNumberOfLines={200}
              title={
                <Text style={styles.detail}>
                  'Đây là ứng dung dành cho người dùng dịch vụ của Hợp Long Tech
                  và có nhu cầu xem các giao dịch thanh toán ( hoàn tiền)'
                </Text>
              }
            />
          </List.Section>
        ) : (
          <View></View>
        )}
      </View>
      <View style={[styles.body,]}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.flex} onPress={() => setShow(!show)}>
            <View style={styles.flexCenter}>
              <Text style={styles.textTitle}>
                Ứng dụng Hợp Long Tech là gì ?
              </Text>
            </View>
            {show ? (
              <Icon name="ios-chevron-up" size={22} style={styles.right} />
            ) : (
              <Icon name="ios-chevron-down" size={22} style={styles.right} />
            )}
          </TouchableOpacity>
        </View>
        {show ? (
          <List.Section style={{backgroundColor: '#EBEEF3', padding: 10,top:-10}}>
            <List.Item
              titleStyle={{
                color: '#555',
                fontSize: 15,
                flexShrink: 1,
                left: -15,
              }}
              left={0}
              titleNumberOfLines={200}
              title={
                <Text>
                  'Đây là ứng dung dành cho người dùng dịch vụ của Hợp Long Tech
                  và có nhu cầu xem các giao dịch thanh toán ( hoàn tiền)'
                </Text>
              }
            />
          </List.Section>
        ) : (
          <View></View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CauHoi;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor: {
    backgroundColor: '#fff',
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  content: {
    padding: 10,
    backgroundColor: '#F6F7Fb',
  },
  body: {
    borderBottomColor: '#E6EaEE',
    borderRadius: 5,
  },
  right: {
    textAlign: 'right',
    color: '#ccc',
  },
  textTitle: {
    fontSize: 16,
    color: '#444',
  },
  detail: {
    color: '#727B8D',
    borderColor: '#E6EaEE',
    borderWidth: 1,
    
  },
});
