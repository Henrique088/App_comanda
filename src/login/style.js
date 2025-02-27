import { Animated, Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Tela:{  
        flex:1,
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',           
        },

    HenderTela:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart:'5%',        
    },

    TextTela:{
        fontSize:28,
        color:'#fff',
    },

    Title:{
        color:'#fff',       
        fontSize:22,
        marginTop:'2%',
        marginBottom:'2%',
        paddingStart:'3%',    
    },
    Organizarinput:{
        position:'static',
        flexDirection:'column',
        marginTop:"3%",
       
    },
    inputUser:{
        width:300,
        height:42,
        borderBottomWidth:1,
        backgroundColor:'#F4F3F3',        
        padding:5,
        marginTop:'10%',
        borderRadius:5,
        borderWidth:1,
        borderColor:0,
        fontSize: 18,
        fontStyle:'normal',       
    },
    inputPass:{
        width:300,
        height:42,
        borderBottomWidth:1,
        backgroundColor:'#F4F3F3',        
        padding:5,
        marginTop:'1%',
        borderRadius:5,
        borderWidth:1,
        borderColor:0,
        fontSize: 18,
        fontStyle:'normal',       
    },

    logo:{ 
        position:'static',
        marginTop:100,
        width:150,
        height:150,
        alignItems:'center',
        justifyContent:'center',
       
    },

    TextButton:{
        fontWeight:'bold',
        fontSize:18,
        color:'#fff',        
    },

    Button:{
        flex:1,           
        width: '100%',
        height:'100%',
        borderRadius:9,        
        backgroundColor:"#38A69D", 
        justifyContent:'center',
        alignItems:'center',  
        borderRadius:5,
        borderWidth:1,       
        
    },
    organizarbotao:{
        width: 300,
        height:50,                
        backgroundColor:'green',
        borderRadius:5,
        borderWidth:1,
    },

    erroMessage:{
        borderRadius:9,
        paddingVertical:8,
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        maxHeight:"80%",    
      },

      MenssageRetorno:{                
        alignItems:'flex-end',  
        marginTop:10,       
        fontSize:16,
        color:"red",
        fontWeight:"bold",
      },

     
    
  });


export default styles  