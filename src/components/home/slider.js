import React, {useState, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  Image,
  Animated,
  Platform,
  StatusBar
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import {Button} from 'native-base';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(210) : moderateScale(200);

const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? moderateScale(100) : moderateScale(80);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const Slider = ({dataSlide}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const pan = React.useRef(new Animated.ValueXY()).current;
  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 200],
    extrapolate: 'clamp',
  });
  const data = useMemo(() => {
    if (dataSlide.length == 0) {
      return null;
    }
    return dataSlide[0].data;
  });
  if (data === null) return null;
  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.textTitle}>Tin nhắn:</Text>
        <Text>&nbsp;&nbsp;</Text>
        <Text style={styles.textContent}>
          Sceduled Maintenance : This is .....
        </Text>
        </View>
  
        <Button style={styles.detail} >
          <Text style={styles.more}>Xem thêm</Text>
        </Button>
      </View>
      <SwiperFlatList
        autoplayLoop
        autoplayDelay={3}
        paginationDefaultColor="#fff"
        paginationActiveColor="#1566D5"
        showPagination
        paginationStyleItem={styles.pagination}
        data={data}
        renderItem={({item}) => (
          <View style={styles.viewSlider}>
            <View style={styles.slider}>
              <Animated.Image
                blurRadius={7}
                source={{uri: item.image}}
                style={[
                  styles.headerBackground,
                  styles.image,
                  {
                    opacity: imageOpacity,
                    transform: [{translateY: imageTranslateY}],
                  },
                ]}
                resizeMode={'contain'}
              />
            </View>

            <View style={styles.slider1}>
              <Animated.Image
                source={{uri: item.image}}
                style={[
                  styles.headerBackground,
                  styles.image1,
                  {
                    opacity: imageOpacity,
                    transform: [{translateY: imageTranslateY}],
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  viewSlider: {
    zIndex: 2,
  },
  backgroundColor: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
  },
  slider: {
    width,
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    opacity: 1,
  },
  headerBackground: {
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  slider1: {
    marginHorizontal: 10,
  },
  detail: {
    textAlign:'right',
    justifyContent:'center',
    alignContent:'center',
    height: heightScale(20),
    paddingHorizontal:moderateScale(5),
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: '#004C8A',
    elevation:0,
  },
  more: {
    color:'#fff',
    fontSize:moderateScale(10),
    alignItems:'center',
    justifyContent:'center'
  },
  notification: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.3)',
    marginHorizontal: 10,
    zIndex: 9,
    padding: moderateScale(5),
    borderRadius: 5,
    position: 'absolute',
    top: Platform.OS === 'ios' ? moderateScale(90) : moderateScale(60),
    
    width: '95%',
    minHeight: heightScale(25),
  },
  textTitle: {
    fontWeight: '700',
    fontSize: moderateScale(12),
    color: '#000',
  },
  textContent: {
    flexShrink: 1,
  },
  image1: {
    height: moderateScale(140),
    width: '100%',
    resizeMode: 'cover',
    opacity: 1,
    
    top: Platform.OS === 'ios' ? moderateScale(-70) : moderateScale(-90),
    paddingTop: Platform.OS === 'ios' ? 0 : 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    // borderColor:'red',
    // borderWidth:1,
  },
  image: {
    minHeight: Platform.OS === 'ios' ? moderateScale(180) : moderateScale(150),
    width: '100%',
    resizeMode: 'cover',
    borderColor: 'transparent',
    borderRadius: 0,
  },
  pagination: {
    width: moderateScale(7),
    height: moderateScale(7),
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    top: 0,
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: heightScale(30),
    borderRadius: 5,
    paddingLeft: moderateScale(15),
    width: '90%',
  },
  icon: {
    color: '#777',
    marginRight: 10,
    fontSize: moderateScale(20),
  },
  iconRight: {
    color: '#777',
    fontWeight: 'bold',
    position: 'absolute',
    right: 10,
    fontSize: moderateScale(20),
  },
  iconBell: {
    color: '#fff',
    fontSize: moderateScale(24),
    left: moderateScale(-10),
  },
});
