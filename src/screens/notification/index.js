import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView,Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/header/header';
import * as Animatable from 'react-native-animatable';
import {
  getNotification,
  updateNotification,
  updateAllNotification,
} from '../../redux/notification/action';
import HTML from 'react-native-render-html';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import LoadingScreen from '../loading/index';
import messaging from '@react-native-firebase/messaging';

const Notification = ({navigation}) => {
  const dispatch = useDispatch();
  const listNotification = useSelector(
    store => store.notification.listNotification,
  );
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getNotification(perPage, page));
  }, [perPage]);
  const readAll = () => {
    dispatch(updateAllNotification());
  };
  
  // useEffect(() => {
  //   messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log('onNotificationOpenedApp: ', JSON.stringify(remoteMessage));
  //   });

  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           JSON.stringify(remoteMessage),
  //         );
  //       }
  //     });

  //   messaging().setBackgroundMessageHandler(remoteMessage => {
  //     console.log('setBackgroundMessageHandler: ', JSON.stringify(remoteMessage));
  //   });

  // }, [])

  return (
    <Animatable.View style={styles.container}  >
      <Header title={'Notification'} action={() => readAll()} />
      {listNotification.length === 0 ? (
        <LoadingScreen />
      ) : (
        <ScrollView>
          <FlatList
            data={listNotification}
            renderItem={({item, index}) => (
              <Animatable.View animation="fadeIn" duration={200}>
                {item.status === 1 ? (
                  <View style={styles.card}>
                    <View style={styles.position}>
                      <View style={styles.type}>
                        <Text
                          style={[
                            styles.title,
                            {backgroundColor: item.type_color},
                          ]}>
                          {item.type_key}
                        </Text>
                      </View>

                      <View style={styles.content}>
                        <Text style={[styles.text, {color: item.type_color}]}>
                          {item.title}
                        </Text>

                        <Text style={styles.time}>{item.created_at}</Text>
                        <HTML source={{html: item.content}} />
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={styles.cardCheck}>
                    <View style={styles.position}>
                      <View style={styles.type}>
                        <Text
                          style={[
                            styles.title,
                            {backgroundColor: item.type_color},
                          ]}>
                          {item.type_key}
                        </Text>
                      </View>

                      <View style={styles.content}>
                        <Text style={[styles.text, {color: item.type_color}]}>
                          {item.title}
                        </Text>

                        <Text style={styles.time}>{item.created_at}</Text>
                        <HTML source={{html: item.content}} />
                      </View>
                    </View>
                  </View>
                )}
              </Animatable.View>
            )}
          />
          <View>
            <Text onPress={() => setPerPage(perPage + 5)} style={styles.center}>Xem thêm </Text>
          </View>
        </ScrollView>
      )}
    </Animatable.View>
  );
};

export default Notification;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: moderateScale(5),
    borderRadius: 5,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
  cardCheck: {
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: '#1566d52e',
    marginBottom: moderateScale(5),
    borderRadius: 5,
    shadowColor: Platform.OS === 'ios' ? '#ccc' : '#ccc',

    elevation: 0,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
  },
  center: {
    fontSize: 14,
    textAlign: 'center',
    padding: moderateScale(3),
    color: '#004C8A',
    fontStyle: 'italic',
  },
  time: {
    fontSize: 14,
    color: '#555',
    lineHeight: 30,
  },
  content: {
    flexShrink: 1,
  },
  position: {
    flexDirection: 'row',
  },
  type: {
    alignContent:'center',
    
    alignItems:'center'
  },
  title: {
    color: '#fff',
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40) / 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    ...Platform.select({
      ios: {
        lineHeight:40,
      },
      android: {

      }
    }),
    alignItems:'center',
    flexDirection:'column',
    fontSize: 20,
    marginRight: 10,
    overflow:'hidden',
  },
});
