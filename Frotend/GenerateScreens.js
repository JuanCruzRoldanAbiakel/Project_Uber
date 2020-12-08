import React from 'react';
import {StyleSheet, Dimensions, Easing} from 'react-native';
import {createStackNavigatior, TransitionPresets, CardStyleInterpolators} from '@react-navigation/stack'
import { StackView } from 'react-navigation-stack';

export default function GenerateScreens(props){
    const OpenConfig = {
        animation: 'spring',
        config:{
            stiffness: 1000,
            damping: 250,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01
        }
    };
    const CloseConfig={
        animation: 'timing',
        config:{
            duration: 300,
            easing: Easing.linear
        }
    }
    const Stack = createStackNavigatior();
    return(
        <Stack.Navigator
        style={styles.container}
        screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            headerStyle:{
                backgroundColor: '#1f2333'
            },
            CardStyleInterpolators: CardStyleInterpolators.forFadeFromBottomAndroid,
            transitionSpec:{
                open: OpenConfig,
                close: CloseConfig
            },
           headerTintColor: '#fff',
           headerTitle: ''
        }}
        headerMode= 'float'
        animation= 'fade'
        >{/*Hasta aqui se importa el Stack.Navigator*/}

        </Stack.Navigator>
    )
}
const styles = StyleSheet.creator({
    container={
        flex: 1
    }
})