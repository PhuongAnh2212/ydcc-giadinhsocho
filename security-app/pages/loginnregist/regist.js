import React from "react";
import { Image, Text, View } from 'react-native';

import SignUpButton from "./components/signup-button";
import TextUsername from "./components/username-input";
import TextPassword from "./components/password-input";

function Regist({ navigation }) {

    
  return (
        
    <View style ={{
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',

    }}>
        <Text style={{ 
            fontSize: 24,
            fontWeight:700,
            color: '#006BFF',
            textAlign: 'center',
            margin: 0,
            alignItems: 'center',
        }}>
            Đăng kí
        </Text>
        <Text style={{ 
            fontSize: 14,
            fontWeight:300,
            color: '#000000',
            textAlign: 'center',
            margin: 2,
            padding: 10,
            alignItems: 'center',
        }}>
            Chào mừng bạn đến với chúng tôi!
        </Text>
        <TextUsername/>
        <TextPassword/>
        <SignButton/>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#000000',
            margin: 2,
            padding: 50,
        }} onPress={()=> {navigation.navigate("Regist")}}>
            Tạo tài khoản mới
        </Text>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#006BFF',
            margin: 2,
            padding: 10,
        }}>
            Đăng kí bằng
        </Text>
        <Image source={require('./image/socialmedia.png')}/>
     
    </View>
    
  )
  }
export default Regist;