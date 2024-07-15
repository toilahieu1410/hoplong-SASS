import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/home/index';
import Categories from '../screens/categories/index';
import Notification from '../screens/notification/index';
import Account from '../screens/account/index';
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      tabBarOptions={{
        activeTintColor: '#004C8A',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'white'},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Danh mục',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-chatbubbles" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-person-circle-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
