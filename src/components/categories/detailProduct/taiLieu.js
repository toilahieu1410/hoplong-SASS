import React from 'react';
import {View, Text, FlatList, Linking} from 'react-native';
import {Card} from 'react-native-paper';

const TaiLieu = ({tailieu}) => {
    return (
        <FlatList
            data={tailieu}
            renderItem={({item, index}) => (
                <Card onPress={() => {
                    Linking.openURL("mailto:toilahieu1410@gmail.com")
                }}>
                </Card>
            )}
        />
    )
};

export default TaiLieu;