import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const KichThuoc = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.center}>Nội dung đang được cập nhật!</Text>
        </View>
    )
};

export default KichThuoc;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#fff',
        padding:5,
    },
    center: {
        textAlign:'center'
    }
})