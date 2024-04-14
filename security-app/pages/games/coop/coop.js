import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import HighlightText from '@sanar/react-native-highlight-text';


const Coop = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <View style={{
            width: 350,
            height: 550,
            backgroundColor: '#ded5f1',
            borderRadius: 16,
            padding: 20
        }}>
        <View style={{
                borderColor: 'black',
                borderWidth:1,
                borderRadius: 16,
                width: 140,
                height: 40,
                backgroundColor: 'white',
                left: 10,
                bottom: 25,
                position: 'absolute',
                
            }}>

        </View>
            <Text style ={{
                fontSize: 15
            }}>
            {/* Subject: Important Update: Your Account Requires Immediate Attention {'\n'}
            {'\n'} */}
            
            Subject: Important Update: Your ███ Requires Immediate Attention {'\n'}
            {'\n'}

            Dear ████ {'\n'}
            {/* Dear John Smith, {'\n'} */}
            {'\n'}

            We've noticed some unusual login attempts on your ███. To secure your account and prevent unauthorized access, we require your immediate action.{'\n'}

            {/* We've noticed some unusual login attempts on your Vietcombank account. To secure your account and prevent unauthorized access, we require your immediate action.{'\n'} */}

            Please review the recent activity and confirm or deny these actions:{'\n'}
            
            </Text>

            <View style={{
                borderColor: 'black',
                borderWidth:1,
                borderRadius: 16,
                width: 215,
                backgroundColor: 'white',
                left: -5,
                bottom: 10
            }}
            >
                <Text style={{
                    color: 'blue',
                    left: 5,
                    top:7
                }}>
                    [Review Recent Activity Button]{'\n'}
                </Text>
            </View>
            <Text>
            █████████████████████████████████████████████████████████████████████████████████████ {'\n'}{'\n'}
            {/* If you did not attempt to access your account, please click on the link below to secure your account immediately:{'\n'}
            [Secure My Account Now Button]{'\n'}{'\n'} */}

            Note: Ignoring this message may result in temporary suspension of your account.{'\n'}{'\n'}

            Thank you for choosing VCB and helping us keep your account safe.{'\n'}{'\n'}

            Warm Regards,{'\n'}{'\n'}
            VCB Support Team{'\n'}
            0982319273{'\n'}
            </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={(handleButtonPress) => { navigation.navigate('Simulation'); } }>
            <Text style={[styles.buttonmainText, { color: 'black', 
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
    width: 300,
    position: 'absolute',
    backgroundColor: 'orange',
    bottom: 30,
    height: 80,
    alignContent: 'center',
    borderRadius: 16
  }
});

export default Coop;
