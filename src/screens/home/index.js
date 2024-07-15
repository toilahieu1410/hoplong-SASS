import React, {useEffect, useMemo, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
  Animated,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import {getHome} from '../../redux/home/action';
import LoadingScreen from '../loading/index';
import Slider from '../../components/home/slider';
import Menu from '../../components/home/menu';
import ProductHome from '../../components/home/product';
import {Button, Icon as IconHead} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import Recent from '../../assets/icon/icon-03.png';
import New from '../../assets/icon/icon-01.png';
import Star from '../../assets/icon/icon-02.png';

const HEADER_MAX_HEIGHT = Platform.OS === 'ios' ? moderateScale(280) : moderateScale(260);
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? moderateScale(90) : moderateScale(60);
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const Home = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const pan = useRef(new Animated.ValueXY()).current;
  
  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 1],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -5],
    extrapolate: 'clamp',
  });

  const renderListItem = item => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.fullNameText}>{item.fullName}</Text>
    </View>
  );

  const dispatch = useDispatch();
  const listHome = useSelector(store => store.home.listHome);
  useEffect(() => {
    dispatch(getHome());
  }, []);
  // console.log(listHome);
  const dataSlide = [];
  const dataBanner = [];
  const dataOrder = [];
  const dataGanDay = [];
  const dataMuaNhieu = [];
  const dataQuanTam = [];

  const data = useMemo(() => {
    if(listHome.length ===0){
      return null;
    }
    return listHome.data
  }, [listHome]);
  if(data === null) return null;

  data.forEach(item => {
    if (item.style == 'slide') {
      dataSlide.push(item);
    }
    if (item.style == 'banner') {
      dataBanner.push(item);
    }
    if (item.style == 'list_order') {
      dataOrder.push(item);
    }
    if (item.style == 'list_product' && item.title == 'Mua gần đây') {
      dataGanDay.push(item);
    }
    if (item.style == 'list_product' && item.title == 'Mua nhiều') {
      dataMuaNhieu.push(item);
    }
    if (item.style == 'list_product' && item.title == 'Quan tâm') {
      dataQuanTam.push(item);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: Platform.OS === 'ios' ? HEADER_MAX_HEIGHT - moderateScale(20) : HEADER_MAX_HEIGHT - moderateScale(10)}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY }}}],
          {useNativeDriver: true},
        )}>
        
        <View style={styles.m20}>
          <Menu navigation={navigation} />
        </View>
        <View style={styles.products}>
          <ProductHome
            title="Sản phẩm mua nhiều nhất"
            data={dataMuaNhieu}
            navigation={navigation}
            image={New}
          />
        </View>
     
        <View style={styles.products}>
    
          <ProductHome
              image={Recent}
            title="Mua gần đây"
            data={dataGanDay}
            navigation={navigation}
          />
        </View>
        <View style={styles.products}>
          <ProductHome
          image={Star}
            
            title="Quan tâm"
            data={dataQuanTam}
            navigation={navigation}
          />
        </View>
      </Animated.ScrollView>
    
      <Animated.View
    
        style={[
           styles.header,
          styles.slide,
          {transform: [{translateY: headerTranslateY}]},
        ]}>
      
          <LinearGradient
       style={styles.header}
          colors={['#011739', '#0163AB']}>
            <SafeAreaView>
            <Animated.View
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{translateY: imageTranslateY}],
            },
          ]}>
          <Slider dataSlide={dataSlide} />
        </Animated.View>
            </SafeAreaView>
       
          </LinearGradient>
 
      </Animated.View>

      {listHome.code != 200 ? (
        <LoadingScreen />
      ) : (
        <View style={{flex: 1}}>
          <View style={styles.backgroundColor}>
            <View style={styles.flex}>
              <TouchableOpacity style={styles.inputSearch} onPress={() => navigation.navigate('SearchProduct')}>
                <IconHead name="ios-search" style={styles.icon} />
                <View >
                  <Text>Nhập mã hàng</Text>
                  {/* <TextInput
                    placeholder="Nhập mã hàng"
                    underlineColorAndroid="transparent"
                  /> */}
                </View>
                <IconHead
                  size={22}
                  name="ios-mic-outline"
                  style={[styles.iconRight, {right: 40}]}
                />
                <Text
                  style={[styles.iconRight, {right: 35, top: 5, fontSize: 18}]}>
                  |
                </Text>
                <IconHead name="ios-scan-sharp" style={styles.iconRight} />
              </TouchableOpacity>
              <View>
                <Button transparent>
                  <IconHead
                    name="ios-notifications-outline"
                    color="#fff"
                    style={styles.iconBell}
                  />
                </Button>
              </View>
            </View>
          </View>

        </View>
      )}
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{scale: titleScale}, {translateY: titleTranslateY}],
          },
        ]}>
        <View style={[styles.backgroundColor,{marginTop:Platform.OS === 'ios' ? moderateScale(-15): moderateScale(-5)}]}>
   
          <View style={styles.flex}>
         
            <TouchableOpacity style={styles.inputSearch} onPress={() => navigation.navigate('SearchProduct')}>
              <IconHead name="ios-search" style={styles.icon} />
              <View>
              <Text>Nhập mã hàng</Text>
                {/* <TextInput
                  placeholder="Nhập mã hàng"
                  underlineColorAndroid="transparent"
                /> */}
              </View>
              <IconHead
                size={22}
                name="ios-mic-outline"
                style={[styles.iconRight, {right: 40}]}
              />
              <Text
                style={[styles.iconRight, {right: 35, top: 5, fontSize: moderateScale(18)}]}>
                |
              </Text>
              <IconHead name="ios-scan-sharp" style={styles.iconRight} />
            </TouchableOpacity>
            <View>
              <Button transparent>
                <IconHead
                  name="ios-notifications-outline"
                  color="#fff"
                  style={styles.iconBell}
                />
              </Button>
            </View>
         
          </View>
    
        </View>
      </Animated.View>

    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  saveArea: {
    flex: 1,
    backgroundColor: '#eff3fb',
  },

  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },

  headerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    
    resizeMode: 'cover',
  },
  topBar: {
    marginTop: Platform.OS === 'ios' ? moderateScale(25) : moderateScale(10) ,
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: moderateScale(20),
  },

  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },

  m20: {
    marginVertical:moderateScale(10),
    
  },

  backgroundColor: {
    position: 'absolute',
    marginHorizontal: 10,
    top: Platform.OS === 'ios' ? moderateScale(25) : 0,
  },
  products: {
    width: '100%',
    flexDirection:'row',
  
  },
  flexTop: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  image: {
    width: moderateScale(15),
    height: moderateScale(15),
  },
  img: {
    height: heightScale(120),
    borderRadius: 5,
    width: '100%',
  },
  inputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    opacity: 1,
    height: moderateScale(35),
    borderRadius: 5,
    paddingLeft: 15,
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
    fontSize: 24,
    left: moderateScale(-5),
  },
});
