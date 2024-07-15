import AsyncStorage from '@react-native-community/async-storage';
export const origin = 'https://hoplongsaas.com/api/mobile/v1/';
export const originCate = 'https://selector.hoplong.com/api/v1/';

const authHeader = async() => {
  const user = await AsyncStorage.getItem('tokenKey');
  if (user) {
    return {
      'Authorization': `Bearer ${user}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  } else {
      return {}
  }
};

const authCate = async() => {
  const tokenCate = await AsyncStorage.getItem('tokenCate');
  if (tokenCate) {
    return {
      'Authorization': `Bearer ${tokenCate}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
  } else {
      return {}
  }
};

export default {
  authHeader,
  authCate
}

