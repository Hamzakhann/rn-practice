import React , {Component} from 'react';
import {StyleSheet,ScrollView, View ,Text, TextInput , Button }  from 'react-native';

class Input extends Component{
    state = {
        myInput :"",
        users : ['areeba' , 'mohsin' , 'jack', 'mick', 'hosely' ,'hamza' , 'sir nasir' , 'hunain' , 'Kashif']
    }

    onChangeInput = (value)=>{
        this.setState({
            myInput:value,
        })
    }

    onAddUser = () =>{
        this.setState(previousState => {
            return{
                myInput:'',
                users:[...previousState.users, previousState.myInput]
            }
        })
    }
    render(){
        return(
                <View style={styles.inputWrapper} >
                <TextInput
            onChangeText = {this.onChangeInput}
            style = {styles.input}
            value={this.state.myInput}
            multiline={true}
            maxLength={100}
            editable={true}
            autoCapitalize={"words"}
            />
            <Button
            title="Add Users"
            onPress = {this.onAddUser}
             />
                         {
                 this.state.users.map((user) => (
                    <Text style={styles.users} key={user} >{user}</Text>
                 ))
             }
            
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputWrapper:{
        width:'100%'
    },
    input : {
        width:'100%',
        backgroundColor:'#f2f2f2',
        marginTop:20,
        fontSize:20,
        padding: 10
    },
    users:{
        fontSize:25,
        borderWidth: 1,
        borderColor: '#cecece',
        padding:10,
        marginBottom:20
    }
})

export default Input;