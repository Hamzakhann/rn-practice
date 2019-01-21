import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Generate = () =>{
    return(
        <View style = {styles.generate} >
            <Text>Add number</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    generate:{
        padding : 10,
        alignItems: 'center',
        backgroundColor: '#00bcd4',
        width:'100%'
    }
})

export default Generate