import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 5,    
  },

    Tela:{  
        flex:1,     
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',   
        }, 

    button:{
      backgroundColor: "#38A69D",
      width: '80%',        
      marginTop: '30%',
      marginLeft: '10%',
      marginRight: '10%',
      marginStart: 1,
      borderRadius: 20,
      paddingVertical: '50%',
      justifyContent: 'center',
      alignItems: "center",

    },    
    TextButton:{
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',        
    },

    Item:{             
        backgroundColor: "#38A69D",        
        width: '30%',        
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        marginStart: 1,
        borderRadius: 20,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: "center",
    },
    
    TextItem:{
        fontWeight: "bold",
        color: "blue",
    },

    itemEmpty: {
        backgroundColor: "transparent"
      },

      Contem: {                 
//        backgroundColor: "#EA8F51",
        width: '30%', 
        margin: 1,
        padding: 10,
        marginTop: 20,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginStart: 7,
        borderRadius: 20,
        paddingVertical: 30,        
        justifyContent: 'center',
        alignItems: "center",
      },     

      text: {
        color: "#DFE3EE",
        fontSize: 18,
        fontWeight:'bold',
      }, 
     
      itenspedido: {       
        color: "#000000",
        fontStyle: 'normal',
        fontSize: 14,
      }, 

      SubTotais: {       
        color: "#2F4F4F",
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: 'bold',
      }, 

      ItemComanda: {
        flex:1,
        marginTop:10,
        justifyContent: 'center',
        color: "#FFFFFF",
        fontStyle: 'normal',
        fontSize: 18,
      },       
     

      ListaItem:{                
        marginBottom: 15,
        borderRadius: 4,
        backgroundColor: "#f8f8ff",        
        padding: 10,  
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: "#DCDCDC", 
    },

    buttonList: {
      alignItems: 'center',
      backgroundColor: '#3D3dE5',
      
    },
    AlinhaTexto:{ 
      width: '80%',          
     alignContent:'flex-end',    
     backfaceVisibility:'hidden',
    },

    separator:{
      height: 1,               
      width: '100%',
      backgroundColor: '#C8C8C8',
    },
    imageBackground: {
      flex: 1,
      justifyContent: 'center',
  //    resizeMode: "cover",      
  //    alignItems: "center",
      width: 500,
      height:1200,
      
    },
    imageForeground: {
      width: 250,
      height: 250
    },

  });


export default styles  