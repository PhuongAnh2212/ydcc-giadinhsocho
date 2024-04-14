import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import HighlightText from '@sanar/react-native-highlight-text';


const Coop2 = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <Text style = {[styles.explain, {fontSize:14, paddingBottom: 5,bottom:40}]}>Game</Text>
            <Text style = {[styles.lesson, {fontSize:18, paddingBottom: 0,bottom: 40}]}>Co-op Fraud Detector</Text>
        <View style={{
            width: 350,
            height: 550,
            backgroundColor: '#ECC8D3',
            borderRadius: 16,
            padding: 20,
            bottom: 20
        }}>
        <View style={{
                borderColor: 'black',
                borderWidth:1,
                borderRadius: 16,
                width: 240,
                height: 30,
                backgroundColor: 'white',
                left: 15,
                top:312,
                position: 'absolute',
                
            }}>

        </View>
        <View style={{
                borderColor: 'black',
                borderWidth:1,
                borderRadius: 16,
                width: 170,
                height: 30,
                backgroundColor: 'white',
                left: 13,
                bottom:9,
                position: 'absolute',
                
            }}>

        </View>
            <Text style ={{
                fontSize: 15
            }}>
            Subject: Important Update: Your Account ██████████ {'\n'}
            {'\n'}
            
            {/* Subject: Important Update: Your ███ Requires Immediate Attention {'\n'}
            {'\n'} */}

            {/* Dear ████ {'\n'} */}
            Dear John Smith, {'\n'}
            {'\n'}

            {/* We've noticed some unusual login attempts on your ███. To secure your account and prevent unauthorized access, we require your immediate action.{'\n'} */}

            We've noticed some unusual login attempts on your Vietcombank account. To █████ and ███████████, we require your immediate action.{'\n'}

            Please ███ the recent activity and confirm or deny these actions: 
            
            </Text>
             <Text style={{
                    color: 'blue',
                    left: 5,
                    top:7,
                    textDecorationLine: 'underline'
                }}>
                    [Review Recent Activity Button]{'\n'}
            </Text>
            <Text>
            {/* █████████████████████████████████████████████████████████████████████████████████████ {'\n'}{'\n'} */}
            If you did not attempt to access your account, please click on the link below to secure your account immediately:{'\n'}
            <Text style={{
                color: "blue",
                textDecorationLine: 'underline'
            }}>
                {'\n'}[Click here to secure your account]{'\n'}{'\n'}
            </Text>
            Note: Ignoring this message may result in ██████████.{'\n'}{'\n'}

            Thank you for choosing VCB and helping us keep your account safe.{'\n'}{'\n'}

            Warm Regards,{'\n'}{'\n'}
            VCB Support Team{'\n'}{'\n'}
            John.Smith@gmail.com{'\n'}
            </Text>
            
        </View>
        <TouchableOpacity style={styles.button} onPress={(handleButtonPress) => { navigation.navigate('Onboarding'); } }>
            <Text style={[styles.buttonmainText, { color: 'white', 
                        fontWeight: 'bold', 
                        fontSize: 20, 
                        top:25,
                        alignSelf:'center',
                        
                        }]}>Finish</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    width: 350,
    position: 'absolute',
    backgroundColor: '#00CF66',
    bottom: 30,
    height: 70,
    alignContent: 'center',
    borderRadius: 16
  },
  explain:{
      fontSize: 16,
      fontWeight:'regular',
      color: "#0F1113",
      alignSelf:'center',
      justifyContent:'center',
      alignContent:'center',
      textAlign:'center',
      },
  lesson:{
        fontSize: 30,
        fontWeight:900,
        color:'#0C69F1'
    }
});

export default Coop2;
