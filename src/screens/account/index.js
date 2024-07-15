import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {logOut, getApiAccount} from '../../redux/auth/action';
import ButtonAccount from '../../components/account/buttonAccount';
import LinearGradient from 'react-native-linear-gradient';
import IconTracking from '../../assets/icon/10.png';
import IconPoint from '../../assets/icon/11.png';
import IconHistory from '../../assets/icon/12.png';
import IconDonHang from '../../assets/icon/1.png';
import IconCongNo from '../../assets/icon/2.png';
import IconThietLap from '../../assets/icon/3.png';
import IconDiaChi from '../../assets/icon/4.png';
import IconPhanHoi from '../../assets/icon/7.png';
import IconCauHoi from '../../assets/icon/8.png';
import IconThanhVien from '../../assets/icon/9.png';
import {
  width,
  height,
  widthScale,
  heightScale,
  moderateScale,
} from '../../publics/js/size';
import {Button, Icon} from 'native-base';
import LoadingScreen from '../loading/index';

const Account = ({navigation}) => {
  const dispatch = useDispatch();

  const accountDetail = useSelector(store => store.auth.accountDetail);
  useEffect(() => {
    dispatch(getApiAccount());
  }, []);
  // console.log(accountDetail);
  return (
    <SafeAreaView style={styles.container}>
      {accountDetail.length === 0 ? (
        <LoadingScreen />
      ) : (
        <View>
          <LinearGradient
            // start={{x: 0, y: 0}}
            // end={{x: 1, y: 1}}
            colors={['#011739', '#0163AB']}>
            <View style={styles.backgroundColor}>
              <View style={styles.flex}>
                
                <Image
                  style={styles.image}
                  source={{
                    uri: accountDetail.customer.avatar,
                  }}
                />
                <Text style={styles.username}>
                  {accountDetail.customer.name}
                </Text>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.title_task}>
            <View style={[styles.flexTop, {marginHorizontal: 15}]}>
              <Image
                source={IconTracking}
                style={styles.iconImg}
                resizeMode="contain"
              />
              <Text
                // onPress={() =>
                //   navigation.navigate('TrackingOrder', {data: accountDetail})
                // }
                style={{textAlign: 'center'}}>
                Tracking{'\n'}order
              </Text>
            </View>
            <View style={[styles.flexTop, {marginHorizontal: 15}]}>
              <Image
                source={IconPoint}
                style={styles.iconImg}
                resizeMode="contain"
              />
              <View>
                <Text
                  // onPress={() =>
                  //   navigation.navigate('DiemThuong', {data: accountDetail})
                  // }
                  style={{textAlign: 'center'}}>
                  Điểm thưởng
                </Text>
              </View>
            </View>
            <View style={[styles.flexTop, {marginHorizontal: 15}]}>
              <Image
                source={IconHistory}
                style={styles.iconImg}
                resizeMode="contain"
              />
              <View>
                <Text
                  // onPress={() =>
                  //   navigation.navigate('LichsuTimkiem', {data: accountDetail})
                  // }
                  style={{textAlign: 'center'}}>
                  Lịch sử{'\n'}tìm kiếm
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.top}>
            <View style={styles.headerTop}>
            
            </View>
            <ScrollView style={styles.scrollView}>
            <View style={styles.body}>
            <ButtonAccount
                sourceImage={IconDonHang}
                onPress={() =>
                  navigation.navigate('DonHang', {data: accountDetail})
                }
                title="Đơn hàng của tôi"
              />
                <ButtonAccount
                  sourceImage={IconCongNo}
                  onPress={() =>
                    navigation.navigate('CongNo', {data: accountDetail})
                  }
                  title="Công nợ"
                />
                {/* <ButtonAccount
                  sourceImage={IconThietLap}
                  onPress={() =>
                    navigation.navigate('ThietLapTaiKhoan', {
                      data: accountDetail,
                    })
                  }
                  title="Thiết lập tài khoản"
                /> */}
                <ButtonAccount
                  sourceImage={IconDiaChi}
                  onPress={() =>
                    navigation.navigate('DiaChi', {data: accountDetail})
                  }
                  title="Địa chỉ"
                />
                {/* <ButtonAccount
              sourceImage={IconHistory}
              onPress={() => navigation.navigate('Thongbao', {data: accountDetail})}
              title="Thông báo"
            /> */}
                <ButtonAccount
                  sourceImage={IconPhanHoi}
                  onPress={() =>
                    navigation.navigate('PhanHoi', {data: accountDetail})
                  }
                  title="Phản hồi"
                />
                <ButtonAccount
                  sourceImage={IconCauHoi}
                  onPress={() =>
                    navigation.navigate('CauHoi', {data: accountDetail})
                  }
                  title="Câu hỏi thường gặp"
                />
                <ButtonAccount
                  sourceImage={IconThanhVien}
                  onPress={() =>
                    navigation.navigate('ThanhVien', {data: accountDetail})
                  }
                  title="Quản lý thành viên"
                />
                <View style={styles.logout}>
                  <Button
                    style={styles.buttonLogout}
                    onPress={() => dispatch(logOut())}>
                    <Text style={styles.buttonText}>Log out</Text>
                  </Button>
                </View>
      
            </View>
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Account;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
  scrollView: {
    minHeight: heightScale(350),
    flex:1,
  },
  backgroundColor: {
    height: heightScale(130),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(80) / 2,

    borderWidth: 1,
    borderColor: '#fff',
  },
  flexTop: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    marginTop: -40,
  },
  headerTop: {
    backgroundColor: '#fff',
    borderRadius: 5,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  body: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  title_task: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -40,
    margin: 20,
    marginTop: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 80,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  username: {
    color: '#fff',
    fontSize: moderateScale(18),
    marginLeft: moderateScale(20),
    flexShrink:1,
    width: widthScale(220),
  },
  flex: {
    top: 30,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImg: {
    width: widthScale(35),
    height: heightScale(35),
  },
  logout: {
    alignSelf: 'center',
  },
  buttonLogout: {
    width: widthScale(300),
    height: heightScale(30),
    borderRadius: 5,
    justifyContent: 'center',
    marginVertical: moderateScale(15),
    backgroundColor: '#004C8A',
    elevation:0,
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
  },
});
