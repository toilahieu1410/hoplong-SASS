import {Dimensions} from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;
//Chieu rong va cao cho design chuan
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 600;

export const widthScale = size => (width / guidelineBaseWidth) * size;
export const heightScale = size => (height / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (widthScale(size) - size) * factor;

