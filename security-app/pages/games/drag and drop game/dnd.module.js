
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    boder:{
      position: 'absolute',
        width: 100,
        height: 70,
        top: 60,
        alignSelf: 'center',
        backgroundColor: '#FECE00',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
  button1: {
      position: 'absolute',
      width: 300,
      height: 70,
      bottom: 60,
      left:55,
      alignSelf: 'center',
      backgroundColor: '#FECE00',
      color: '#fffff',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center', // Center text horizontally
      justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#0C69F1',
      padding: 20,
      alignItems: 'center',
      textAlign: 'center',
    },
    card:{
      backgroundColor:"#EAF7FF",
      width:300,
      height:200,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 2, // Border width
      borderColor: '#0C69F1', // Border color
    },
    button:{

      width:'100%',
      height:100,
      bottom:0,
      position:"absolute"
    },
    buttonBackground: {
      bottom: -150,
      width: 500, // Set width of the button
      height: 300, // Set height of the button
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export const SUSPISCIOUS_LINKS =[
    { id :1,
      link: "https://www.youtube.com/watch?v=BhszM7II9p8&list=PL4qXOeFNdhK8WOVHgyET1-cLqpPRtAvOn&index=57&ab_channel=SIX",
      is_sus: "true"
    },
    { id: 2,
      link: "https://github.com/natsun08",
      is_sus: "false"
    },
    { id:3,
      link: "https://docs.expo.dev/router/installation/",
      is_sus: "false"
    },
    { id:4,
      link: "https://x.com/mini_cini98/status/1778557743047008354?s=46",
      is_sus: "true"
    }
  ]
  