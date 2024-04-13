import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    page_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FCFF',
    gap:100
    },
    statusbar:{
        position:"absolute",
        // backgroundColor:"#E2698F",
        top:40,
        width:"90%",
        justifyContent: 'center',
        alignItems: 'center',
        objectFit:'contain'
    },


    navigate:{
        position:'absolute',
        bottom:30,
        flexDirection:"row",
        gap:10,
    }
    ,
    selectButton:{
        width: 190,
        height: 70,
        bottom: 0,
        alignSelf: 'center',
        color: '#fffff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    back:{
        backgroundColor:"#FECE00",
    },
    next:{
        backgroundColor:"#E2698F",
        },
    button_des: {
      fontSize: 24,
      fontWeight:500,
    },
    qna:{
        position:'absolute',
        flex:1,
        // backgroundColor: '#E2698F',
        height:400,
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
    lesson:{
        fontSize: 30,
        fontWeight:900,
        color:'#0C69F1'
    }
    ,
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
        maxWidth:320,
        objectFit:'contain'

    },
    icon:{
        position:'absolute',
        left:0,
        top:10
    }

});

export default styles;