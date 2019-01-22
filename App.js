import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, View, ActivityIndicator , Image} from 'react-native';
import Nav from './src/nav/nav';
import Generate from './src/generator/generate';
import ListItem from'./src/generator/listItem';
import Input from './src/input/Input';
import PickerComponent from './src/picker/Picker';
import Mountain from './src/assets/images/mountain.jpeg';
import ModalComponent from './src/model/Modal'
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component{
  state={
    nameOfApp : "My awesome Apsp",
    random : [20 , 13],
    loading:true
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
      <ScrollView 
      // onContentSizeChange={(w,h) => alert(h)}
      // onMomentumScrollBegin = {() => alert('begin')}
      // onMomentumScrollEnd = {() => alert('end')}
      // onScroll={() => alert('scroll')}
      style={{width:'100%'}}>
     <View style={styles.wrapper} >
     <Generate  add = {this.onAddRandom} /> 
      <ListItem items={this.state.random} delete = {this.onItemDelete} />
      {/* <Input/> */}
      {/* <PickerComponent/>
      <ActivityIndicator
      size="large"
      color="red"
      animating={this.state.loading}
      /> */}
      {/* <Image
      source={Mountain}
      // source={{uri:'https://www.google.com/hamza/khann'}}
      style={styles.mountains}
      resizeMode="contain"
      onLoadEnd={() => alert("image loding")}
      /> */}
      <ModalComponent/>
     </View>
      </ScrollView>
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
  },
  wrapper:{
    flex:1,
    width:'100%',
    padding: 20,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  mountains:{
    width:'100%',
    height:300,
    marginTop:20
  }
});
