import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/header/header';
import Timeline from 'react-native-timeline-flatlist';


const Thongbao = ({navigation}) => {
  const data = [
    {
      time: '09:00',
      title: 'Event 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
        circleColor: '#ccc',
        lineColor: '#ccc',
    },
    {
      time: '10:45',
      title: 'Event 2',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
        circleColor: '#ccc',
        lineColor: '#ccc',
    },
    {
      time: '12:00',
      title: 'Event 3',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '14:00',
      title: 'Event 4',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
    {
      time: '16:30',
      title: 'Event 5',
      description:
        'Lorem Ipsum is simply dummy text of the printing.',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} title={'Thông báo'} />
      <View style={styles.container}>
      <Text>TESTTT</Text>
      <Timeline data={data} />
    
      </View>
  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})

export default Thongbao;
