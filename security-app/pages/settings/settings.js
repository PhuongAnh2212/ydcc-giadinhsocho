import React from 'react'
import {View, Text, Avatar, FlatList, Pressable,Dimensions} from 'react-native';


export default function Setting({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return(
    <View style ={{flexDirection:'column'}}>
      <View
      style={{borderRadius: 10,
      height: windowHeight*0.25,
      marginTop: windowHeight*0.05,
      width: windowWidth*0.95,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      justifyContent: 'left',
      backgroundColor:'#006BFF',
      alignSelf: 'center',
      flexDirection:'row'
    }}
    onPress={(self)=>{
      self.style.backgroundColor = 'gray'
    }}>
        {/* <Avatar 
        rounded
        style={{height: windowHeight*0.17,
                width: windowHeight*0.17,
                }}
        source={{uri:'../../assets/pfp/mam.jpg'}}/> */} {/* Ava này lỗi r tự tra document r sửa */}
        <View  style = {{paddingLeft: 20,
        flexDirection: 'column'}}>
        <Text style ={{
          fontSize:25,
          fontWeight: 'bold',
          color:'#FFFFFF',
        }} onPress={()=>{navigation.navigate("PushNoti")}}> La Sắc Mầm</Text>
        <Text style ={{
          fontSize:15,
          fontWeight: 'bold',
          color: '#E0E3F1'
        }}> 0911111111</Text>
        </View>
      </View>
      
      <View
      style={{borderRadius: 10,
        height: windowHeight*0.38,     
        marginTop: 15,
        width: windowWidth*0.95,
        backgroundColor:'white',
        alignSelf: 'center',
        flexDirection:'column',
      }}>
        <FlatList
        style={{borderRadius:10}}
        scrollEnabled={false}
        data = {[
        {key:'Email'},
        {key:'Số điện thoại'},
        {key:'Đổi mật khẩu'},
        {key:'Ngôn Ngữ'},
        {key:'Thông báo'},
        {key:'CSKH'}]}
        renderItem = {({item})=> (
          <View style={{
            justifyContent:'center',
            flexDirection:'column',
            backgroundColor: 'white'
          }}>
            <Pressable
          onPress={() => {}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            }
          ]}
          key={item.key}>
          <Text style={{
          color: '#001F70',
          paddingTop:16,
          paddingLeft:10,
          fontSize: 20,
          fontWeight: 'bold',
          paddingBottom:16}}> {item.key} </Text>
          <View style={{
            marginHorizontal: 5,
            paddingTop: 0,
            borderBottomColor: '#001F70',
            borderBottomWidth: 1}}/>
          </Pressable>
          </View>
          )
        }
        />
      </View>

      <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : '#006BFF',
            },{
              height: windowHeight*0.05,
                width:windowWidth*0.95,
                    paddingLeft: 20,
                    paddingRight: 20,
                    alignSelf: 'center',
                    marginTop: 10,
                    flexwrap: 'wrap',
                    borderRadius: 20,
                    alignItems: 'left',
                    justifyContent: 'center',
                    flexDirection:'column',
            }
          ]}
          onPress={(handleButtonPress) => { navigation.navigate('Login')}}>
        <View>
        <Text style={{color:'white', fontSize:20}} >Log out</Text>
  </View>
  </Pressable>
  </View>
)
}
