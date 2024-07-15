import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {Button, Checkbox} from 'react-native-paper';
import {Button as ButtonBast} from 'native-base';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import * as Animatable from 'react-native-animatable';

const ItemAttributes = ({data, onPress}) => {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      <ButtonBast onPress={() => setShow(!show)} style={styles.button}>
        <Text style={styles.title}>{data.name}</Text>
        <Text>&nbsp;</Text>
        <Text style={styles.number}>({data.values.length})</Text>
      </ButtonBast>
      {show ? (
        <Animatable.View animation="fadeInDown" duration={200}>
          <FlatList
            data={data.values}
            renderItem={({item, index}) => (
              <Item item={item} onPress={onPress} />
            )}
          />
        </Animatable.View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const Item = ({item, onPress}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Animatable.View
      style={styles.containerList}
      animation="fadeInDown"
      duration={200}>
      <View style={styles.flex}>
        {Platform.OS === 'ios' ? (<View style={styles.checkBox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          
          onPress={() => {
            setChecked(!checked);
            onPress(item);
          }}
        />
        </View>) : (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          
          onPress={() => {
            setChecked(!checked);
            onPress(item);
          }}
        />
      )}
        
        
        <Text style={styles.value}>{item.value}</Text>
      </View>
    </Animatable.View>
  );
};

export default ItemAttributes;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    backgroundColor: '#FAFBFF',
  },
  containerList: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F5F8FF',
  },
  checkBox: {
    // borderWidth:1,
    // borderColor:'#ccc',
    // marginBottom:moderateScale(10),
    // marginRight:moderateScale(10),
    
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  title: {
    fontSize: moderateScale(16),
    textTransform: 'capitalize',
  },
  number: {
    fontSize: moderateScale(12),
    textAlign: 'left',
  },
  button: {
    width: '100%',
    backgroundColor: '#FAFBFF',
    justifyContent: 'flex-start',
    elevation: 0,
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    textTransform: 'capitalize',
  },
  value: {
    fontSize: moderateScale(14),
  },
});
