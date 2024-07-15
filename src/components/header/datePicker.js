import React from 'react';
import {DatePicker} from 'native-base';
// import {Picker} from '@react-native-picker/picker';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
const today = new Date()
const date = moment(today).format('DD/MM/YYYY');
const datePicker = ({onPress, maxDate}) => {
    return (
        <View style={{flexDirection:'row',alignItems:'center' ,borderBottomWidth: 1, borderBottomColor: '#bbb'}}>
        <DatePicker
          defaultDate={new Date()}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={maxDate}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={true}
          animationType={"fade"}
          androidMode={"default"}
          placeHolderText={date}
          textStyle={{ color: "#444"}}
          placeHolderTextStyle={{ color: "#444", backgroundColor:'#0f3c3e00'}}
          onDateChange={onPress}
          disabled={false}
          />
          <View>
          <Icon
              active
              name='calendar'
              size={24}
              color='#2179A9'
          />
      </View>
    </View>
    )
}

export default datePicker;