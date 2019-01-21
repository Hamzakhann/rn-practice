import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Nav from './src/nav/nav';
import Generate from './src/generator/generate';
import ListItem from'./src/generator/listItem';
import Input from './src/input/Input';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component{
  state={
    nameOfApp : "My awesome Apsp",
    random : [20 , 13]
  }

onAddRandom = () =>{
  const random = Math.floor(Math.random()*100 + 1);
  this.setState(previousState =>{
    return  {
      random : [...previousState.random, random]
    }
  })
}

onItemDelete = (i) => {
  const newArray = this.state.random.filter((item , index) =>{
    return i !== index
  });
  this.setState({
    random:newArray
  })
}
  render() {
    return (
      <View style={styles.container}>
      <Nav nameOfApp = {this.state.nameOfApp} />
      <Generate  add = {this.onAddRandom} /> 
      <ListItem items={this.state.random} delete = {this.onItemDelete} />
      <Input/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-start',
    backgroundColor: 'white',
    marginTop: 10,
  }
});
