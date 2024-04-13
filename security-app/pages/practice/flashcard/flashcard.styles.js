import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF7FF',
    gap:100
    },
    navigate:{
        flexDirection:"row",
        gap:50,
    }
    ,
    selectButton:{
        width:150,
        height:70,
        justifyContent: 'center',
        alignItems: 'center',  
        borderRadius:20,
    },
    back:{
        backgroundColor:"#FECE00",
    },
    next:{
        backgroundColor:"#E2698F",
        },
    button_des: {
      fontSize: 30,
      fontWeight:500,
    },
    qna:{
        position:'absolute',
        flex:1,
        // backgroundColor: '#E2698F',
        height:500,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        flexDirection:'column'
    }
    ,
    card:{
        backgroundColor:'#0C69F1',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:20,
        height:300,
        width:350,
        borderColor:"#0C69F1",
        borderWidth:20,
        overflow:'hidden',},
    flipped:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:20,
        height:300,
        width:350,
        overflow:'hidden',
        backgroundColor:'#FFFFFF',
        borderColor:"#0C69F1",
        borderWidth:20,
        objectFit:'scale-down'
    },
    question:{
        fontSize: 45,
        fontWeight:500,
        color: "#FFFFFF",
        },
    answer:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop:20
    },
    explain:{
        fontSize: 30,
        fontWeight:500,
        color: "#0F1113",
        },
    img:{
        maxWidth:400,
        objectFit:'contain'

    }

});

export default styles;