
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: 'black'
    },
    card:{
      backgroundColor:"#FF0000",
      width:300,
      height:200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button:{
      backgroundColor:"#000000",
      width:'100%',
      height:100,
      bottom:0,
      position:"absolute"
    }
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
  