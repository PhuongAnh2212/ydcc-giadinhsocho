import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import MamImage from '../../assets/pfp/mam.jpg';
import DuaImage from '../../assets/pfp/dua.jpg';
import TomImage from '../../assets/pfp/tom.jpg';
import GuImage from '../../assets/pfp/gu.jpg';
import NaImage from '../../assets/pfp/na.jpg';
import CocImage from '../../assets/pfp/coc.jpg';
import MoonImage from '../../assets/pfp/moon.jpg';
import CiumamImage from '../../assets/pfp/ciumam.jpg';


const MAM_IMAGE = Image.resolveAssetSource(MamImage).uri;
const DUA_IMAGE = Image.resolveAssetSource(DuaImage).uri;
const TOM_IMAGE = Image.resolveAssetSource(TomImage).uri;
const GU_IMAGE = Image.resolveAssetSource(GuImage).uri;
const COC_IMAGE = Image.resolveAssetSource(CocImage).uri;
const MOON_IMAGE = Image.resolveAssetSource(MoonImage).uri;
const CIUMAM_IMAGE = Image.resolveAssetSource(CiumamImage).uri;
const NA_IMAGE = Image.resolveAssetSource(NaImage).uri;


DATA = [
  {id:1,
  username: "Mầm",
  image:MAM_IMAGE,
  score:689
  },
  {id:2,
    username: "Dưa",
    image:DUA_IMAGE,
    score:674
  },
  {id:3,
    username: "Tôm",
    image:TOM_IMAGE,
    score:521
  },
  {id:4,
    username: "Ná",
    image:NA_IMAGE,
    score:501
  },
  {id:5,
    username: "Bo bo",
    image:GU_IMAGE,
    score:464
  },
  {id:6,
    username: "Moon",
    image:MOON_IMAGE,
    score:433
  },
  {id:7,
    username: "Pate",
    image:COC_IMAGE,
    score:300
  },
  {id:8,
    username: "Hoshi",
    image:CIUMAM_IMAGE,
    score:213
  }
]

const colorList = [
  {offset: '0%', color: '#231557', opacity: '1'},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  card: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 30
    
  },
  name: {
    padding: 10,
    fontSize: 23,
    fontWeight: '700',
    height: 40,
    color: '#001F70'
  },
  tinyLogo: {
    flex:1,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding: 10,
    marginLeft: 30,
    maxWidth: 60,
    height: 60,
    borderRadius: 10,
    overflow: "hidden",
  },
  score: {
    color: '#001F70'
  },  
  text: {
    paddingBottom:12,
    paddingLeft: 13,
    flex:2,
    alignSelf: 'center'
  },
});

function Leaderboard ({navigation}) {
  x=1; //để print ra stt 1 2 3 4 5 cho leaderboard

  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);

  // const fetchData = async() =>{
  //   setLoading(true)
  //   const docref = await getDocs(query(collection(db, "user"), where("manager", "!=", "'0'")))
  //   .catch((error) =>{
  //     console.log(error.message);
  //   }

  //   )
  //   const res =[]

  //   docref.forEach(user => {
  //     res.push(user);
  //     // console.log(user.data());
  //   })
  //   if(res.length==0){
  //     console.log("no data")
  //   }
  //   setUsers([...res]);
  //   setLoading(false)
  // }
  // useEffect(() =>{
  //   fetchData();
  //   },[])
  return (
    <View style={styles.container}>
      <View
                style={[{
                    height: '28.5%',
                    width: 500,
                    borderRadius: 100,
                    marginVertical: 0,
                    marginLeft:-5,
                    backgroundColor: '#006BFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    zIndex:-999
                },
                {
                    transform: [{rotateZ: '170deg'}]
                },
            ]}></View>
      <View style={{
        paddingTop: 30,
        marginTop:-25,
        width:420,
        height:150,
        backgroundColor:'#006BFF',
        flexDirection: 'row'
      }}>  
      <Image  //ảnh ava người dùng
          style={{
            height: 120,
            width:120,
            marginTop:'10%',
            marginLeft: '8%',
            borderRadius: 70,
            overflow: "hidden",
            
          }}
          source={require('../../assets/pfp/mam.jpg')}
      />
      
      <View style={{
        marginTop: '8%'
      }}>
          <Text style={{
            alignSelf:'center',
            fontSize:25,
            color: '#FFFFFF',
            fontWeight: 'bold'
          }}>
            La Sắc Mầm 
          </Text>
          <Text  style= {{
              fontSize: 15,
              alignSelf: 'center',
              color: '#FFFFFF',
              fontWeight: 'bold',
              paddingTop: 10
          }}>
            Bạn xếp thứ
          </Text>
          <View style= {{
            flexDirection:'row',
            justifyContent: 'flex-end',
            alignSelf: 'center',
            paddingLeft: 50
          }}>
            <Text style= {{
                fontSize: 50,
                color: '#FFFFFF',
                fontWeight: 'bold'
            }}>
              1
            </Text> 
            <Text style={{
              paddingTop: 20,
              paddingLeft: 20,
              alignSelf: 'flex-start',
              color: '#FFFFFF',
              fontSize: 12,
              fontWeight: '600'
            }}>
              Tăng 3 hạng{"\n"}
              so với tuần trước
            </Text>
          </View>
        </View>
      </View>
      <Text style= {{
          fontSize: 17,
          alignSelf: 'center',
          paddingTop: 120,
          fontWeight: 500,
          color: '#001F70'
      }}>
        Tuần này
      </Text>
      <Text style={{
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop: 20,
        color: '#001F70'
      }}>
        Thứ hạng học tập
      </Text>
      <FlatList
        data={DATA} //data ng dùng m sort cao tới thấp nhé meo meo
        renderItem={({item}) => 
        <View style={styles.card}>
            <Text style={{
              fontSize:15,
              paddingTop: 15,
              fontWeight:'bold',
              color: '#001F70'
            }}
            onPress={()=> {
              console.log("meo")
              console.log(item.image)
            }}>
              {x++}
            </Text>
            <Image
                style={styles.tinyLogo}
                source={{uri: item.image}}
                // source={require('../../../assets/dua.jpg')} //t k lấy url từ data đc huhu
            />
            <View style={styles.text}>
              <Text style={styles.name}>{item.username}</Text>
              <Text style={styles.score}>   Điểm tuần này: {item.score}</Text>
            </View>
        </View>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};


export default Leaderboard;
