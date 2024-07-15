import React, {useState, useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import redux from './redux/index';
import 'react-native-gesture-handler';
import AuthStack from './route/authStack';
import Splash from './screens/loading/splash';
import messaging from '@react-native-firebase/messaging';

const App = ({navigation}) => {
    useEffect(() => {
    messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('onNotificationOpenedApp: ', JSON.stringify(remoteMessage));
      
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            JSON.stringify(remoteMessage),
          );
        }
      });

    messaging().setBackgroundMessageHandler(remoteMessage => {
      console.log('setBackgroundMessageHandler: ', JSON.stringify(remoteMessage));
    });

  }, [])

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  if(loading) {
    return <Splash />
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
  requestUserPermission()
  return (
    <Provider store={redux.store}>
      <PersistGate loading={null} persistor={redux.persistor}>
        <AuthStack/>
      </PersistGate>
    </Provider>
  )
};

export default App;