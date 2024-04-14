import Reactfrom from'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';


// Ajax is me frfr (Get urges after a minor inconvenience)

function GameMenu ({navigation})  {
  return (
    
    <View style={{
        paddingTop: 50,
        maxWidth: '100%'

    }}>

        <Text style = {[styles.lesson]}>Game Zone</Text>
        <Text style = {[styles.explain]}>Learn by playing!</Text>
        <View stlye={{
            
        }}>
                <TouchableOpacity style={styles.gameButton1} onPress={(handleButtonPress) => { navigation.navigate('DragnDrop'); } }>
                    <Image style={styles.image} source={require('../../../assets/gamebuttons/trashgame.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameButton2} onPress={(handleButtonPress) => { navigation.navigate('Simulation'); } }>
                    <Image style={styles.image} source={require('../../../assets/gamebuttons/scamgame.png')}/>
                </TouchableOpacity>
        </View>
        <View>
                <TouchableOpacity style={styles.gameButton1} onPress={(handleButtonPress) => { navigation.navigate('Simulation'); } }>
                    <Image style={[styles.image, {bottom: 90}]} source={require('../../../assets/gamebuttons/callgame.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.gameButton2} onPress={(handleButtonPress) => { navigation.navigate('WrongResult2'); } }>
                    <Image style={[styles.image, {bottom: 90}]} source={require('../../../assets/gamebuttons/phishinggame.png')}/>
                </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.gameButton3} onPress={(handleButtonPress) => { navigation.navigate('WrongResult2'); } }>
            <Image style={{
                bottom: 180, 
                maxWidth: 380,
                resizeMode: 'contain',
                left: 17}} 
                source={require('../../../assets/gamebuttons/coopgame.png')}/>
        </TouchableOpacity>
        </View>
    
  );
};

styles = StyleSheet.create(
    { lesson:{
        fontSize: 30,
        fontWeight:700,
        color:'#0C69F1',
        alignSelf: 'center'
    },
    explain:{
        fontSize: 16,
        fontWeight:600,
        color: "#0F1113",
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        },
    page_container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FCFF',
        // gap:100
        flexDirection:'row',
        },
    flexContainerCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        left: 20
    },
    gameButton1: {
        width: '50%',
        // backgroundColor: 'orange',
        position: 'absolute',
        left: 15,
    },
    gameButton2: {
        width: '50%',
        // height: 10,
        // backgroundColor: 'pink',
        alignSelf: 'flex-end',
        left: 10
    },
    gameButton3: {
        // backgroundColor: 'orange'
    },
    image: {
        resizeMode: 'contain',
        maxWidth: 180,
        bottom: 20
    }
    }
)
export default GameMenu;
