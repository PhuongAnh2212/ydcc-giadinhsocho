import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#EAF7FF',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      color: 'black'
    },
    card:{
        flex:1,
        backgroundColor:'#0C69F1',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        transformStyle: 'preserve-3d',
        borderRadius:20,
        width: 300,
    },
    flipped:{
        
        transform: "rotateY(180deg)",
        backgroundColor:'#9B2626'
    },

    front:{
        padding:"1%",
    },
    back:{
        backfaceVisibility:"hidden",
        transform: "rotateY(180deg)"
    }
  });

export default styles;