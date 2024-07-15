import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-native-gesture-handler';
import {heightScale, moderateScale, widthScale} from '../../publics/js/size';
import * as Animatable from 'react-native-animatable';
import IconImage from '../../assets/icon/ups-2.png';
const Item = ({item, navigation}) => {
  const [show, setShow] = useState(false);
  const [attributes, setAttributes] = useState([]);
  const [brandIds, setBrandIds] = useState([]);
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(1);
  const [fields, setFields] = useState('*');
  const [withs, setWiths] = useState('*');

  const data = {
    brand_ids: brandIds,
    attributes: attributes,
    per_page: perPage,
    page: page,
    fields: fields,
    withs: withs,
  };

  return (
    <View style={styles.container}>
      <View style={styles.button1}>
        <TouchableOpacity
       onPress={() => {item.childes.length !== 0 ? setShow(!show) : (navigation.navigate('Brands', {
        categoryId: item.id,
        data: data,
      })
    )}} 
          underlayColor="#f1f1f1"
          style={styles.buttonText}>
          {
            item.image === null ? (
              <Image source={IconImage} style={styles.image}/>
            ) : (
              <Image source={{uri: item.image}} style={styles.image}/>
            )
          }
          <View style={styles.border}>
            <Text style={styles.title}>{item.name}</Text>
            <View>
            {item.childes.length != 0 ? (
              <Button style={styles.buttonIcon}>
                {show ? (
                  <Icon
                    onPress={() => setShow(!show)}
                    name={'ios-chevron-down'}
                    size={24}
                    style={styles.icon}
                  />
                ) : (
                  <Icon
                    onPress={() => setShow(!show)}
                    name="ios-chevron-forward"
                    size={24}
                    style={styles.icon}
                  />
                )}
              </Button>
            ) : (
              <View></View>
            )}
            </View>
      
          </View>
        </TouchableOpacity>
      </View>
      {show ? (
        <Animatable.View
          style={styles.button2}
          animation="fadeInDown"
          duration={200}>
          <FlatList
            data={item.childes}
            renderItem={({item, index}) => (
              <Button
                style={[styles.flex, styles.button]}
                onPress={() =>
                  navigation.navigate('Brands', {
                    categoryId: item.id,
                    data: data,
                  })
                }>
                {/* <Text style={styles.minus}>+</Text> */}
                <Text style={styles.childes}>{item.name}</Text>
              </Button>
            )}
          />
        </Animatable.View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Item;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFBFF',
  },
  flex: {
    flexDirection: 'row',
  },
  iconButton: {
  },
  minus: {
    marginRight: 5,
    color: '#555',
  },
  button: {
    height: moderateScale(40),
    width: '100%',
    backgroundColor: 'transparent',
    elevation: 0,

  },
  image: {
    resizeMode:'stretch',
    width:moderateScale(30),
    height:moderateScale(30),
  },
  button1: {
    height: heightScale(40),
    borderBottomColor:'#efefef',
    borderBottomWidth:1,
    marginHorizontal:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  border: {
    width: '86%',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button2: {
    backgroundColor:'#F5F8FF',
    paddingLeft: moderateScale(35),
    flex: 1,
    height: '100%',
  },
  buttonText: {

    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    elevation: 0,
    padding: 3,
  },
  buttonIcon: {
    backgroundColor: 'transparent',
    elevation: 0,
    borderColor: '#ccc',
    alignItems:'center',
    alignContent:'center',
  },
  icon: {
    color: '#888',
    fontSize: moderateScale(24),
    // width: moderateScale(30),
    // height: moderateScale(30),
  },
  title: {

    color: '#000',
    fontSize: moderateScale(13),
  },
  childes: {
    color: '#555',
    fontSize: moderateScale(13),
  },
});
