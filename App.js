import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomorTelepon:'',
      pin:''
    };

  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{fontWeight:'bold', fontSize:28, marginHorizontal:20, marginTop:10}}>Phone Verification</Text>
        <Text style={{marginHorizontal:20}}>please enter phone number</Text>

        <TextInput value={this.state.nomorTelepon} onChangeText={(text) => this.setState({nomorTelepon: text})} 
          style={{backgroundColor:'#e0e0e0', marginHorizontal:20, marginTop:40, paddingHorizontal:10}}
          keyboardType="number-pad"
          placeholder="Input your phone number"
        />

        <View style={{
          flexDirection:'row',
          marginTop:20
        }}>

         <View style={{flex:1}}>
            <TextInput value={this.state.pin} onChangeText={(text) => this.setState({pin: text})} 
            style={{
              backgroundColor:'#e0e0e0',
              marginHorizontal:20,
              paddingHorizontal:10
            }}
            keyboardType="number-pad"
            placeholder="Input OTP"
            />

         </View>

         <TouchableOpacity style={{
           backgroundColor:'crimson',
           justifyContent:'center',
           alignItems:'center',
           marginRight: 20,
           paddingHorizontal:10
         }}>
           <Text style={{color:'#ffffff'}}>Resend OTP</Text>
         </TouchableOpacity>

        </View>

         <TouchableOpacity style={{
           backgroundColor:'crimson',
           justifyContent:'center',
           alignItems:'center',
           marginTop:10,
           marginHorizontal:20,
           paddingVertical:10
         }}>
           <Text style={{color:'#ffffff'}}>Sign in</Text>
         </TouchableOpacity>

        <Text style={{marginHorizontal:20, marginTop:10}}>By click start, you agree to our <Text style={{fontWeight:'bold'}}>Terms of Conditions</Text></Text>
      </View>
    );
  }
}
