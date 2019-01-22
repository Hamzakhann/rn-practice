import React , {Component} from 'react';
import {StyleSheet, View ,Text , Picker}  from 'react-native';


class PickerComponent extends Component{
    state = {
        language:"english"
    }
    render(){
        return(
            <Picker
            style={{width:'100%'}}
            selectedValue={this.state.language}
            onValueChange = {(itemValue , itemIndex) =>{
                this.setState({
                    language:itemValue
                })
            }}
            >
                <Picker.Item label="Spanish" value="spanish"/>
                <Picker.Item label="English" value="english"/>
            </Picker>
        )
    }
}

export default PickerComponent;