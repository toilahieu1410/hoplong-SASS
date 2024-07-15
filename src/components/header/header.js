import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'native-base';
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {height, heightScale, moderateScale, widthScale} from '../../publics/js/size';
import LinearGradient from 'react-native-linear-gradient';
const Header = ({onPress, title, icon, action, submit}) => {
    
  return (
    <View>
      <Appbar.Header style={styles.header}>
        {onPress ? (
          <Appbar.BackAction onPress={onPress} color={'#004C8A'} />
        ) : (
          <Text />
        )}
        <Appbar.Content title={title} color={'#004C8A'} />
        {action ? (
          <TouchableOpacity onPress={action}>
            <View style={styles.button}>
              <Icon
                name="ios-checkmark-done-sharp"
                size={26}
                color={'#004C8A'}
              />
              <Text style={styles.text}>Đánh dấu đọc tất cả</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <Text />
        )}
        {submit ? (
            <Button onPress={submit} style={styles.buttonSubmit}>
              
              <Text style={styles.textSubmit}>Submit</Text>
            </Button>
         
        ) : (
          <Text />
        )}
      </Appbar.Header>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'transparent',
    shadowColor: 'transparent',
    alignItems:'center',
    elevation: 0,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#004C8A',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginRight: 10,
  },
  text: {
    color: '#004C8A',
  },
  buttonSubmit: {
    backgroundColor:'#004C8A',
    borderColor:'transparent',
    borderRadius: 5,
    paddingHorizontal: 5,
    left:moderateScale(-5),
    top:moderateScale(5),
    height:heightScale(25)
  },
  color: {
    borderWidth: 1,
    borderColor:'transparent',
    borderRadius: 5,
    left:moderateScale(-5)
  },
  textSubmit: {
      color:'#fff'
  }
});
