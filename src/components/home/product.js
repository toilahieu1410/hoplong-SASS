import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductHome = ({title, data, navigation, image}) => {
  const dataList = useMemo(() => {
    if (data.length == 0) {
      return null;
    }
    return data[0].data;
  });
  if (dataList === null) return null;

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
      {/* <Icon style={styles.icon} name={icon}/> */}
      <Image source={image} style={styles.image}/>
      <Text>&nbsp;&nbsp;</Text>
      <Text style={styles.title}>{title}</Text>
      </View>
  
      <ScrollView>
        <View style={styles.productImg}>
          <FlatList
            data={dataList}
            numColumns={2}
            contentContainerStyle={{flexDirection: 'column'}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailProduct', {
                    data: {sku: item.sku, slug: item.sku},
                  })
                }
                style={styles.list}>
                     {item.list_price != null ? (
                      <Text style={styles.color}>
                        -{((item.price / item.list_price) * 100).toFixed()}%
                      </Text>
                    ) : (
                      <View></View>
                    )}
                {item.thumb === null ? (
                  <View style={styles.imageError}>
                    <Icon name="ios-warning-sharp" style={styles.icon}/>
                    <Text style={styles.text}>No Image !!!</Text>
                  </View>
                ) : (
                  <Image
                    resizeMode="stretch"
                    style={styles.imgDetail}
                    source={{uri: item.thumb}}
                  />
                )}
                <View>
                  <View style={styles.row}>
                  <Text style={{paddingHorizontal: 10}}>{item.sku}</Text>
               
                  </View>
               
                  <View style={styles.item}>
                    <Text style={styles.bold}>
                      {item.price
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')}{' '}
                      đ
                    </Text>
                    {item.count_purchases === undefined ? (<Text></Text>) : (<Text style={{flexShrink:1,fontSize:moderateScale(10)}}>Đã mua: {item.count_purchases}</Text>)}
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.sku}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductHome;
const styles = StyleSheet.create({
  container: {
     backgroundColor:'#efefef'
  },
  flex: {
    flexDirection:'row',
    alignItems:'center',
    margin: 5,
    textAlignVertical:'center',

  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: '#555',
    marginTop: 0,
  },
  list: {
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor:'#fff'
  },
  bold: {
    fontWeight: 'bold',
    color:'#ff6666'
  },
  productImg: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  image: {
    width: widthScale(20),
    height: heightScale(20),
  },
  imageError: {
    width: widthScale(170),
    height: heightScale(170),
    borderColor:'#f5f5f5',
    borderWidth:1,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    
  },
  icon: {
    fontSize:moderateScale(25),
    color:'#004C8A'
  },
  imgDetail: {
    width: widthScale(170),
    height: heightScale(170),
    marginVertical: 0,
    resizeMode:'contain',


  },
  item: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 10,
    paddingTop: 5,
  },
  color: {
    backgroundColor: '#ff3333',
    color: '#fff',
   paddingHorizontal:moderateScale(3),
   paddingVertical:moderateScale(1),
    zIndex:9,
    fontSize: moderateScale(9),
    borderRadius: 5,
    fontWeight: 'bold',
    alignItems:'center',
    position:'absolute',
    right:0,
  },
  text: {
    color: '#555',
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
});
