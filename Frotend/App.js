import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';


export default function App(){
    const[user, setUser] = useState(null)


    console.disableYellowBox = true;

    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    }
})