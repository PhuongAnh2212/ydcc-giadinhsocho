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
        top:55,
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
        backgroundColor:"#ECC8D3",
    },
    next:{
        backgroundColor:"#E2698F",
        },
    button_des: {
      fontSize: 20,
      fontWeight:'bold',
    },
    qna:{
        position:'absolute',
        flex:1,
        // backgroundColor: '#E2698F',
        height:400,
        alignSelf:'center',
        justifyContent:'center',
        alignContent:'center',
        flexDirection:'column',
    }
    ,
    card:{
        backgroundColor:'#0C69F1',
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center',
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
        objectFit:'scale-down',
        alignSelf:'center'
    },
    lesson:{
        fontSize: 30,
        fontWeight:900,
        color:'#0C69F1'
    }
    ,
    question:{
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFFFFF",
        textAlign: 'center',
        },
    answer:{
        width:350,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        paddingTop:20,
        alignSelf:'center',
        textAlign:'center',
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
    img:{
        maxWidth:320,
        objectFit:'contain'

    },
    icon:{
        position:'absolute',
        left:0,
        top:10
    },

    quizButton1: {
        position: 'absolute',
        width: 350,
        height: 70,
        bottom: 330,
        left: 30,
        alignSelf: 'center',
        backgroundColor: '#DEEFFF',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    quizButton2: {
        position: 'absolute',
        width: 350,
        height: 70,
        bottom: 250,
        left: 30,
        alignSelf: 'center',
        backgroundColor: '#DEEFFF',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    quizButton3: {
        position: 'absolute',
        width: 350,
        height: 70,
        bottom: 170,
        left: 30,
        alignSelf: 'center',
        backgroundColor: '#DEEFFF',
        color: 'black',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center',
    },
    quizText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    backgroundQuiz: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center', 
        width:420,
        height: 900
    }

});

export default styles;