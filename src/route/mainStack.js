import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainTab from './mainTab';
import TrackingOrder from '../screens/account/trackingOrder';
import DiemThuong from '../screens/account/diemThuong';
import LichsuTimkiem from '../screens/account/lichsuTimkiem';
import CongNo from '../screens/account/congNo';
import ChiTietCongNo from '../components/account/chiTietCongNo';
import ThietLapTaiKhoan from '../screens/account/thietLapTaiKhoan';
import DiaChi from '../screens/account/diaChi';
import SuaDiaChi from '../components/account/suaDiaChi'
import Thongbao from '../screens/account/ThongBao';
import PhanHoi from '../screens/account/phanHoi';
import CauHoi from '../screens/account/cauHoi';
import ThanhVien from '../screens/account/thanhVien';
import DonHang from '../screens/account/donHang';
import ChiTietDonHang from '../components/account/donHang/chiTietDonHang';
import Brands from '../components/categories/brands';
import Products from '../components/categories/product';
import DetailProduct from '../components/categories/detailProduct';
import Filter from '../components/categories/filter';
import SearchProduct from '../components/categories/searchProduct';

const Stack = createStackNavigator();
const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#0b4645db',
      accent: '#f1c40f',
    }
  };

const MainStack = () => {
    return (
        <PaperProvider theme={theme}>
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='MainTab' component={MainTab}/>
                <Stack.Screen name='TrackingOrder' component={TrackingOrder}/>
                <Stack.Screen name='DiemThuong' component={DiemThuong}/>
                <Stack.Screen name='LichsuTimkiem' component={LichsuTimkiem}/>
                <Stack.Screen name='CongNo' component={CongNo}/>
                <Stack.Screen name='ChiTietCongNo' component={ChiTietCongNo}/>
                <Stack.Screen name='ThietLapTaiKhoan' component={ThietLapTaiKhoan}/>
                <Stack.Screen name='DiaChi' component={DiaChi}/>
                <Stack.Screen name='SuaDiaChi' component={SuaDiaChi}/>
                <Stack.Screen name='Thongbao' component={Thongbao}/>
                <Stack.Screen name='PhanHoi' component={PhanHoi}/>
                <Stack.Screen name='CauHoi' component={CauHoi}/>
                <Stack.Screen name='ThanhVien' component={ThanhVien}/>
                <Stack.Screen name='DonHang' component={DonHang}/>
                <Stack.Screen name='ChiTietDonHang' component={ChiTietDonHang}/>
                <Stack.Screen name='Brands' component={Brands}/>
                <Stack.Screen name='Products' component={Products}/>
                <Stack.Screen name='DetailProduct' component={DetailProduct}/>
                <Stack.Screen name='Filter' component={Filter}/>
                <Stack.Screen name='SearchProduct' component={SearchProduct}/>
            </Stack.Navigator>
        </PaperProvider>
    )
};
export default MainStack;