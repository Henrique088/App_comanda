import { StyleSheet } from 'react-native';

const stylepedidovenda = StyleSheet.create({
  ContainerPedido: {
    flex:1,    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#E8E8E8",   
  },  
   
    Button:{     
      alignItems: 'center',
      justifyContent: 'center',
      //textAlign: 'center', 
      //borderRadius: 80,
      //left: 25,
      width: "60",
      height: 55,
      borderColor: "#FF7F50",
      borderWidth: 2,
      borderRadius: 10,
      backgroundColor: "#FF7F50",
      
         
    },  

    area: {                    
      backgroundColor: "#E8E8E8",     
    }, 

    ButtonContainer: {
     
      flexDirection: 'row',
      //height: "30%",
      width: "50%",
      marginTop:45,
      marginBottom:5, 
      justifyContent:'center',     
      alignItems:"center", 
      textAlign:"center",
      //backgroundColor: "#E8E8E8",
      
        
     
    },

    numero: {
      alignItems:"center", 
    },

    container: { 
      flex:0.5,                 
      backgroundColor: "#d3d3d3",                   
      width: '95%',
      //height:"40%",     
      borderRadius: 20,                
      alignItems:"center",
      justifyContent:"center",
      
    },     
    
    Mesa:{
      position:'static',
      width: '95%', 
      height:'8%',
      
      marginTop:'5%',
      marginBottom:'3%',
      marginLeft:'5%',
      marginRight:'5%',        
      backgroundColor: "#1E90FF",
      borderRadius: 15,
      alignItems:"center",
      justifyContent: "center",       
    },
   
    Text:{        
      fontWeight:'bold',
      fontSize:30,
      color:'blue',            
    },

    ListarContainer: {
      flex:1,
      marginTop:'1%',
      marginLeft:'5%',
      marginRight:'5%',
      justifyContent:'center',
      alignItems:"center",
      backgroundColor: "#FFFFFF",
      borderRadius: 5,
    },
    FlatList:{
      flex:1,
      marginTop: 10,
    },
    input:{
      flex:1,
      width:70,
      height:40,
      marginHorizontal:5,
      marginVertical:5,     
      backgroundColor:'#F4F3F3',      
      borderRadius:15,
    //  borderWidth:5,
    //  borderColor:"#C0C0C0",
      fontSize: 18,
      fontStyle:'normal',
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',    
             
  },
  organizabuttons:{    
    flexDirection:'row',      
  },

  buttonminus:{
    margin:15,
    width:"20%",
    height:"70%",
    borderTopRightRadius:25,        
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    borderTopLeftRadius:25,  
    
    backgroundColor:"#FF7F50", 
    alignItems: 'center',  
    
  },
  buttonplus:{
    margin:15,
    width:"20%",
    height:"70%",
    backgroundColor:"#FF7F50", 
    alignItems: 'center',  
    borderTopRightRadius:25,        
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    borderTopLeftRadius:25,  
   },
   scrollView: {
    marginTop: 20,
    marginHorizontal: 10,
  },

  });


export default stylepedidovenda  