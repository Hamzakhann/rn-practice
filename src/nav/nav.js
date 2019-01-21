import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const Nav = (props) =>{
    return(
        <View style={styles.nav} >
            <Text>{props.nameOfApp}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav:{
        backgroundColor:'#eaeaea',
        alignItems: 'center',
        padding:10,
        width:'100%',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
    }
  });
export default Nav;