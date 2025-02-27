import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Tela:{  
        flex:1,     
        backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',           
        },

    TextTela:{
        fontSize:28,
        color:'red',
        backgroundColor:"#38A69D",
    },
    
    ButtonComanda:{
        width: 300,
        height:80,
        borderRadius:8,
        paddingVertical:20,
        marginBottom:18,
        backgroundColor:"#FF4500",
        justifyContent:'center',
        alignItems:'center',
    },

    ButtonPedido:{
        width: 300,
        height:80,
        borderRadius:8,
        paddingVertical:20,
        marginBottom:18,
        backgroundColor:"#3CB371",
        justifyContent:'center',
        alignItems:'center',
    },

    TextButtonPedido:{
        fontWeight:'bold',
        fontSize:26,
        color:'#fff',        
    },

    ButtonProduto:{
        width: 300,
        height:80,
        borderRadius:8,
        paddingVertical:20,
        marginBottom:18,
        backgroundColor:"#1E90FF",
        justifyContent:'center',
        alignItems:'center',
    },

    TextButtonProduto:{
        fontWeight:'bold',
        fontSize:26,
        color:'#fff',        
    },

    TextUser:{
        fontWeight:'bold',
        fontSize:26,
        color:'red',
        backgroundColor:"#1E90FF",
    },

    
    });
    
export default styles          