import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useDispatch,useSelector} from 'react-redux';
import {checkLogin} from '../redux/auth/action';

import SignIn from '../screens/signIn/index';
import LoadingScreen from '../screens/loading/index';
import MainStack from './mainStack';

const Stack = createStackNavigator();
const AuthStack = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
    const restoring = useSelector((store) => store.auth.restoring);
    
    // console.log(isLoggedIn)
    useEffect(() => {
        dispatch(checkLogin())
    }, [dispatch])
    return (
        <NavigationContainer>
            {
                restoring ? <LoadingScreen/> : !isLoggedIn ? (
                    <Stack.Navigator headerMode='none'>
                        <Stack.Screen name='SignIn' component={SignIn}/>
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator headerMode='none'>
                        <Stack.Screen name='MainStack' component={MainStack}/>
                    </Stack.Navigator>
                )
            }
        </NavigationContainer>
    )
};
export default AuthStack;